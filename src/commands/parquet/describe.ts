import { Args, Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import { getConnection } from '../../utils/duckdb.js';

export default class Describe extends Command {
  public static override args = {
    file: Args.string({ description: 'file to read' }),
  };

  public static override description = 'describe a parquet file';

  public static override examples = ['<%= config.bin %> <%= command.id %>'];

  public static override flags = {
    verbose: Flags.boolean({
      char: 'v',
      description: 'print debug information',
      default: false,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Describe);
    const connection = await getConnection();

    if (!args.file) {
      return this.error('No file specified');
    }

    this.log(`Describing ${args.file}`);

    const metadata = await connection.run(
      `SELECT * FROM parquet_metadata("${args.file}")`,
    );

    let chunk = await metadata.fetchChunk();

    if (!chunk) {
      return this.error('No data found');
    }

    const result: any = {};

    while (chunk?.rowCount) {
      if (flags.verbose) {
        this.log(chalk.green(`Processing chunk with ${chunk.rowCount} rows`));
      }

      chunk.getRows().forEach((row) => {
        result[row[8]?.toString() ?? ''] = row[9];
      });
      chunk = await metadata.fetchChunk();
    }

    this.log(
      JSON.stringify(
        result,
        (_, value) => (typeof value === 'bigint' ? value.toString() : value),
        2,
      ),
    );
  }
}
