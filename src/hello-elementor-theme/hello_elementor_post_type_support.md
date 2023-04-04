# Register Post Type Features

<Badge type="tip" vertical="top" text="Hello Elementor Theme" /> <Badge type="warning" vertical="top" text="Basic" />

The theme registers a single post-type feature that adds excerpts to page. Developers can override this using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_post_type_support`
* **Default Value:** `true`

The hook controls whether the theme should register various post-type supported features. By default it's set to `true`, however developers can prevent the theme from registering post-type features.

## Usage

To prevent the theme from registering post-type features, use the following hook in a child-theme `functions.php` file:

```php
add_filter( 'hello_elementor_post_type_support', '__return_false' );
```

To register custom post-type supported features, use the WordPress native [add_post_type_support()](https://developer.wordpress.org/reference/functions/add_post_type_support/) function as follows:

```php
add_post_type_support( 'my_post_type', 'comments' );
add_post_type_support( 'my_post_type', 'excerpt' );
```
