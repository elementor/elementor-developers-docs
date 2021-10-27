# Using Namespaces

PHP namespaces are a way of encapsulating you addon functionality. Just like the filesystem, the namespace system can make your code organized and easy to use.

Elementor core uses namespaces all over the code to group related classes, interfaces, functions and constants. We recommend for our developers use namespace when developing addons.

## Should you use Namespaces?

WordPress, for example, is not using namespaces. Elementor, on the other hand, is using namespaces all over the code.

Developers are not required to use namespaces in their addons. It's a personal choice. Elementor addons will work with and without them.

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

Due to limitation in WordPress athitecture, you can't add namespaces to the main file where the header comments are located. This is why both Elementor and Elementor Pro are loading the `plugin.php` file where all the functionality is located and where the main namespace is defined.

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

The main `elementor-test-addon.php` file will load the file with the functionality:

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

The  `/includes/plugin.php` file will defined the namespace and other functionality:

```php
<?php
namespace Elementor_Test_Addon;

final class Plugin {

}
```

### Notes

Please note that now we have three PHP classes named `Plugin`, one in the Elementor, another one in Elementor Pro and the last one is in out test addon. But as they all are using different namespaces there is no name collision as each has its own scope:

```
\Elementor\Plugin()
\ElementorPro\Plugin()
\Elementor_Test_Addon\Plugin()
```
