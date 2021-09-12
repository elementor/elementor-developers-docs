# Control Tabs

**Control Tabs** are UI wrappers used to arrange sections and controls in the panel. Controls must be added to sections and sections are part of a tab. Tabs are created using two methods: `start_controls_tabs()` creates a new tabs while `end_controls_tabs()` closes the tab. Each tab area has inner tab elements and these inner tabs are also created using two methods: `start_controls_tab()` creates a new inner tab while `end_controls_tab()` closes the inner tab.

## Control Tabs Structure

Use the following to add a new control tab:

```php
$this->start_controls_tabs(
	'style_tabs'
);

$this->start_controls_tab(
	'style_normal_tab',
	[
		'label' => esc_html__( 'Normal', 'plugin-name' ),
	]
);

$this->end_controls_tab();

$this->end_controls_tabs();
```

## Control Parameters

Each tab control has the following key parameters:

* **Tab Name** `(string)` – Unique ID used in the code.

Each inner tab control has the following key parameters:

* **Tab Name** `(string)` – Unique ID used in the code.
* **Tab Setting** `(array)` – Extra tab parameters.
* **Label** `(string)` – Label displayed to the user in the panel.

## Examples

### Control Tabs

Let's group controls into two tabs - "Normal" and "Hover":

```php {13-15,17-22,30,32-37,45,47}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style Section', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->start_controls_tabs(
			'style_tabs'
		);

		$this->start_controls_tab(
			'style_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'plugin-name' ),
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_tab();

		$this->start_controls_tab(
			'style_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'plugin-name' ),
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

	}

}
```
