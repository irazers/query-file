import { runCommand } from '@oclif/test';
import { expect } from 'chai';

describe('parquet', () => {
  it('runs parquet', async () => {
    const { stdout } = await runCommand('parquet');
    expect(stdout).to.contain('please specify a subcommand');
  });
});
