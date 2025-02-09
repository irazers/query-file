import { Command } from '@oclif/core';

export class Parquet extends Command {
  public static override description = 'describe a parquet file';

  public static override examples = ['<%= config.bin %> <%= command.id %>'];

  public async run(): Promise<void> {
    this.log('please specify a subcommand');
  }
}
