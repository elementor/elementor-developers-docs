# Dimensions Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/controls/control-dimensions.png')" alt="Dimensions Control" style="float: right;">

Elementor dimensions control displays a input fields for top, right, bottom, left and the option to link them together. The dimensions control can optionally have a number of unit types (`size_units`) for the user to choose from. The control also accepts a `range` argument that allows you to set the `min`, `max` and `step` values per unit type.

<img :src="$withBase('/assets/img/controls/control-dimensions2.png')" alt="Dimensions Control" style="float: right;">

The control is defined in `Control_Dimensions` class which extends `Control_Base_Units` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::DIMENSIONS` constant.

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
			<td>dimensions</td>
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
			<td><code>size_units</code></td>
			<td><code>array</code></td>
			<td>[ 'px' ]</td>
			<td>An array of available CSS units like <code>px</code>, <code>em</code>, <code>rem</code>, <code>%</code>, <code>deg</code>, <code>vh</code> or <code>custom</code>.</td>
		</tr>
		<tr>
			<td><code>range</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>
				An array of ranges for each register size.
				<ul>
					<li><strong>$min</strong> (<code>int</code>) The minimum value of range.</li>
					<li><strong>$max</strong> (<code>int</code>) The maximum value of range.</li>
					<li><strong>$step</strong> (<code>int</code>) The intervals value that will be incremented or decremented when using the controls’ spinners.</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>
				Default slider value.
				<ul>
					<li><strong>$top</strong> (<code>int</code>) Initial size of the top dimension.</li>
					<li><strong>$right</strong> (<code>int</code>) Initial size of the right dimension.</li>
					<li><strong>$bottom</strong> (<code>int</code>) Initial size of the bottom dimension.</li>
					<li><strong>$left</strong> (<code>int</code>) Initial size of the left dimension.</li>
					<li><strong>$unit</strong> (<code>string</code>) Initial size of the CSS unit type.</li>
					<li><strong>$isLinked</strong> (<code>bool</code>) Whether to link all the values together or not.</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><code>placeholder</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>
				The field placeholder that appears when the field has no values.
				<ul>
					<li><strong>$top</strong> (<code>int</code>) placeholder of the top dimension.</li>
					<li><strong>$right</strong> (<code>int</code>) placeholder of the right dimension.</li>
					<li><strong>$bottom</strong> (<code>int</code>) placeholder of the bottom dimension.</li>
					<li><strong>$left</strong> (<code>int</code>) placeholder of the left dimension.</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

## Return Value

```
[
	'top' => '',
	'right' => '',
	'bottom' => '',
	'left' => '',
	'unit' => '',
	'isLinked' => '',
]
```

(_`array`_) An array containing the dimension values:

* **$top** (_`int`_) Top dimension.
* **$right** (_`int`_) Right dimension.
* **$bottom** (_`int`_) Bottom dimension.
* **$left** (_`int`_) Left dimension.
* **$unit** (_`string`_) The CSS unit type.
* **$isLinked** (_`bool`_) Whether to link all the values together or not.

## Usage

```php {14-24,33-35,41-43}
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
			'margin',
			[
				'label' => esc_html__( 'Margin', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .your-class' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
