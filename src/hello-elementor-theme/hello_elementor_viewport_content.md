# Viewport Content

The theme has a [viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag), in the head, that controls the viewport's size and shape. Developers can modify the content attribute of the meta tag using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_viewport_content`
* **Default Value:** `width=device-width, initial-scale=1`

The hook controls the content of the viewport meta tag. By default the viewport width is set to the device-width and the initial scale is set to 1:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Usage

To modify the viewport content, use the following hook in a child-theme `functions.php` file:

```php
function custom_hello_elementor_viewport_content() {
	return 'width=100vw, height=100vh, user-scalable=no';
}
add_filter( 'hello_elementor_viewport_content', 'custom_hello_elementor_viewport_content' );
```

The result:

```html
<meta name="viewport" content="width=100vw, height=100vh, user-scalable=no">
```

