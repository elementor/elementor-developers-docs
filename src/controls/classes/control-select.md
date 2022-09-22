# Select Control

<img :src="$withBase('/assets/img/controls/control-select.png')" alt="Select Control" style="float: right;">

Elementor select control displays a simple select box field. It accepts an array in which the `key` is the option `value` and the value is the option name.

The control is defined in `Control_Select` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::SELECT` constant.

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
			<td>select</td>
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
			<td>false</td>
			<td>Whether to display the label in a separate line.</td>
		</tr>
		<tr>
			<td><code>separator</code></td>
			<td><code>string</code></td>
			<td>default</td>
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code>, <code>after</code> and <code>none</code>. <code>default</code> will position the separator depending on the control type. <code>before</code> / <code>after</code> will position the separator before/after the control. <code>none</code> will hide the separator.</td>
		</tr>
		<tr>
			<td><code>options</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>An array of <code>key =&gt; value</code> pairs: <code>[ 'key' =&gt; 'value', ... ]</code></td>
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

(_`string`_) The selected option value.

## Usage

```php {14-28,37-39,45-47}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'border_style',
			[
				'label' => esc_html__( 'Border Style', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'solid',
				'options' => [
					'solid'  => esc_html__( 'Solid', 'textdomain' ),
					'dashed' => esc_html__( 'Dashed', 'textdomain' ),
					'dotted' => esc_html__( 'Dotted', 'textdomain' ),
					'double' => esc_html__( 'Double', 'textdomain' ),
					'none' => esc_html__( 'None', 'textdomain' ),
				],
				'selectors' => [
					'{{WRAPPER}} .your-class' => 'border-style: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		?>
		<div class="your-class">
			...
		</div>
		<?php
	}

	protected function content_template() {
		?>
		<div class="your-class">
			...
		</div>
		<?php
	}

}
```
