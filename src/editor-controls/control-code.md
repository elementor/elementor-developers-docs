# Code Control

<img :src="$withBase('/assets/img/controls/control-code.png')" alt="Code Control" style="float: right;">

Elementor code control displays a code editor textarea based on [Ace editor](https://ace.c9.io/). It accepts a language argument to define the programming `language` and includes a syntax highlighter for highlighting the code.

The control is defined in `Control_Code` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::CODE` constant.

## Arguments

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>type</code></td>
			<td><code>string</code></td>
			<td>code</td>
			<td>The type of the control.</td>
		</tr>
		<tr>
			<td><code>label</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The label that appears above of the field.</td>
		</tr>
		<tr>
			<td><code>description</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The description that appears below the field.</td>
		</tr>
		<tr>
			<td><code>show_label</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to display the label.</td>
		</tr>
		<tr>
			<td><code>label_block</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to display the label in a separate line.</td>
		</tr>
		<tr>
			<td><code>separator</code></td>
			<td><code>string</code></td>
			<td>default</td>
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code>, <code>after</code> and <code>none</code>. <code>default</code> will position the separator depending on the control type. <code>before</code> / <code>after</code> will position the separator before/after the control. <code>none</code> will hide the separator.</td>
		</tr>
		<tr>
			<td><code>language</code></td>
			<td><code>string</code></td>
			<td>html</td>
			<td>Any <a href="https://ace.c9.io/build/kitchen-sink.html" target="_blank" rel="noopener">language supported by Ace editor</a>.</td>
		</tr>
		<tr>
			<td><code>rows</code></td>
			<td><code>int</code></td>
			<td>10</td>
			<td>Number of rows.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The field default value.</td>
		</tr>
	</tbody>
</table>

## Return Value

(_`string`_) The code field value.

## Usage

```php {14-22,30,35}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'custom_html',
			[
				'label' => esc_html__( 'Custom HTML', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::CODE,
				'language' => 'html',
				'rows' => 20,
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		echo $settings['custom_html'];
	}

	protected function content_template() {
		?>
		{{{ settings.custom_html }}}
		<?php
	}

}
```
