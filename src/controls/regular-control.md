# Regular Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Regular controls are added using the `add_control()` method. 

## Regular Control Structure

Use the following code to add a control:

```php
$this->add_control(
	'control-name',
	[
		'type' => \Elementor\Controls_Manager::TEXT,
		'label' => esc_html__( 'Control Name', 'plugin-name' ),
	]
);
```

## Control Parameters

Each control has the following key parameters:

* **Control Name** `(string)` – Unique ID used in the code.
* **Control Setting** `(array)` – Extra control parameters.
  * **Type** `(string)` – The control type.
  * **Label** `(string)` – Label displayed to the user in the panel.
  * **Show Label** `(bool)` – Whether or not to show the label.
  * **Label Block** `(bool)` – Whether or not to display the label in a separate line.
  * **Separator** `(string)` – The position of the separator.
  * **Frontend Available** `(bool)` – Whether the data is available in the frontend using `getSettings()`.
  * **Conditions** `(array)` – Control display conditions.

**Note**: Each control has its own set of *custom settings* in addition to the default settings mentioned above. For example, text control has a *placeholder* setting, slider has a *range* setting, color controls have a *default* setting, etc.

## Examples

### Text Control

In the example below, we're going to add a simple text control defined at the `control_text` class, which will allow users to save a simple string. The control will have a placeholder set:

```php {12-19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'title',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => esc_html__( 'Title', 'plugin-name' ),
				'placeholder' => esc_html__( 'Enter your title', 'plugin-name' ),
			]
		);

		$this->end_controls_section();

	}

}
```

### Number Control

In the example below, we're going to add a simple number control defined at the `Control_Number` class, which will allow users to save numbers:

```php {12-23}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'size',
			[
				'type' => \Elementor\Controls_Manager::NUMBER,
				'label' => esc_html__( 'Size', 'plugin-name' ),
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

Another simple example is the `Control_Select` class, which will allow users to choose predefined fields:

```php {12-24}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'open_lightbox',
			[
				'type' => \Elementor\Controls_Manager::SELECT,
				'label' => esc_html__( 'Lightbox', 'plugin-name' ),
				'options' => [
					'default' => esc_html__( 'Default', 'plugin-name' ),
					'yes' => esc_html__( 'Yes', 'plugin-name' ),
					'no' => esc_html__( 'No', 'plugin-name' ),
				],
				'default' => 'no',
			]
		);

		$this->end_controls_section();

	}

}
```

### Choose Control

Choose control is an improved version of select control. The `Control_Choose` class allows users to choose predefined fields, but the components are styled with an icon for each option.

```php {12-33}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'alignment',
			[
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'label' => esc_html__( 'Alignment', 'plugin-name' ),
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'plugin-name' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'plugin-name' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'plugin-name' ),
						'icon' => 'eicon-text-align-right',
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

Another useful control is the `Control_Slider`, which displays a draggable range slider:

```php {12-29}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'font_size',
			[
				'type' => \Elementor\Controls_Manager::SLIDER,
				'label' => esc_html__( 'Size', 'plugin-name' ),
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

One of the more more popular controls is `Control_Color`, which lets users choose a color:

```php {12-19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'text_color',
			[
				'type' => \Elementor\Controls_Manager::COLOR,
				'label' => esc_html__( 'Text Color', 'plugin-name' ),
				'default' => '#fefefe',
			]
		);

		$this->end_controls_section();

	}

}
```

### Media Control

And finally, for advanced users, you can use `Control_Media` to select images from the WordPress media library:

```php {12-21}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'image',
			[
				'type' => \Elementor\Controls_Manager::MEDIA,
				'label' => esc_html__( 'Choose Image', 'plugin-name' ),
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				]
			]
		);

		$this->end_controls_section();

	}

}
```
