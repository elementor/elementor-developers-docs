# Widget Element

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

An Elementor widget is an element with its own custom properties. The widget object contains information like the element id, element type, widget type and all the element settings based on the widget controls.

## JSON Structure

Widget element structure:

```json
{
	"id": "12345678",
	"elType": "widget",
	"widgetType": "heading",
	"isInner": false,
	"settings": [],
	"elements": []
}
```

## JSON Values

| Argument     | Type                 | Description |
|--------------|----------------------|-------------|
| `id`         | _`string`_           | The unique identification key representing the element. |
| `elType`     | _`string`_           | The element type. |
| `widgetType` | _`string`_           | The widget type. |
| `isInner`    | _`boolean`_          | Whether the element is an inner element. |
| `settings`   | _`array`_/_`object`_ | The element data from the panel, holding the values from the editor controls. It's an empty `array` if settings are not defined, or an `object` if the element has settings. |
| `elements`   | _`array`_            | An array of objects that holds all the nested elements. |

## Nested Elements

Originally, Elementor widgets didn't support nested capabilities. More recently Elementor has started exploring new ways to allow nesting capabilities. The new "Menu" widget already supports nested capabilities and we plan to release nested "Accordion", "Tabs", "Carousels" and other widgets with nested capabilities.

## Data from Widget Controls

Each widget has a set of custom controls. When the user drags the widget to the page and sets custom control values, this information is saved in the `settings` object as key-value pairs. The control id is used as the key value and the data is the value.

## Examples

### A Page with Widgets

An example of a page that has a container element with three nested containers:

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
