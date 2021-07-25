# Advanced Example

Let's build a full Elementor addon that sends a page to [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/) to test your page performance.

## Folder Structure

The addon will have three main files. One file to prevent direct access to the files, another file will register and enqueue JS file in the editor, and the last one will add the page-speed action to Elementor context menu.

```
elementor-page-speed-context-menu/
├─ index.php
├─ elementor-page-speed-context-menu.php
└─ elementor-page-speed-context-menu.js
```

## Plugin Files

**index.php**

```php
<?php
// Silence is golden.
```

**elementor-page-speed-context-menu.php**

```php
<?php
/**
 * Plugin Name: Elementor PageSpeed Context Menus
 * Description: Add PageSpeed to Elementor context menu.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-page-speed-context-menu
 *
 * Elementor tested up to: 3.3.0
 * Elementor Pro tested up to: 3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function elementor_context_menus_scripts() {

	wp_register_script(
		'elementor-page-speed-context-menu',
		plugins_url( 'elementor-page-speed-context-menu.js', __FILE__ ),
		[ 'elementor-editor' ]
	);

	wp_enqueue_script( 'elementor-page-speed-context-menu' );

}
add_action( 'elementor/editor/after_enqueue_scripts', 'elementor_context_menus_scripts' );
```

**elementor-page-speed-context-menu.js**

```js
window.addEventListener( 'elementor:init', () => {

	const currentPageURL = ''; // TODO: return page URL

	const pageSpeedURL = `https://developers.google.com/speed/pagespeed/insights/?url=${currentPageURL}&tab=desktop`;

	// Google PageSpeed action object
	const newAction = {
		name: 'alert',
		icon: 'eicon-wrench',
		title: __( 'Google PageSpeed', 'elementor-page-speed-context-menu' ),
		isEnabled: () => true,
		callback: () => window.open( pageSpeedURL, '_blank' ),
	};

	// Add "Google PageSpeed" action to Widget context menu.
	elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {

		groups.forEach( ( group ) => {
			if ( 'tools' === group.name ) {
				group.actions.push( newAction );
			}
		} );

		return groups;

	} );

	// Add "Google PageSpeed" action to Column context menu.
	elementor.hooks.addFilter( 'elements/column/contextMenuGroups', ( groups, view ) => {

		groups.forEach( ( group ) => {
			if ( 'tools' === group.name ) {
				group.actions.push( newAction );
			}
		} );

		return groups;

	} );

	// Add "Google PageSpeed" action to Section context menu.
	elementor.hooks.addFilter( 'elements/section/contextMenuGroups', ( groups, view ) => {

		groups.forEach( ( group ) => {
			if ( 'tools' === group.name ) {
				group.actions.push( newAction );
			}
		} );

		return groups;

	} );

} );
```
