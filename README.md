query-file
=================

A CLI to query file formats like parquet, json or CSV


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/query-file.svg)](https://npmjs.org/package/query-file)
[![Downloads/week](https://img.shields.io/npm/dw/query-file.svg)](https://npmjs.org/package/query-file)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g query-file
$ qf COMMAND
running command...
$ qf (--version)
query-file/0.1.0 darwin-arm64 node-v22.13.1
$ qf --help [COMMAND]
USAGE
  $ qf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`qf help [COMMAND]`](#qf-help-command)
* [`qf parquet`](#qf-parquet)
* [`qf parquet describe [FILE]`](#qf-parquet-describe-file)
* [`qf parquet read [FILE]`](#qf-parquet-read-file)
* [`qf plugins`](#qf-plugins)
* [`qf plugins add PLUGIN`](#qf-plugins-add-plugin)
* [`qf plugins:inspect PLUGIN...`](#qf-pluginsinspect-plugin)
* [`qf plugins install PLUGIN`](#qf-plugins-install-plugin)
* [`qf plugins link PATH`](#qf-plugins-link-path)
* [`qf plugins remove [PLUGIN]`](#qf-plugins-remove-plugin)
* [`qf plugins reset`](#qf-plugins-reset)
* [`qf plugins uninstall [PLUGIN]`](#qf-plugins-uninstall-plugin)
* [`qf plugins unlink [PLUGIN]`](#qf-plugins-unlink-plugin)
* [`qf plugins update`](#qf-plugins-update)

## `qf help [COMMAND]`

Display help for qf.

```
USAGE
  $ qf help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for qf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.25/src/commands/help.ts)_

## `qf parquet`

describe a parquet file

```
USAGE
  $ qf parquet

DESCRIPTION
  describe a parquet file

EXAMPLES
  $ qf parquet
```

_See code: [src/commands/parquet/index.ts](https://github.com/irazers/query-file/blob/v0.1.0/src/commands/parquet/index.ts)_

## `qf parquet describe [FILE]`

describe a parquet file

```
USAGE
  $ qf parquet describe [FILE] [-v]

ARGUMENTS
  FILE  file to read

FLAGS
  -v, --verbose  print debug information

DESCRIPTION
  describe a parquet file

EXAMPLES
  $ qf parquet describe
```

_See code: [src/commands/parquet/describe.ts](https://github.com/irazers/query-file/blob/v0.1.0/src/commands/parquet/describe.ts)_

## `qf parquet read [FILE]`

describe the command here

```
USAGE
  $ qf parquet read [FILE] [-c <value>] [-l <value>] [-w <value>] [-v]

ARGUMENTS
  FILE  file to read

FLAGS
  -c, --columns=<value>  comma separated columns to read
  -l, --limit=<value>    [default: 20] limit the number of rows to read (default 20)
  -v, --verbose          print debug information
  -w, --where=<value>    where clause to filter rows

DESCRIPTION
  describe the command here

EXAMPLES
  $ qf parquet read
```

_See code: [src/commands/parquet/read.ts](https://github.com/irazers/query-file/blob/v0.1.0/src/commands/parquet/read.ts)_

## `qf plugins`

List installed plugins.

```
USAGE
  $ qf plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ qf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/index.ts)_

## `qf plugins add PLUGIN`

Installs a plugin into qf.

```
USAGE
  $ qf plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into qf.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the QF_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the QF_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ qf plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ qf plugins add myplugin

  Install a plugin from a github url.

    $ qf plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ qf plugins add someuser/someplugin
```

## `qf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ qf plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ qf plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/inspect.ts)_

## `qf plugins install PLUGIN`

Installs a plugin into qf.

```
USAGE
  $ qf plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into qf.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the QF_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the QF_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ qf plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ qf plugins install myplugin

  Install a plugin from a github url.

    $ qf plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ qf plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/install.ts)_

## `qf plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ qf plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ qf plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/link.ts)_

## `qf plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ qf plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ qf plugins unlink
  $ qf plugins remove

EXAMPLES
  $ qf plugins remove myplugin
```

## `qf plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ qf plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/reset.ts)_

## `qf plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ qf plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ qf plugins unlink
  $ qf plugins remove

EXAMPLES
  $ qf plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/uninstall.ts)_

## `qf plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ qf plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ qf plugins unlink
  $ qf plugins remove

EXAMPLES
  $ qf plugins unlink myplugin
```

## `qf plugins update`

Update installed plugins.

```
USAGE
  $ qf plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/update.ts)_
<!-- commandsstop -->
