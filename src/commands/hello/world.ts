import { Command } from '@oclif/core';

export default class World extends Command {
  public static args = {};
  public static description = 'Say hello world';
  public static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ];
  public static flags = {};

  public async run(): Promise<void> {
    this.log('hello world! (./src/commands/hello/world.ts)');
  }
}
