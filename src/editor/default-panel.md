# Default Panel

By default Elementor displays the [Widgets Panel]() when the Editor is loaded for the first time. You can change this.

## Changing the Default Panel

To change the default panel to [Page Settings Panel](./page-settings-panel), use the following code:

```php
function change_default_elementor_panel( $config ) {

	$config = array_replace_recursive(
		$config,
		[
			'panel' => [
				'default_route' => 'panel/page-settings/settings'
			]
		]
	);

	return $config;

}
add_filter( 'elementor/document/config', 'change_default_elementor_panel' );
```

## Available Panels

Here is a partial list of the built-in panels you can use:

* [Menu Panel](./menu-panel)
  * `panel/menu`
* [User Preferences](./user-preferences-panel)
  * `panel/editor-preferences`
* [Page Settings](./page-settings-panel)
  * `panel/page-settings/settings`
  * `panel/page-settings/style`
  * `panel/page-settings/advanced`
* [History Panel](./history-panel)
  * `panel/history/actions`
  * `panel/history/revisions`
* [Widgets Panel](./widgets-panel)
  * `panel/elements/categories`
  * `panel/elements/global`
