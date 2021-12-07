# Header Comments

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Header comments are the standard way WordPress uses to provide information about plugins. The addon's main PHP file should include a header comment with basic information. Addons can also add optional Elementor header comments.

## WordPress Header Comments

To get started, we will use some very basic fields at the top of the main file:

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

WordPress will display this information in the "*WordPress Dashboard*" > "*Plugins*" screen:

<img :src="$withBase('/assets/img/elementor-test-addon-plugin-screen.png')" alt="Plugins screen">

For the full list of available header fields checkout the [WordPress header requirements](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/).

## Elementor Header Comments

Elementor has its own header comments where you can note the Elementor version that the addon was tested against. This is an optional header, but we recommend using it.

```php
/**
 * Elementor tested up to: x.x.x
 * Elementor Pro tested up to: x.x.x
 */
```

Elementor has a compatibility tag to prevent compatibility problems between addons and different versions of Elementor. The compatibility tag  notifies users if addons are incompatible with the user's version of Elementor. This increases transparency between Elementor and its addons. It also makes debugging easier. 
