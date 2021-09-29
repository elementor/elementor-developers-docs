# Control Section

Control sections are UI wrappers used to arrange controls under the tabs in the panel. These controls are divided into sections and each control must be part of a section. These sections are created using two methods: `start_controls_section()` creates a new section while `end_controls_section()` closes the section.

## Control Section Structure

Following these steps to add a new control section:

```php
$this->start_controls_section(
	'my_section',
	[
		'label' => esc_html__( 'My Section', 'plugin-name' ),
		'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
	]
);

$this->end_controls_section();
```

## Control Parameters

Every control has the following key parameters:

* **Section Name** `(string)` – Unique id used in the code.
* **Section Setting** `(array)` – Extra section parameters.
  * **Label** `(string)` – Label displayed to the user in the panel.
  * **Tab** `(string)` – Tab where the section is located. Default is `content`.
  * **Conditions** `(array)` – Control display conditions.

## Examples

### Single Section

The example below creates a single section which will be part of the "**Content**" tab. We need to provide the section name and extra parameters like the tab label:

```php {5-11,19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
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

Now let's create multiple control sections for the "**Content**" tab:

```php {5-11,19,21-27,35}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
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
				'label' => esc_html__( 'Info', 'plugin-name' ),
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

This will create two sections for our controls under the "**Content**" tab.

![Elementor Multiple Sections](/assets/img/elementor-multiple-sections.png)

### Sections in Multiple Tabs

The next step is to create new sections under the "**Content**" tab and under the "**Style**" tab. This is done be specifying the tab name under the extra parameters array.

Elementor has a predefined list of tabs that you can use, but with widgets the convention is to only use the "**Content**" tab and the "**Style**" tab.

```php {5-11,19,21-27,35,37-43,51}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
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
				'label' => esc_html__( 'Info', 'plugin-name' ),
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
				'label' => esc_html__( 'Style', 'plugin-name' ),
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

In this example, we created two sections under the "**Content**" tab and another section under the "**Style**" tab.

![Elementor Section in a Tab](/assets/img/elementor-section-in-a-tab.png)

As you can see from the code, unless we define the "tab", the section will be added to the "**Content**" tab by default.
