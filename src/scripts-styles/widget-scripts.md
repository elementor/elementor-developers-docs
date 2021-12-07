# Widget Scripts

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you develop new [Elementor widgets](./widgets/) and need to register custom scripts, they must be registered using the [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) function and enqueued using the widget `get_script_depends()` method. This way, Elementor will dynamically  load these scripts only on pages using these widgets.

## Registering Widget Scripts

In the example below, we'll register widget scripts and set them as widget dependencies:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_script_depends() {

		wp_register_script( 'widget-script-1', plugins_url( 'assets/js/widget-script-1.js', __FILE__ ) );
		wp_register_script( 'widget-script-2', plugins_url( 'assets/js/widget-script-2.js', __FILE__ ), [ 'external-library' ] );
		wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

		return [
			'widget-script-1',
			'widget-script-2',
		];

	}

}
```

::: tip Best Practice
Best practice is to register scripts inside the widget PHP class. This ensures that the script is loaded only if the widget is used.
:::
