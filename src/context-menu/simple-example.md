# Simple Example

Let's build a full Elementor addon that modifies the context menu.

## Folder Structure

The addon will have several main files. One file to prevent direct access to the files, another file will register and enqueue JS file in the editor, and the last one will actually modify the context menu.

```
elementor-context-menus/
├─ index.php
├─ elementor-context-menus.php
└─ elementor-context-menus.js
```

## Plugin Files

**index.php**

```php
<?php
// Silence is golden.
```

**elementor-context-menus.php**

```php
<?php
/**
 * Plugin Name: Elementor Context Menus
 * Description: Custom context menus for Elementor page builder.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-context-menus
 *
 * Elementor tested up to: 3.3.0
 * Elementor Pro tested up to: 3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function elementor_context_menus_scripts() {

	wp_register_script(
		'elementor-context-menus',
		plugins_url( 'elementor-context-menus.js', __FILE__ ),
		[ 'elementor-editor' ]
	);

	wp_enqueue_script( 'elementor-context-menus' );

}
add_action( 'elementor/editor/after_enqueue_scripts', 'elementor_context_menus_scripts' );
```

**elementor-context-menus.js**

```js
window.addEventListener( 'elementor:init', () => {

	elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {

		const newAction = {
			name: 'alert',
			icon: 'eicon-alert',
			title: __( 'Widgets Type', 'elementor-context-menus' ),
			isEnabled: () => true,
			callback: () => {
				alert( view.model.get( 'widgetType' ) );
			},
		};

		groups.forEach( ( group ) => {
			if ( 'general' === group.name ) {
				group.actions.push( newAction );
			}
		} );

		return groups;

	} );

} );
```
