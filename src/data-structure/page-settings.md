# Page Settings

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Data from the [Page Settings](./../editor/page-settings-panel/) panel is saved as a separate `page_settings` value. When the page has no settings, the value is an empty `array`, when the page has settings it's an `object` of key-value pairs containing the settings.

## JSON Structure

If the page has no settings, `page_settings` is an empty `array`:

```json
{
	"title": "Template Title",
	"type": "page",
	"version": "0.4",
	"page_settings": [],
	"content": []
}
```

If the page has settings, `page_settings` is an `object` of key-value pairs:

```json
{
	"title": "Template Title",
	"type": "page",
	"version": "0.4",
	"page_settings": {
		"key": "value",
		"key": "value"
	},
	"content": []
}
```

## Saved Data

<img :src="$withBase('/assets/img/page-settings-panel.png')" alt="Elementor Page Settings Panel" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

The [Page Settings](./../editor/page-settings-panel/) panel displays several editor controls that allow the user to change WordPress-related data and Elementor-related data.

The WordPress-related data includes the page title, excerpt, feature image, post status, etc. This data is saved in the "[wp_posts](https://codex.wordpress.org/Database_Description#Table:_wp_posts)" table in the database.

Elementor-related data includes all the elements/widget in the page and how they are styled. This data is saved in the "[wp_postmeta](https://codex.wordpress.org/Database_Description#Table:_wp_postmeta)" table, part of the Elementor custom field.

Furthermore, different Elementor documents may have different page settings. A good example is popups, which add additional controls to the page settings screen. Addon developers may also add additional controls to the page settings panel, controls that may apply page-wide styles. The data from all those controls is stored in `page_settings`.

## Examples

### Empty Page Example

An empty page that has no settings:

```json
{
	"title": "About Page",
	"type": "page",
	"version": "0.4",
	"page_settings": [],
	"content": []
}
```

### Styled Page Example

A page that has some basic styling settings:

```json
{
	"title": "Template Title",
	"type": "page",
	"version": "0.4",
	"page_settings": {
		"background_background": "classic",
		"background_color": "#FFFFFF",
		"margin": {
			"unit": "px",
			"top": "0",
			"right": "0",
			"bottom": "0",
			"left": "0",
			"isLinked": true
		},
		"padding": {
			"unit": "px",
			"top": "0",
			"right": "10",
			"bottom": "0",
			"left": "10",
			"isLinked": false
		},
		"scroll_snap": "yes"
	},
	"content": []
}
```
