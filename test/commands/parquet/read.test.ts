import { runCommand } from '@oclif/test';
import { expect } from 'chai';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

describe('parquet read', () => {
  const currentDirectory = dirname(fileURLToPath(import.meta.url));

  it('runs parquet read', async () => {
    const { stdout, error } = await runCommand(
      `parquet read ${join(currentDirectory, 'test.parquet')}`,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(error).to.be.undefined;
    expect(stdout).to.equal(
      '' +
        '┌──────┬────┬──────────┬───────┐\n' +
        '│ John │ 30 │ New York │ test1 │\n' +
        '├──────┼────┼──────────┼───────┤\n' +
        '│ Jane │ 25 │ London   │ test2 │\n' +
        '└──────┴────┴──────────┴───────┘\n' +
        '',
    );
  });

  it('runs parquet read with limit', async () => {
    const { stdout, error } = await runCommand(
      `parquet read ${join(currentDirectory, 'test.parquet')} --limit 1`,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(error).to.be.undefined;
    expect(stdout).to.equal(
      '' +
        '┌──────┬────┬──────────┬───────┐\n' +
        '│ John │ 30 │ New York │ test1 │\n' +
        '└──────┴────┴──────────┴───────┘\n' +
        '',
    );
  });

  it('runs parquet read with columns selection', async () => {
    const { stdout, error } = await runCommand(
      `parquet read ${join(currentDirectory, 'test.parquet')} --columns Name,Age -l 1`,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(error).to.be.undefined;
    expect(stdout).to.equal(
      '' +
        '┌──────┬─────┐\n' +
        '│ Name │ Age │\n' +
        '├──────┼─────┤\n' +
        '│ John │ 30  │\n' +
        '└──────┴─────┘\n' +
        '',
    );
  });

  it('runs parquet read with where clause', async () => {
    const { stdout, error } = await runCommand(
      `parquet read ${join(currentDirectory, 'test.parquet')} --where "Name = 'John'" -c Name,Age`,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(error).to.be.undefined;
    expect(stdout).to.equal(
      '' +
        '┌──────┬─────┐\n' +
        '│ Name │ Age │\n' +
        '├──────┼─────┤\n' +
        '│ John │ 30  │\n' +
        '└──────┴─────┘\n' +
        '',
    );
  });

  it('runs parquet read with verbose', async () => {
    const { stdout, error } = await runCommand(
      `parquet read ${join(currentDirectory, 'test.parquet')} -w "Name = 'John'" --verbose`,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(error).to.be.undefined;
    expect(stdout).to.equal(
      '' +
        'Reading from ' +
        join(currentDirectory, 'test.parquet') +
        '\n' +
        'Columns: undefined\n' +
        'Processing chunk with 1 rows\n' +
        '┌──────┬────┬──────────┬───────┐\n' +
        '│ John │ 30 │ New York │ test1 │\n' +
        '└──────┴────┴──────────┴───────┘\n' +
        '',
    );
  });
});
