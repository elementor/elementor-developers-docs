# Control Section

**Control Sections** are UI wrappers used to arrange controls under tabs and sections. Each control needs to be added to a section. Sections are created using two methods: `start_controls_section()` creates a new section and `end_controls_section()` closes the section.

## Control Section Structure

Adding a new control section is done as follows:

```php
$this->start_controls_section(
	'my_section',
	[
		'label' => __( 'My Section', 'plugin-name' ),
		'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
	]
);

$this->end_controls_section();
```

## Control Parameters

Each control has the following key parameters:

* **Section Name** `(string)` – Unique id used in the code.
* **Section Setting** `(array)` – Extra section parameters.
  * **Label** `(string)` – Label displayed to the user in the panel.
  * **Tab** `(string)` – The tab where the section is included in. Default is `content`.

## Examples

### Single Section

The first example is a single section in "**Content**" tab. When The section will We have to provide the section name and extra parameters like the tab label:

```php {5-11,19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

	}

}
```

This will create a new section for our controls under the "**Content**" tab.

![Elementor Single Section](/assets/img/elementor-single-section.png)

### Multiple Sections

Now lets create multiple sections for our controls:

```php {5-11,19,21-27,35}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

		$this->start_controls_section(
			'info_section',
			[
				'label' => __( 'Info', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

	}

}
```

This will create two section for our controls under the "**Content**" tab.

![Elementor Multiple Sections](/assets/img/elementor-multiple-sections.png)

### Sections in Multiple Tabs

The next step is to create a new section under the "**Style**" tab. This is done be specifying the tab name under the extra parameters array.

Elementor has a predefined list of tab that you can use, but with widgets the convention is to use only the "**Content**" tab and the "**Style**" tab.

```php {5-11,19,21-27,35,37-43,51}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

		$this->start_controls_section(
			'info_section',
			[
				'label' => __( 'Info', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

		$this->start_controls_section(
			'style_section',
			[
				'label' => __( 'Style', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

	}

}
```

In this example we created two sections under the "**Content**" tab and another section under the "St**yle" tab.

![Elementor Section in a Tab](/assets/img/elementor-section-in-a-tab.png)

As you can see from the code, if we don’t defined the "tab", the section will be added to the "**Content**" tab by default.
