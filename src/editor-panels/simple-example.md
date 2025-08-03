# Simple Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

[intro] (with webpack)

## Folder Structure

The addon will have the following folder structure:

```
elementor-editor-panels/
|
├─ assets/
|  └─ js/
|     ├─ components/
|     |  ├─ my-panel-1.jsx
|     |  └─ my-panel-2.jsx
|     |
|     ├─ index.js
|     ├─ init.js
|     └─ panels.js
|
├─ elementor-editor-panels.php
├─ package.json
└─ webpack.config.js
```

## Install Dependencies

Install the required dependencies using your package manager:

```bash
npm install @elementor/editor-panels
```

## Plugin Files

**elementor-editor-panels.php**

```php
<?php
/**
 * Plugin Name: Elementor Editor Panel
 * Description: An addon that adds a new Elementor editor panel.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-editor-panels
 *
 * Elementor tested up to: 3.15.0
 * Elementor Pro tested up to: 3.15.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register new editor panels.
 *
 * Enqueue the script that registers new editor panels.
 *
 * @since 1.0.0
 * @return void
 */
function enqueue_new_editor_panels() {
	wp_enqueue_script( 'elementor-editor-panels', plugins_url( 'assets/js/index.js', __FILE__ ), [ 'elementor-packages-editor-panels' ], null, true );
}
add_action( 'elementor/editor/v2/scripts/enqueue', 'enqueue_new_editor_panels' );
```

**package.json**

```json
{
	"name": "elementor-editor-panels",
	"dependencies": {
		// ...
		"@elementor/editor-panels": "latest"
	}
}
```

**webpack.config.js**

```js
module.exports = {
	// ...
	externals: {
		'@elementor/editor-panels': [ 'elementorPackages', 'editorPanels' ],
	},
};
```

**assets/js/index.js**

```js
import init from './init';

init();
```

**assets/js/init.js**

```js
import { registerPanel } from '@elementor/editor-panels';
import { panel1, panel2 } from './panels';

export default function init() {
	registerPanel( panel1.panel );
	registerPanel( panel2.panel );
}
```

**assets/js/panels.js**

```js
import { createPanel, registerPanel } from '@elementor/editor-panels';
import MyPanel1 from './components/my-panel-1';
import MyPanel2 from './components/my-panel-2';

export const panel1 = createPanel( {
	id: 'my-panel-1',
	component: MyPanel1,
} );

export const panel2 = createPanel( {
	id: 'my-panel-2',
	component: MyPanel2,
} );
```

**assets/js/components/my-panel-1.jsx**

```jsx
import { Panel, PanelHeader, PanelHeaderTitle, PanelBody } from '@elementor/editor-panels';

export default function MyPanel1() {
	return (
		<Panel>
			<PanelHeader>
				<PanelHeaderTitle>
					{/* Panel 1 title */}
				</PanelHeaderTitle>
			</PanelHeader>

			<PanelBody>
				{/* Panel 1 content */}
			</PanelBody>
		</Panel>
	);
}
```

**assets/js/components/my-panel-2.jsx**

```jsx
import { Panel, PanelHeader, PanelHeaderTitle, PanelBody } from '@elementor/editor-panels';

export default function MyPanel2() {
	return (
		<Panel>
			<PanelHeader>
				<PanelHeaderTitle>
					{/* Panel 2 title */}
				</PanelHeaderTitle>
			</PanelHeader>

			<PanelBody>
				{/* Panel 2 content */}
			</PanelBody>
		</Panel>
	);
}
```
