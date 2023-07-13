# Simple Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

[intro] (with webpack)

## Folder Structure

The addon will have the following folder structure:

```
elementor-editor-panel/
|
├─ assets/
|  └─ js/
|     ├─ components/
|     |  ├─ my-panel-1.jsx
|     |  └─ my-panel-2.jsx
|     |
|     ├─ init.js
|     └─ panels.js
|
├─ elementor-editor-panel.php
├─ package.json
└─ webpack.config.js
```

## Plugin Files
​
Install the required packages using your package manager:
​
```bash
npm install @elementor/editor-panels
```

## Plugin Files

**elementor-editor-panel.php**

```php
<?php
/**
 * Plugin Name: Elementor Editor Panel
 * Description: An addon that adds a new Elementor editor panel.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-editor-panel
 *
 * Elementor tested up to: 3.15.0
 * Elementor Pro tested up to: 3.15.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register oEmbed Widget.
 *
 * Include widget file and register widget class.
 *
 * @since 1.0.0
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 * @return void
 */
function enqueue_new_editor_panels() {
	wp_enqueue_script( 'elementor-editor-panel', plugins_url( 'assets/js/init.js', __FILE__ ), [ 'elementor-packages-editor-panels' ], null, true );
}
add_action( 'elementor/editor/v2/scripts/enqueue', 'enqueue_new_editor_panels' );
```

**package.json**

```js
{
	"name": "elementor-editor-panel",
	"dependencies": {
		// ...
		"@elementor/editor-panels": "latest",
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

**init.js**
​
```js
import { registerPanel } from '@elementor/editor-panels';
import { panel1, panel2 } from './panel';
​
function init() {
	registerPanel( panel1.panel );
	registerPanel( panel2.panel );
}
```
​
**panels.js**
​
```js
import { createPanel, registerPanel } from '@elementor/editor-panels';
import MyPanel1 from './components/my-panel-1';
import MyPanel2 from './components/my-panel-2';
​
export const panel1 = createPanel( {
	id: 'my-panel-1',
	component: MyPanel1
} );

export const panel2 = createPanel( {
	id: 'my-panel-2',
	component: MyPanel2
} );
```
​
**components/my-panel-1.jsx**

```jsx
import { Panel, PanelHeader, PanelHeaderTitle, PanelBody } from '@elementor/editor-panels';
​
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

**components/my-panel-2.jsx**

```jsx
import { Panel, PanelHeader, PanelHeaderTitle, PanelBody } from '@elementor/editor-panels';
​
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
