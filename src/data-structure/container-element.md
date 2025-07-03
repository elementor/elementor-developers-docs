# Container Element

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

The container is a layout element with nested capabilities, meaning that it can hold other elements. The container object contains information like the element id, element type, styling settings and all the element inside the container.

## JSON Structure

Container element structure:

```json
{
	"id": "12345678",
	"elType": "container",
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

## Nested Elements

By design, containers can hold nested elements. All the inner elements are stored in the `elements` value, and they can have their own nested elements.

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

### A Page with a Container and Custom Settings

An example of a page that has a container with some custom styling settings:

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
			"settings": {
				"height": "min-height",
				"custom_height": {
					"unit": "vh",
					"size": 70,
					"sizes": []
				},
				"content_position": "middle",
				"html_tag": "section"
			},
			"elements": []
		}
	]
}
```
