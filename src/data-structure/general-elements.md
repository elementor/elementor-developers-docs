# General Elements

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Each Elementor element, whether it's a layout element (section, column, container) or a widget element, has a set of basic information. This data is used to parse the element when creating the page.

## JSON Structure

Basic element structure:

```json
{
	"id": "12345678",
	"elType": "element",
	"isInner": false,
	"settings": [],
	"elements": []
}
```

## JSON Values

| Argument   | Type                 | Description |
|------------|----------------------|-------------|
| `id`       | _`string`_           | The unique identification key representing the element. |
| `elType`   | _`string`_           | The element type. |
| `isInner`  | _`boolean`_          | Whether the element is an inner element. |
| `settings` | _`array`_/_`object`_ | The element data from the panel, holding the values from the editor controls. It's an empty `array` if settings are not defined, or an `object` if the element has settings. |
| `elements` | _`array`_            | An array of objects that holds all the nested elements. |

Additional values can be introduced, based on the element type. For example, when `elType` is `widget`, an additional `widgetType` value is added to indicate the [widget name](./../widgets/widget-data/) (i.e. `heading`, `image`, `button`, `social-icons` etc.).

## Layout Elements vs. Widget Elements

The two main element types Elementor supports are - layout elements and widget elements. While layout elements (sections, columns, containers) may store data about nested `elements`, widget elements mainly store data about the widget `settings`.

## Examples

### A Page with Containers

An example of a page that has two empty containers:

```json
{
	"title": "Sample Page",
	"type": "page",
	"version": "0.4",
	"page_settings": [],
	"content": [
		{
			"id": "6af611eb",
			"elType": "container",
			"isInner": false,
			"settings": [],
			"elements": []
		},
		{
			"id": "7fb170b9",
			"elType": "container",
			"isInner": false,
			"settings": [],
			"elements": []
		}
	]
}
```

### A Page with Nested Container

An example of a page that has a container element with nested containers:

```json
{
	"title": "Test Page",
	"type": "page",
	"version": "0.4",
	"page_settings": [],
	"content": [
		{
			"id": "458aabdc",
			"elType": "container",
			"isInner": false,
			"settings": [],
			"elements": [
				{
					"id": "46ef0576",
					"elType": "container",
					"isInner": false,
					"settings": [],
					"elements": [
						{
							"id": "4a59f2e3",
							"elType": "container",
							"isInner": false,
							"settings": [],
							"elements": []
						}
					]
				}
			]
		}
	]
}
```

### A Page with Widgets

An example of a page that has a container element with three nested widgets:

```json
{
	"title": "About Page",
	"type": "page",
	"version": "0.4",
	"page_settings": [],
	"content": [
		{
			"id": "6af611eb",
			"elType": "container",
			"isInner": false,
			"settings": [],
			"elements": [
				{
					"id": "6a637978",
					"elType": "widget",
					"widgetType": "heading",
					"isInner": false,
					"settings": {
						"title": "Add Your Heading Text Here",
						"align": "center"
					},
					"elements": []
				},
				{
					"id": "687dba89",
					"elType": "widget",
					"widgetType": "image",
					"isInner": false,
					"settings": {
						"_padding": {
							"unit": "px",
							"top": "100",
							"right": "0",
							"bottom": "100",
							"left": "0",
							"isLinked": false
						}
					},
					"elements": []
				},
				{
					"id": "6f58bb5",
					"elType": "widget",
					"widgetType": "button",
					"isInner": false,
					"settings": {
						"text": "Click Me",
						"button_text_color": "#000000",
						"background_color": "#E7DFF5"
					},
					"elements": []
				}
			]
		}
	]
}
```
