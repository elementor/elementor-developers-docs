# API --  `$e.commands`

The new Commands API (since 2.7.0), provides a simple and convenient way to run something in the editor, create a widget, as well as show a notice or undo changes, using JS commands.

The full list of commands, including custom & 3rd commands, is available via: `$e.commands.getAll();`

* **Description**: `$e.commands` API is a manager of all the _commands_, allow you to create custom _commands_ that runs by `$e.run()`, each components have his own unique commands, and all the commands are managed by this **API**.

* **Location**: `/core/common/assets/js/components/commands.js`

* **Parent**: `elementorModules.Module`

* **Available commands:** for further information about **all** the commands, please visit [`{$e.commands.getAll()}`](./commands-methods/getall.md) **method**.

## Methods

| Method                               | Params                                                                                 | Returns                         | Description                                                                         |
|--------------------------------------|----------------------------------------------------------------------------------------|---------------------------------|-------------------------------------------------------------------------------------|
| `$e.commands.getAll()`               |                                                                                        |                                 | Receive all loaded commands.                                                        |
| `$e.commands.register()`             | `{(BaseComponent⎮string)}` *component*, `{String}` command, `{function()}` *callback* | `{Commands}` *$e.commands*      | Register new command.                                                               |
| `$e.commands.getComponent()`         | `{String}` *command*                                                                   | `{BaseComponent)`               | Receive Component of the command.                                                   |
| `$e.commands.is()`                   | `{String}` *command*                                                                   | `{Boolean}`                     | Checks if current running command is the same parameter command.                    |
| `$e.commands.isCurrentFirstTrace()`  | `{String}` *command*                                                                   | `{Boolean}`                     | Checks if parameter command is the first command in trace that currently running.   |
| `$e.commands.getCurrent()`           |                                                                                        | `{Object}`                      | Receive currently running components and its commands.                              |
| `$e.commands.getCurrentArgs()`       |                                                                                        | `{Object}`                      | Receive currently running command args.                                             |
| `$e.commands.getCurrentFirst()`      |                                                                                        | `{String}`                      | Receive first command that currently running.                                       |
| `$e.commands.getCurrentFirstTrace()` |                                                                                        | `{Object}`                      | Receive first command in trace that currently running.                              |
| `$e.commands.beforeRun()`            | `{String}` *command*, `{Object}` *args*                                                | `{Boolean}` *dependency result* | Method fired before the command runs.                                               |
| `$e.commands.run()`                  | `{String}` *command*, `{Object}` *args*                                                | `{}` *results*                  | Runs a command.                                                                     |
| `$e.commands.runShortcut()`          | `{String}` *command*, *event*                                                          | `{}` *results*                  | Run shortcut.                                                                       |
| `$e.commands.afterRun()`             |                                                                                        |                                 | Method fired after the command runs.                                                |
| `$e.commands.error()`                | `{String}` *message*                                                                   |                                 | Throws error.                                                                       |

## Examples

```javascript
// Example create and register new command.
// Important: Available to run in the console does not depends on anything else.

class ExampleCommand extends $e.modules.CommandBase {
	apply( args ) {
		// Output command args to console.
		console.log( 'ExampleCommand: ', args );

		// Return object as example.
		return {
			example: 'result from ExampleCommand',
		};
	}
}

class CustomComponent extends $e.modules.ComponentBase {
	getNamespace() {
		return 'custom-component';
	}

	defaultCommands() {
		// Object of all the component commands.
		return {
			example: ( args ) => ( new ExampleCommand( args ) ).run(),
		};
	}
}

// Register the new component.
$e.components.register( new CustomComponent() );

// Run's 'example' command from 'custom-component'.
result = $e.run( 'custom-component/example', {
	property: 'value',
} );

// Output command run result.
console.log( 'e-commands-eg-1-result: ', result );
```

## Guidelines

* Each command, should be owned by a [component](./components/).
* Currently, there are _3_ main *base/types*:
  * Commands - Base class: `$e.modules.CommandBase` - `[USER]` commands that represent user actions.
  * Commands internal - Base class:  `$e.modules.CommandInternalBase` - `[INTERNAL]` for internal usage.
  * Commands data - Base class: `$e.modules.CommandData` - `[DATA]` commands for communicate with the _data\cache\backend_.
* Each [component](./components/), can override few methods `defaultCommands`, `defaultCommandsInternal`, `defaultData` methods which are used to import the command(s), according to their type.
* The commands should be imported via built-in method called `importCommands`.
  * Example:

```
📦 component
│   📜 component.js
│
└───📂 commands
│   │   📜 index.js ( has all the commands exported )
│   │   📜 example-command.js
│   │   ...
```

`component/commands/index.js` file at line _5_:

```javascript
export { ExampleCommand } from './example-command';
```

Use `importCommands` example: `component/component.js` file at line _2_:

```javascript
import * as commands from './commands/';

export class Component extends $e.modules.ComponentBase {
    getNamespace() {
        return 'component-name';
    }

    defaultCommands() {
        return this.importCommands( commands );
    }
}
```

* All series of commands type should have unique folder and index file to hold them:
  * Commands:
    * As the example above.
  * Commands internal
    * Example:

```
📦 component
│   📜 component.js
│
└───📂 commands-internal
│   │   📜 index.js ( has all the commands exported )
│   │   📜 internal-command.js
│   │   ...
```

`component/commands-internal/index.js` file at line _5_:

```javascript
export { InternalCommand } from './internal-command';
```

Use `importCommands` example: `component/component.js` file at line _2_:

```javascript
import * as commandsInternal from './commands-internal/';

export class Component extends $e.modules.ComponentBase {
	getNamespace() {
		return 'component-name';
	}

	defaultCommandsInternal() {
		return this.importCommands( commandsInternal );
	}
}
```

* Commands data

```
📦 component
│   📜 component.js
│
└───📂 commands-data
│   │   📜 index.js ( has all the commands exported )
│   │   📜 data-command.js
│   │   ...
```

`component/commands-data/index.js` file at line _5_:

```javascript
export { DataCommand } from './data-command';
```

Use `importCommands` example: `component/component.js` file at line _2_:

```javascript
import * as commandsData from './commands-data/';

export class Component extends $e.modules.ComponentBase {
	getNamespace() {
		return 'component-name';
	}

	defaultData() {
		return this.importCommands( commandsData );
	}
}
```

::: warning Note
Further information about [`{$e.modules.CommandBase}`](../modules/command-base.full.md) class.
:::
