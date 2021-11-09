# Widget Controls

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Each widget needs to have some [controls](/controls/) (setting fields), where users can select their data. This data is saved in the database and later used to [generate custom output](/widgets/widget-rendering) based on the user's selection.

## Registering Controls

In your widget class, you can add controls inside the `register_controls()` method as follows:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section();

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

	}

}
```

* **Widget Controls** – The `register_controls()` method lets you define which controls (setting fields) your widget will contain.

## Available Controls

Elementor offers a [wide variety of controls](/controls/control-types) out-of-the-box. All the controls have to be wrapped in [sections](/controls/control-section). You can add [regular controls](/controls/regular-control), [responsive controls](/controls/responsive-control) and [group controls](/controls/group-control). Developers can even [create new controls](/controls/control-structure).

## Add Controls to your Widget

In the example below, we're going to add a few controls to a widget to allow users save data:

```php {12-19,21-32,34-46,48-69}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
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

		$this->add_control(
			'alignment',
			[
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'label' => esc_html__( 'Alignment', 'plugin-name' ),
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'plugin-name' ),
						'icon' => 'fa fa-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'plugin-name' ),
						'icon' => 'fa fa-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'plugin-name' ),
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
