# Enqueue Styles

The theme loads the `style.min.css` file by default. Developers can override this using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_enqueue_style`
* **Default Value:** `true`

The hook controls whether the theme should enqueue the `style.min.css` stylesheet. By default it's set to `true`, however developers can prevent the theme from enqueuing the file.

## Usage

To prevent the theme from loading the `style.min.css` stylesheet, use the following hook in a child-theme `functions.php` file:

```php
add_filter( 'hello_elementor_enqueue_style', '__return_false' );
```
