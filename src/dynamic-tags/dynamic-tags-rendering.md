# Dynamic Tags Rendering

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

The render method generates the final output and echoes the data to the control. If the dynamic tag has controls, the render function should use the data while generating the output.

## Rendering Methods

To render the dynamic tag output and data echoes, we use the `render()` method as follows:

```php
class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function render(): void {

		echo rand();

	}

}
```

To extract data from the [dynamic tag controls](./dynamic-tags-controls/), we can use the `get_settings()` method:

```php
class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function render(): void {
		$param1 = $this->get_settings( 'text_param' );
		$param2 = $this->get_settings( 'number_param' );
		$param3 = $this->get_settings( 'select_param' );

		echo "{$param1} {$param2} {$param3}";
	}

}
```
