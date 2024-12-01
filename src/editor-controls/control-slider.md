# Slider Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/controls/control-slider.png')" alt="Slider Control" style="float: right;">

Elementor slider control displays a draggable range slider. The slider control can optionally have a number of unit types (`size_units`) for the user to choose from. The control also accepts a `range` argument that allows you to set the `min`, `max` and `step` values per unit type.

<img :src="$withBase('/assets/img/controls/control-slider2.png')" alt="Slider Control" style="float: right;">

The control is defined in `Control_Slider` class which extends `Control_Base_Units` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::SLIDER` constant.

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
			<td>slider</td>
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
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code> and <code>after</code>. <code>default</code> will hide the separator, unless the control type has specific separator settings. <code>before</code> / <code>after</code> will position the separator before/after the control.</td>
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
					<li><strong>$unit</strong> (<code>string</code>) Initial unit of the slider.</li>
					<li><strong>$size</strong> (<code>int</code>) Initial size of the slider.</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

## Return Value

```
[
	'unit' => '',
	'size' => '',
]
```

(_`array`_) An array containing the dimension values:

* **$unit** (_`string`_) Selected unit.
* **$size** (_`int`_) Selected size.

## Usage

```php {14-39,48-50,56-58}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'width',
			[
				'label' => esc_html__( 'Width', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
						'step' => 5,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => '%',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .your-class' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		?>
		<div class="your-class">
			...
		</div>
		<?php
	}

	protected function content_template(): void {
		?>
		<div class="your-class">
			...
		</div>
		<?php
	}

}
```
