Wallet
=================

Wallet CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bitcoinWallet
$ bitcoinWallet COMMAND
running command...
$ bitcoinWallet (--version)
bitcoinWallet/0.0.0 win32-x64 node-v18.18.0
$ bitcoinWallet --help [COMMAND]
USAGE
  $ bitcoinWallet COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bitcoinWallet balance`](#bitcoinwallet-balance)
* [`bitcoinWallet createWallet`](#bitcoinwallet-createwallet)
* [`bitcoinWallet generateAddress`](#bitcoinwallet-generateaddress)
* [`bitcoinWallet help [COMMANDS]`](#bitcoinwallet-help-commands)
* [`bitcoinWallet importWallet`](#bitcoinwallet-importwallet)
* [`bitcoinWallet listWallets`](#bitcoinwallet-listwallets)
* [`bitcoinWallet plugins`](#bitcoinwallet-plugins)
* [`bitcoinWallet plugins:install PLUGIN...`](#bitcoinwallet-pluginsinstall-plugin)
* [`bitcoinWallet plugins:inspect PLUGIN...`](#bitcoinwallet-pluginsinspect-plugin)
* [`bitcoinWallet plugins:install PLUGIN...`](#bitcoinwallet-pluginsinstall-plugin-1)
* [`bitcoinWallet plugins:link PLUGIN`](#bitcoinwallet-pluginslink-plugin)
* [`bitcoinWallet plugins:uninstall PLUGIN...`](#bitcoinwallet-pluginsuninstall-plugin)
* [`bitcoinWallet plugins:uninstall PLUGIN...`](#bitcoinwallet-pluginsuninstall-plugin-1)
* [`bitcoinWallet plugins:uninstall PLUGIN...`](#bitcoinwallet-pluginsuninstall-plugin-2)
* [`bitcoinWallet plugins update`](#bitcoinwallet-plugins-update)
* [`bitcoinWallet transactions`](#bitcoinwallet-transactions)

## `bitcoinWallet balance`

Get the balance of a wallet

```
USAGE
  $ bitcoinWallet balance -n <value>

FLAGS
  -n, --name=<value>  (required) Wallet name

DESCRIPTION
  Get the balance of a wallet
```

_See code: [dist/commands/balance/index.ts](https://github.com/R-ohit-B-isht/bitcoinWallet/blob/v0.0.0/dist/commands/balance/index.ts)_

## `bitcoinWallet createWallet`

Create a new BIP39 wallet

```
USAGE
  $ bitcoinWallet createWallet [-n <value>]

FLAGS
  -n, --name=<value>  Wallet name

DESCRIPTION
  Create a new BIP39 wallet
```

_See code: [dist/commands/createWallet/index.ts](https://github.com/R-ohit-B-isht/bitcoinWallet/blob/v0.0.0/dist/commands/createWallet/index.ts)_

## `bitcoinWallet generateAddress`

Generate an unused address for a wallet

```
USAGE
  $ bitcoinWallet generateAddress -n <value>

FLAGS
  -n, --name=<value>  (required) Wallet name

DESCRIPTION
  Generate an unused address for a wallet
```

_See code: [dist/commands/generateAddress/index.ts](https://github.com/R-ohit-B-isht/bitcoinWallet/blob/v0.0.0/dist/commands/generateAddress/index.ts)_

## `bitcoinWallet help [COMMANDS]`

Display help for bitcoinWallet.

```
USAGE
  $ bitcoinWallet help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bitcoinWallet.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/lib/commands/help.ts)_

## `bitcoinWallet importWallet`

Import a wallet from a mnemonic

```
USAGE
  $ bitcoinWallet importWallet -m <value> -n <value>

FLAGS
  -m, --mnemonic=<value>  (required) Mnemonic
  -n, --name=<value>      (required) Wallet name

DESCRIPTION
  Import a wallet from a mnemonic
```

_See code: [dist/commands/importWallet/index.ts](https://github.com/R-ohit-B-isht/bitcoinWallet/blob/v0.0.0/dist/commands/importWallet/index.ts)_

## `bitcoinWallet listWallets`

List all wallets

```
USAGE
  $ bitcoinWallet listWallets

DESCRIPTION
  List all wallets
```

_See code: [dist/commands/listWallets/index.ts](https://github.com/R-ohit-B-isht/bitcoinWallet/blob/v0.0.0/dist/commands/listWallets/index.ts)_

## `bitcoinWallet plugins`

List installed plugins.

```
USAGE
  $ bitcoinWallet plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bitcoinWallet plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/lib/commands/plugins/index.ts)_

## `bitcoinWallet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bitcoinWallet plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bitcoinWallet plugins add

EXAMPLES
  $ bitcoinWallet plugins:install myplugin 

  $ bitcoinWallet plugins:install https://github.com/someuser/someplugin

  $ bitcoinWallet plugins:install someuser/someplugin
```

## `bitcoinWallet plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bitcoinWallet plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bitcoinWallet plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/lib/commands/plugins/inspect.ts)_

## `bitcoinWallet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bitcoinWallet plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bitcoinWallet plugins add

EXAMPLES
  $ bitcoinWallet plugins:install myplugin 

  $ bitcoinWallet plugins:install https://github.com/someuser/someplugin

  $ bitcoinWallet plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/lib/commands/plugins/install.ts)_

## `bitcoinWallet plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ bitcoinWallet plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bitcoinWallet plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/lib/commands/plugins/link.ts)_

## `bitcoinWallet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bitcoinWallet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bitcoinWallet plugins unlink
  $ bitcoinWallet plugins remove
```

## `bitcoinWallet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bitcoinWallet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bitcoinWallet plugins unlink
  $ bitcoinWallet plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/lib/commands/plugins/uninstall.ts)_

## `bitcoinWallet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bitcoinWallet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bitcoinWallet plugins unlink
  $ bitcoinWallet plugins remove
```

## `bitcoinWallet plugins update`

Update installed plugins.

```
USAGE
  $ bitcoinWallet plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/lib/commands/plugins/update.ts)_

## `bitcoinWallet transactions`

Get the transactions of a wallet

```
USAGE
  $ bitcoinWallet transactions -n <value>

FLAGS
  -n, --name=<value>  (required) Wallet name

DESCRIPTION
  Get the transactions of a wallet
```

_See code: [dist/commands/transactions/index.ts](https://github.com/R-ohit-B-isht/bitcoinWallet/blob/v0.0.0/dist/commands/transactions/index.ts)_
<!-- commandsstop -->
