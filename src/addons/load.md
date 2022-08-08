# Loading Process

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Now that we have a WordPress plugin with all the header comments containing the basic information, we need to load the actual functionality. We should tell WordPress to load our functionality once activated plugins have been loaded. This is important as we need to make sure Elementor is loaded.

## WordPress Lifecycle Hooks

To load our functionality we will wrap our code into a separate function. This code will be loaded when the WordPress `plugins_loaded` action hook is fired.

The following code can be used to run our functionality:

```php
function elementor_test_addon() {

	// your code here

}
add_action( 'plugins_loaded', 'elementor_test_addon' );
```

Please note that this hook fires before WordPress themes are setup, before the `init` and `wp_loaded` action hooks.

## Example

Let's say our addon has the following folder structure:

```
elementor-test-addon/
|
├─ includes/
|  |
|  ├─ controls/
|  ├─ widgets/
|  |
|  ├─ controls-manager.php
|  └─ widgets-manager.php
|
└─ elementor-test-addon.php
```

Our `/includes/` folder contains the different components, and each component has a [manager](./../managers/) that registers the different items.

The main `elementor-test-addon.php` file loads the functionality:

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
 * 
 * Elementor tested up to: 3.7.0
 * Elementor Pro tested up to: 3.7.0
 */

function elementor_test_addon() {

	// Load plugin file
	require_once( __DIR__ . '/includes/widgets-manager.php' );
	require_once( __DIR__ . '/includes/controls-manager.php' );

}
add_action( 'plugins_loaded', 'elementor_test_addon' );
```

Until now, we didn't even started Elementor functionality, it was all WordPress related setup.
