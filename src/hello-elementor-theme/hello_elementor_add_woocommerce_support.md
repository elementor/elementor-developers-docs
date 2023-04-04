# Register WooCommerce Features

The theme registers various [WooCommerce theme features](https://woocommerce.com/document/woocommerce-theme-developer-handbook/). Developers can override this using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_add_woocommerce_support`
* **Default Value:** `true`

The hook controls whether the theme should register various WooCommerce features. By default it's set to `true`,  however developers can prevent the theme from registering various WooCommerce features.

## Usage

To prevent the theme from registering WooCommerce features, use the following hook in a child-theme `functions.php` file:

```php
add_filter( 'hello_elementor_add_woocommerce_support', '__return_false' );
```

To register various WooCommerce theme features, use the WordPress native [add_theme_support()](https://developer.wordpress.org/reference/functions/add_theme_support/) function as follows:

```php
add_theme_support( 'woocommerce' );
add_theme_support( 'wc-product-gallery-zoom' );
add_theme_support( 'wc-product-gallery-lightbox' );
add_theme_support( 'wc-product-gallery-slider' );
```
