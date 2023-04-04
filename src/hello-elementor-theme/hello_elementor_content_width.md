# Content Width

<Badge type="tip" vertical="top" text="Hello Elementor Theme" /> <Badge type="warning" vertical="top" text="Basic" />

The theme sets content width of 800 pixels. Developers can override this using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_content_width`
* **Default Value:** `800`

The hook modifies the default content width set by the theme. By default it's set to 800 pixels, however developers can set different widths.

## Usage

To set custom content width, use the following hook in a child-theme `functions.php` file:

```php
function custom_hello_elementor_content_width() {
	return 1024;
}
add_filter( 'hello_elementor_content_width', 'custom_hello_elementor_content_width' );
```
