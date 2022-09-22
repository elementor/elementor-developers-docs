# Field Render

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

A field used in a form needs to have an output in the frontend. The render method sets the field's code when the field is displayed to the user on the site.

## Render Method

The method that actually generates the field output is called `render()`. In your field class, use the method as follows:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function render( $item, $item_index, $form ) {

		echo '<input type="text" class="elementor-test-field" title="Some text...">';

	}

}
```

* **Field Render** – The `render()` method renders the data and displays the field output.

## Render Attribute

To add attributes "the Elementor way", you should not hardcode the HTML elements with your attributes. You should use the `add_render_attribute()` method. This method is responsible for defining attributes and their values programmatically.

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function render( $item, $item_index, $form ) {
		$form->add_render_attribute(
			'input' . $item_index,
			[
				'type'        => 'text',
				'class'       => 'elementor-test-field',
				'placeholder' => esc_html__( 'Some placeholder', 'textdomain' ),
			]
		);

		echo '<input ' . $form->get_render_attribute_string( 'input' . $item_index ) . '>';
	}

}
```

## Retrieve Data From Field Controls

Some fields have [custom controls](./field-controls/) that allow the user to customize the field. Displaying user data in the form widget is done as follows:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function render( $item, $item_index, $form ) {
		$form->add_render_attribute(
			'textarea' . $item_index,
			[
				'class' => 'elementor-test-field',
				'rows'  => $item['textarea-rows'],
				'cols'  => $item['textarea-cols'],
			]
		);

		echo '<textarea ' . $form->get_render_attribute_string( 'textarea' . $item_index ) . '></textarea>';
	}

}
```
