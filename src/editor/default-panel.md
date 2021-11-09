# Default Panel

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

By default, Elementor displays the [widgets panel]() when the editor is loaded for the first time. You can change this.

## Changing the Default Panel

Use the code below to make the [page settings panel](/editor/page-settings-panel) the default panel:

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

Here is a partial list of the built-in panels you can use as the default panel:

* [Menu Panel](/editor/menu-panel)
  * `panel/menu`
* [User Preferences](/editor/user-preferences-panel)
  * `panel/editor-preferences`
* [Page Settings](/editor/page-settings-panel)
  * `panel/page-settings/settings`
  * `panel/page-settings/style`
  * `panel/page-settings/advanced`
* [History Panel](/editor/history-panel)
  * `panel/history/actions`
  * `panel/history/revisions`
* [Widgets Panel](/editor/widgets-panel)
  * `panel/elements/categories`
  * `panel/elements/global`
