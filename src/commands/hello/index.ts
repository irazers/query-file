import { Args, Command, Flags } from '@oclif/core';

export default class Hello extends Command {
  public static args = {
    person: Args.string({ description: 'Person to say hello to', required: true }),
  };
  public static description = 'Say hello';
  public static examples = [
    `<%= config.bin %> <%= command.id %> friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ];
  public static flags = {
    from: Flags.string({
      char: 'f',
      description: 'Who is saying hello',
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Hello);

    this.log(
      `hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`,
    );
  }
}
