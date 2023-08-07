# Enqueue Theme Styles

<Badge type="tip" vertical="top" text="Hello Elementor Theme" /> <Badge type="warning" vertical="top" text="Basic" />

The theme loads the `theme.min.css` file by default. Developers can override this using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_enqueue_theme_style`
* **Default Value:** `true`

The hook controls whether the theme should enqueue the `theme.min.css` stylesheet. By default it's set to `true`, however developers can prevent the theme from enqueuing the file.

## Usage

To prevent the theme from loading the `theme.min.css` stylesheet, use the following hook in a child-theme `functions.php` file:

```php
add_filter( 'hello_elementor_enqueue_theme_style', '__return_false' );
```
