# Control Tabs

**Control Tabs** are UI wrappers used to arrange controls under tabs and sections. Each control needs to be added to a section. Tabs are created using two methods: `start_controls_tabs()` creates a new tabs and `end_controls_tabs()` closes the tabs. Each tabs area has an inner tab elements. Single tab is created using another two inner methods: `start_controls_tab()` creates a new tab and `end_controls_tab()` closes the tab.

## Control Tabs Structure

Adding a new control tab is done as follows:

```php
$this->start_controls_tabs(
	'style_tabs'
);

$this->start_controls_tab(
	'style_normal_tab',
	[
		'label' => __( 'Normal', 'plugin-name' ),
	]
);

$this->end_controls_tab();

$this->end_controls_tabs();
```

## Control Parameters

Each wrapper tabs control has the following key parameters:

* **Tab Name** `(string)` – Unique ID used in the code.

Each inner tab control has the following key parameters:

* **Tab Name** `(string)` – Unique ID used in the code.
* **Tab Setting** `(array)` – Extra tab parameters.
  * **Label** `(string)` – Label displayed to the user in the panel.

## Examples

### Control Tabs

Let's group controls into two tabs, "Normal" tab and "Hover" tab:

```php {13-15,17-22,30,32-37,45,47}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => __( 'Style Section', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->start_controls_tabs(
			'style_tabs'
		);

		$this->start_controls_tab(
			'style_normal_tab',
			[
				'label' => __( 'Normal', 'plugin-name' ),
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_tab();

		$this->start_controls_tab(
			'style_hover_tab',
			[
				'label' => __( 'Hover', 'plugin-name' ),
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
