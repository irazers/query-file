import { runCommand } from '@oclif/test';
import { expect } from 'chai';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

describe('parquet describe', () => {
  const currentDirectory = dirname(fileURLToPath(import.meta.url));

  it('runs parquet describe', async () => {
    const { stdout, error } = await runCommand(
      `parquet describe ${join(currentDirectory, 'test.parquet')}`,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(error).to.be.undefined;
    expect(stdout).to.equal(
      `Describing ${join(currentDirectory, 'test.parquet')}
{
  "Name": "BYTE_ARRAY",
  "Age": "INT64",
  "City": "BYTE_ARRAY",
  "Test": "BYTE_ARRAY"
}
`,
    );
  });

  it('runs parquet describe with verbose', async () => {
    const { stdout, error } = await runCommand(
      `parquet describe ${join(currentDirectory, 'test.parquet')} --verbose`,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(error).to.be.undefined;
    expect(stdout).to.equal(
      `Describing ${join(currentDirectory, 'test.parquet')}
Processing chunk with 4 rows
{
  "Name": "BYTE_ARRAY",
  "Age": "INT64",
  "City": "BYTE_ARRAY",
  "Test": "BYTE_ARRAY"
}
`,
    );
  });
});
