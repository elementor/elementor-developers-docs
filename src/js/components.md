# API - `$e.components`

The new Components API (since 2.7.0), provides a simple and convenient way to bind all route and commands, and keyboard shortcuts that belong to a UI component – into one controller.

The full list of components, including custom & 3rd routes, is available via `$e.components.getAll();`. Each component has it’s unique namespace, that all it’s command and routes are nested under it.

On route, to a component route, when the component becomes "active", it allows binding of keyboard shortcuts for each component.
The components are extensible so a 3rd party plugin can add some routes, command and shortcuts to an existing component.

* **Description**: `$e.components` API is a manager for whole **api** components.

* **Location**: `core/common/assets/js/api/core/components.js`

* **Parent**: `elementorModules.Module`

## Methods

| Method                       | Parameters                     | Returns                                       | Description                   |
|------------------------------|--------------------------------|-----------------------------------------------|-------------------------------|
| `$e.components.getAll()`     |                                | `{array.<string>}`                            | Receive all components.       |
| `$e.components.register()`   | `{ComponentBase}` *component*  | `{ComponentBase}` *component*                 | Register a component.         |
| `$e.components.get()`        | `{String}` *id*                | `{ComponentBase}` *component*                 | Get component instance by id. |
| `$e.components.getActive()`  |                                | `{Object.<ComponentBase>}` *activeComponents* | Get active components.        |
| `$e.components.activate()`   | `{String}` *namespace*         |                                               | Activate component.           |
| `$e.components.inactivate()` | `{String}` *namespace*         |                                               | Deactivate component.         |
| `$e.components.isActive()`   | `{String}` *namespace*         | `{Boolean}` *isActive*                        | Is component active.          |

::: warning Note
To see all the components please. please visit [`{$e.commands.getAll()}`](./commands-methods/getall.md)
:::

## Examples

```javascript
// Example of creating and registering a new component, available to run in the console and does not depend on anything else.
class CustomComponent extends $e.modules.ComponentBase {
	getNamespace() {
		return 'custom-component';
	}
	
	defaultCommands() {
		// Object of all the component commands.
		return {
			// 'example' command.   
			example: ( args ) => {
				// Output command args to console.
				console.log( 'ExampleCommand: ', args );
		
				// Return object as example.
				return {
					example: 'result from ExampleCommand',
				};
			},
		};
	}
	}
	
	// Register the new component.
	$e.components.register( new CustomComponent() );
	
	// Runs 'example' command from 'custom-component'.
	result = $e.run( 'custom-component/example', {
	property: 'value',
	} );
	
	// Output command run result.
	console.log( 'e-components-eg-1-result: ', result );

```

## Guidelines

* You can view your component as a namespace that holds your [commands](./commands/), [hooks](./hooks/), routes, tabs, shortcuts & utils.
* Component class file should be named `component.js`
* Component folder name should be named as a component namespace or a sub-component namespace.
* Components and sub-components convention example, described in next scenario:
Assuming you create a `Document` component which creates a sub-component `Elements`

```
📦 document
│   📜 component.js
│   📜 index.js           ( has all sub-components exported )
│
└───📂 elements
│   │   📜 component.js
│   │   |   ...
```

`document/index.js` file at line _3_:

```javascript
export { default as ElementsComponent } from './elements/component.js';
```

`document/component.js` file at line _2_:

```javascript
import * as components from './';

export default class Component extends $e.modules.ComponentBase {
    getNamespace() {
        return 'document';
    }
    
    registerAPI() {
        // Register sub components.
        Object.values( components ).forEach( ( ComponentClass ) =>
            $e.components.register( new ComponentClass )
        );
    
        super.registerAPI();
    }
}

export default class Component;
```

`document/elements/component.js` file at line _6_:

```javascript
export default class Component extends $e.modules.ComponentBase {
    getNamespace() {
        return 'elements';
    }
}

export default class Component;
```
