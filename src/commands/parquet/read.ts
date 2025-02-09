import { Args, Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import CliTable3 from 'cli-table3';
import { getConnection } from '../../utils/duckdb.js';

export default class Read extends Command {
  public static override args = {
    file: Args.string({ description: 'file to read' }),
  };

  public static override description = 'describe the command here';

  public static override examples = ['<%= config.bin %> <%= command.id %>'];

  public static override flags = {
    columns: Flags.string({
      char: 'c',
      description: 'comma separated columns to read',
    }),
    limit: Flags.integer({
      char: 'l',
      description: 'limit the number of rows to read (default 20)',
      default: 20,
    }),
    where: Flags.string({
      char: 'w',
      description: 'where clause to filter rows',
    }),
    verbose: Flags.boolean({
      char: 'v',
      description: 'print debug information',
      default: false,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Read);
    const connection = await getConnection();

    if (flags.verbose) {
      this.log(chalk.green(`Reading from ${args.file}`));
      this.log(chalk.green(`Columns: ${flags.columns}`));
    }

    let query = `SELECT ${flags.columns ?? '*'} FROM read_parquet('${args.file}')`;

    if (flags.where) {
      query += ` WHERE ${flags.where}`;
    }

    query += ` LIMIT ${flags.limit}`;

    const result = await connection.run(query);

    let chunk = await result.fetchChunk();
    const columns = flags.columns?.split(',') ?? [];
    const table = new CliTable3({
      head: columns,
    });

    if (!chunk) {
      return this.error('No data found');
    }

    while (chunk?.rowCount) {
      if (flags.verbose) {
        this.log(chalk.green(`Processing chunk with ${chunk.rowCount} rows`));
      }

      chunk.getRows().forEach((row) => {
        table.push(row.map((value) => value?.toString() ?? ''));
      });

      chunk = await result.fetchChunk();
    }

    this.log(table.toString());
  }
}
