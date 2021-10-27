# Header Comments

Header comments are the standard way WordPress uses to provide information about plugins. The addon's main PHP file should include header comment with basic information. In addition, addons can add optional Elementor header comments.

## WordPress Header Comments

To get started, we are going to use some very basic fields at the top of the main file:

```php
<?php
/**
 * Plugin Name: Elementor Test Addon
 * Description: Custom Elementor addon.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-test-addon
 */
```

WordPress will display this information in "*WordPress Dashboard*" > "*Plugins*" screen:

![Plugins screen](/assets/img/elementor-test-addon-plugin-screen.png)

For the full list of available header fields checkout the [WordPress header requirements](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/).

## Elementor Header Comments

Elementor has it's own header comments where you can set the heights Elementor version that the addon was tested against. This is an optional header, but we recommend using it.

```php
/**
 * Elementor tested up to: x.x.x
 * Elementor Pro tested up to: x.x.x
 */
```

To prevent compatibility problems between different versions of Elementor and other addons, Elementor introduced the "Compatibility Tag" mechanism that notifies users about addons that are not compatible to their currently-installed version of Elementor. This will make the relationship between Elementor and other addons more transparent, and will make it easier to debug issues if any arise.
