# Coding Standards

But before we start, let’s examine the proper way to write code for Elementor. In this page you can find the best practice for Elementor developers.

## Coding Standards

Websites use Elementor daily, any extension developed for Elementor should have an unified and pleasant experience while maintaining WordPress plugin guidelines, [coding standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/), [best practice](https://make.wordpress.org/core/handbook/best-practices/), and not do anything malicious.

Note that you can also [define a check for code standard in PHPStorm](https://kellenmace.com/set-up-php-codesniffer-in-phpstorm-with-wordpress-coding-standards/).

## Plugin File Name

The name of the file that runs the plugin should be in-tune with the plugin folder name. For example: `plugin-name/plugin-name.php`.

## Domain Names

We recommend using autoloader and namespace according to the [PSR-2](http://www.php-fig.org/psr/psr-2/) standard.

## Translation

The texts oriented for the user should be written in English, while using the WordPress translation function: `__()` / `_e()`. The translation text domain should be consistent with the plugin name. For example `plugin-name` and not initials like `pn`.

## Testing

The code should be tested with [WP_DEBUG](https://codex.wordpress.org/Debugging_in_WordPress) mode on, this way you can see the PHP notices and warnings. This will make sure you catch bugs before releasing your extension to the general public.

## Prevent Data Leaks

Elementor extensions should try to prevent direct access to PHP files. This can be done by adding the following code after the opening PHP tag in each PHP file:

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
```
