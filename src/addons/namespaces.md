# Using Namespaces

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

PHP namespaces are a way of encapsulating your addon's functionality. Just like the filesystem, the namespace system can make your code organized and easy to use.

Elementor uses namespaces in its code to group related classes, interfaces, functions, and constants. We recommend that developers use namespaces when developing addons.

## Should you use Namespaces?

Use of namespaces is a personal choice. WordPress, for example, does not use namespaces, while Elementor's code contains many namespaces.

For Elementor addons, developers are not required to use namespaces. Addons will work with or without them.

## Example Namespace Structure

Elementor's namespaces are organize in sun-namespaces to organize similar functionality:

```
\Elementor\
\Elementor\Core
\Elementor\Core\Editor
\Elementor\Core\Breakpoints
\Elementor\Core\Files
```

## Defining Main Namespaces

Due to limitations in the WordPress athitecture, you can't add namespaces to the main file where the header comments are located. This is why both Elementor and Elementor Pro load the `plugin.php` file where the functionality is located and where the main namespace is defined.

Addon developers can use the same structure:

``` {7}
elementor-test-addon/
|
├─ includes/
|  ├─ controls/
|  ├─ widgets/
|  |
|  └─ plugin.php
|
└─ elementor-test-addon.php
```

### Example

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
 * Elementor tested up to:     3.5.0
 * Elementor Pro tested up to: 3.5.0
 */

function elementor_test_addon() {

	// Load plugin file
	require_once( __DIR__ . '/includes/plugin.php' );

	// Run the plugin
	\Elementor_Test_Addon\Plugin();

}
add_action( 'plugins_loaded', 'elementor_test_addon' );

```

The  `/includes/plugin.php` file defines the namespace and more functionality:

```php
<?php
namespace Elementor_Test_Addon;

final class Plugin {

}
```

### Notes

Please note that the above example incorporates three PHP classes named `Plugin`, one in Elementor, another one in Elementor Pro and the last one in our test addon. However since they all are using different namespaces, each has its own scope so there is no name collision:

```
\Elementor\Plugin()
\ElementorPro\Plugin()
\Elementor_Test_Addon\Plugin()
```
