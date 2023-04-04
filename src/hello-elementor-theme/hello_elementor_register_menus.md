# Register Navigation Menus

<Badge type="tip" vertical="top" text="Hello Elementor Theme" /> <Badge type="warning" vertical="top" text="Basic" />

The theme registers two WordPress navigation menus, one for the header and the other footer. Developers can override this using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_register_menus`
* **Default Value:** `true`

The hook controls whether the theme's navigation menus should be registered or not. By default it's set to `true`, however developers can prevent the theme from registering navigation menus.

## Usage

To prevent the theme from registering the default navigation menus, use the following hook in a child-theme `functions.php` file:

```php
add_filter( 'hello_elementor_register_menus', '__return_false' );
```

To register custom navigation menus, use the WordPress native [register_nav_menus()](https://developer.wordpress.org/reference/functions/register_nav_menus/) function as follows:

```php
register_nav_menus( [ 'my-header-menu' => esc_html__( 'Header Menu', 'textdomain' ) ] );
register_nav_menus( [ 'my-footer-menu' => esc_html__( 'Footer Menu', 'textdomain' ) ] );
register_nav_menus( [ 'my-mobile-menu' => esc_html__( 'Mobile Menu', 'textdomain' ) ] );
```
