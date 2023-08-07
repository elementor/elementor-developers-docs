# Page Content

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

The page content is an `array` of objects which holds all the elements on the page. This field is recursive, meaning that it can hold nested elements, one inside the other. A container element can contain other containers and widgets, and nested widgets can contain other widgets.

## JSON Structure

If the page has no content, the `content` is an empty `array`:

```json
{
	"title": "Template Title",
	"type": "page",
	"version": "0.4",
	"page_settings": [],
	"content": []
}
```

If the page has content, the `content` contains a list of objects:

```json
{
	"title": "Template Title",
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
		}
	]
}
```

## Page Elements

Elements are simple objects contaning element data. Some elements can have nested elements inside of them, others don't.

This is important as in the past, Elementor had a strict data structure. The page had "section" elements, sections had nested "column" elements, and the columns had "widget" elements.

With the introduction of containers, Elementor replaced the traditional data structure, allowing the user to nest multiple elements one inside the other.

Originally, Elementor widgets didn't support nested capabilities. More recently Elementor has started exploring new ways to allow nesting capabilities. The new "Menu" widget already supports nested capabilities and we plan to release nested "Accordion", "Tabs", "Carousels" and other widgets with nested capabilities.

## Examples

### A Page with a Section and a Column

An example of a page that uses the old section-column-widget structure:

```json
{
	"title": "Sample Page",
	"type": "page",
	"version": "0.4",
	"page_settings": [],
	"content": [
		{
			"id": "123ab956",
			"elType": "section",
			"isInner": false,
			"settings": [],
			"elements": [
				{
					"id": "1d4a679a",
					"elType": "column",
					"isInner": false,
					"settings": [],
					"elements": [
						{
							"id": "1d4a679a",
							"elType": "widget",
							"widgetType": "image",
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

### A Page with a Container

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

### A Page with Nested Containers

An example of a page that has a container element with several nested containers:

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

### A Page with a few Widgets

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
