# Plugin Header

The plugin's main PHP file `plugin-name.php` should include header comment with basic information about the plugin. For the full list available header fields see [WordPress Header Requirements](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/).

## Basic Plugin Header

To get started, we are going to use some very basic fields.

```php
<?php
/**
 * Plugin Name: Elementor Test Extension
 * Description: Custom Elementor extension.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-test-extension
 */
```

## Elementor Header

Elementor has it's own plugin header where you can set the heights Elementor version that the plugin was tested against. This is an optional header, but we recommend using it.

```php
/**
 * Elementor tested up to: x.x.x
 * Elementor Pro tested up to: x.x.x
 */
```

To prevent compatibility problems between different versions of Elementor and other addons, we introduced the Compatibility Tag mechanism that notifies users about plugins that are not compatible to their currently-installed version of Elementor. This will make the relationship between Elementor and other extensions more transparent, and will make it easier to debug issues if any arise.
