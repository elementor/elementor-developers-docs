# Simple Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

In this example, we'll build a full Elementor addon to modify a context menu.

## Folder Structure

The addon will have two files. The main file will register and enqueue a JS file in the editor, and the JS will modify the context menu.

```
elementor-context-menus/
|
├─ assets/js/
|  └─ context-menus.js
|
└─ elementor-context-menus.php
```

## Plugin Files

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
 * Elementor tested up to: 3.5.0
 * Elementor Pro tested up to: 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function elementor_context_menus_scripts() {

	wp_enqueue_script(
		'elementor-context-menus',
		plugins_url( 'assets/js/context-menus.js', __FILE__ ),
		[ 'jquery' ],
		'1.0.0',
		false
	);

}
add_action( 'elementor/editor/after_enqueue_scripts', 'elementor_context_menus_scripts' );
```

**assets/js/context-menus.js**

```js
window.addEventListener( 'elementor/init', () => {

	elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

		const newGroup = {
			name: 'elementor-links-group',
			actions: [
				{
					name: 'elementor-link',
					icon: 'eicon-link',
					title: 'Elementor.com',
					isEnabled: () => true,
					callback: () => window.open( 'https://elementor.com/', '_blank' ).focus(),
				},
				{
					name: 'elementor-developers-link',
					icon: 'eicon-link',
					title: 'Developers Docs',
					isEnabled: () => true,
					callback: () => window.open( 'https://developers.elementor.com/', '_blank' ).focus(),
				}
			],
		}

		if ( 'widget' === elementType ) {
			customGroups.push( newGroup );
		}

		return customGroups;

	} );

} );
```

## The Result

<img :src="$withBase('/assets/img/elementor-context-menu-example.png')" alt="Elementor Context Menu Example">
