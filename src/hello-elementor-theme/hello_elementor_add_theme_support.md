# Register Theme Features

The theme registers various WordPress theme features. Developers can override this using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_add_theme_support`
* **Default Value:** `true`

The hook controls whether the theme should register various theme features. By default it's set to `true`, however developers can prevent the theme from registering various theme features.

## Usage

To prevent the theme from registering various theme features, use the following hook in a child-theme `functions.php` file:

```php
add_filter( 'hello_elementor_add_theme_support', '__return_false' );
```

To register custom theme features, use the WordPress native [add_theme_support()](https://developer.wordpress.org/reference/functions/add_theme_support/) function as follows:

```php
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
```
