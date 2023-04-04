# Register Elementor Theme Locations

<Badge type="tip" vertical="top" text="Hello Elementor Theme" /> <Badge type="warning" vertical="top" text="Basic" />

The theme registers [Elementor theme locations](./../themes/). Developers can override this using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_register_elementor_locations`
* **Default Value:** `true`

The hook controls whether the theme should register Elementor theme locations. By default it's set to `true`, however developers can prevent the theme from registering Elementor theme locations.

## Usage

To prevent the theme from registering Elementor theme locations, use the following hook in a child-theme `functions.php` file:

```php
add_filter( 'hello_elementor_register_elementor_locations', '__return_false' );
```
