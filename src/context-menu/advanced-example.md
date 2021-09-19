# Advanced Example

In this example, we'll build a full Elementor addon that sends and opens [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/) in a new tab to test page performance.

## Folder Structure

The addon will have two files. The main file will register and enqueue a JS file in the editor, and the JS will add the page-speed action to the Elementor context menu.

```
elementor-page-speed-context-menu/
|
├─ assets/js/
|  └─ page-speed-context-menu.js
|
└─ elementor-page-speed-context-menu.php
```

## Plugin Files

**elementor-page-speed-context-menu.php**

```php
<?php
/**
 * Plugin Name: Elementor PageSpeed Context Menu
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

function elementor_page_speed_context_menu_scripts() {

	wp_enqueue_script(
		'elementor-page-speed-context-menu',
		plugins_url( 'assets/js/page-speed-context-menu.js', __FILE__ ),
		[ 'jquery' ],
		'1.0.0',
		false
	);

}
add_action( 'elementor/editor/after_enqueue_scripts', 'elementor_page_speed_context_menu_scripts' );
```

**assets/js/page-speed-context-menu.js**

```js
jQuery( window ).on( 'elementor:init', () => {

	const currentPageURL = elementor.documents.currentDocument.config.urls.permalink;

	const pageSpeedURL = `https://developers.google.com/speed/pagespeed/insights/?url=${currentPageURL}&tab=desktop`;

	const elTypes = [ 'widget', 'column', 'section' ];

	// Google PageSpeed action object
	const newAction = {
		name: 'google-page-speed',
		icon: 'eicon-wrench',
		title: 'Google PageSpeed',
		isEnabled: () => true,
		callback: () => window.open( pageSpeedURL, '_blank' ).focus(),
	};

	// Add "Google PageSpeed" action to widget/column/section context menus.
	elTypes.forEach( ( elType ) => {

		elementor.hooks.addFilter( `elements/${elType}/contextMenuGroups`, ( groups, view ) => {

			groups.forEach( ( group ) => {
				if ( 'general' === group.name ) {
					group.actions.push( newAction );
				}
			} );
	
			return groups;
	
		} );

	} );

} );
```

## The Result

![Elementor PageSpeed Context Menu](/assets/img/elementor-context-menu-page-speed.png)
