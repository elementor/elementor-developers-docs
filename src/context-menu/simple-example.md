# Simple Example

Let's build a full Elementor addon that modifies the context menu.

## Folder Structure

The addon will have several index files to prevent direct access to folders, the main file will register and enqueue JS file in the editor, and the JS that actually modify the context menu.

```
elementor-context-menus/
|
├─ assets/js/
|  ├─ index.php
|  └─ context-menus.js
|
├─ index.php
└─ elementor-context-menus.php
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

**assets/js/index.php**

```php
<?php
// Silence is golden.
```

**assets/js/context-menus.js**

```js
jQuery( window ).on( 'elementor:init', () => {

	elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {

		const newAction = {
			name: 'alert',
			icon: 'eicon-alert',
			title: 'Widget Type',
			isEnabled: () => true,
			callback: () => alert( view.model.get( 'widgetType' ) ),
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

## The Result

![Elementor Context Menu Example](/assets/img/elementor-context-menu-example.png)
