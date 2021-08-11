# Regular Control

Regular [widget controls](./widget-controls) are added to Elementor widgets using the `add_control()` method. 

## Regular Control Structure

Adding a new controls is done as follows:

```php
$this->add_control(
	'control-name',
	[
		'type' => \Elementor\Controls_Manager::TEXT,
		'label' => __( 'Control Name', 'plugin-name' ),
	]
);
```

## Control Parameters

Each control has the following key parameters:

* **Control Name** `(string)` – Unique id used in the code.
* **Control Setting** `(array)` – Extra control parameters.
  * **Type** `(string)` – The control type.
  * **Label** `(string)` – The label displayed to the user in the panel.
  * **Show Label** `(bool)` – Whether to show the label.
  * **Label Block** `(bool)` – Whether to display the label in a separate line.
  * **Separator** `(string)` – The position of the separator.
  * **Frontend Available** `(bool)` – Whether the data is available in the Frontend using `getSettings()`.

**Note**: Each control has its own set of *Custom Settings* in addition to the default settings mentioned above. For Example, text control has a *placeholder* settings, slider has a *range* settings, color controls has a *default* settings etc.

## Examples

### Text Control

In this example we are going to add a simple text control defined at the `Control_Text` class which to allow the user to save a simple string, the control will have a placeholder set:

```php {12-19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
			]
		);

		$this->add_control(
			'title',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => __( 'Title', 'plugin-name' ),
				'placeholder' => __( 'Enter your title', 'plugin-name' ),
			]
		);

		$this->end_controls_section();

	}

}
```

### Number Control

In this example we are going to add a simple number control defined at the `Control_Number` class which to allow the user to save numbers:

```php {12-23}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
			]
		);

		$this->add_control(
			'size',
			[
				'type' => \Elementor\Controls_Manager::NUMBER,
				'label' => __( 'Size', 'plugin-name' ),
				'placeholder' => '0',
				'min' => 0,
				'max' => 100,
				'step' => 1,
				'default' => 50,
			]
		);

		$this->end_controls_section();

	}

}
```

### Select Control

Another simple example is the `Control_Select` class which to allow to choose predefined fields:

```php {12-24}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
			]
		);

		$this->add_control(
			'open_lightbox',
			[
				'type' => \Elementor\Controls_Manager::SELECT,
				'label' => __( 'Lightbox', 'plugin-name' ),
				'options' => [
					'default' => __( 'Default', 'plugin-name' ),
					'yes' => __( 'Yes', 'plugin-name' ),
					'no' => __( 'No', 'plugin-name' ),
				],
				'default' => 'no',
			]
		);

		$this->end_controls_section();

	}

}
```

### Choose Control

If you liked the select control, you will love the choose control. The `Control_Choose` class allows the user to choose predefined fields but the components are styled component with an icon for each option.

```php {12-33}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
			]
		);

		$this->add_control(
			'alignment',
			[
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'label' => __( 'Alignment', 'plugin-name' ),
				'options' => [
					'left' => [
						'title' => __( 'Left', 'plugin-name' ),
						'icon' => 'fa fa-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'plugin-name' ),
						'icon' => 'fa fa-align-center',
					],
					'right' => [
						'title' => __( 'Right', 'plugin-name' ),
						'icon' => 'fa fa-align-right',
					],
				],
				'default' => 'center',
			]
		);

		$this->end_controls_section();

	}

}
```

### Slider Control

Another useful control is the `Control_Slider` that displays a draggable range slider:

```php {12-29}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
			]
		);

		$this->add_control(
			'font_size',
			[
				'type' => \Elementor\Controls_Manager::SLIDER,
				'label' => __( 'Size', 'plugin-name' ),
				'size_units' => [ 'px', 'em', 'rem' ],
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 200,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 20,
				],
			]
		);

		$this->end_controls_section();

	}

}
```

### Color Control

One of the more more popular controls is the `Control_Color`, it allows to choose a color:

```php {12-19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
			]
		);

		$this->add_control(
			'text_color',
			[
				'type' => \Elementor\Controls_Manager::COLOR,
				'label' => __( 'Text Color', 'plugin-name' ),
				'default' => '#fefefe',
			]
		);

		$this->end_controls_section();

	}

}
```

### Media Control

And finally for advanced uses you can use the `Control_Media` to select images from the WordPress media library:

```php {12-21}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
			]
		);

		$this->add_control(
			'image',
			[
				'type' => \Elementor\Controls_Manager::MEDIA,
				'label' => __( 'Choose Image', 'plugin-name' ),
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				]
			]
		);

		$this->end_controls_section();

	}

}
```
