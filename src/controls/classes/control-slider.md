# Slider Control

Elementor slider control displays a draggable range slider. The slider control can optionally have a number of unit types (`size_units`) for the user to choose from. The control also accepts a `range` argument that allows you to set the `min`, `max` and `step` values per unit type.

The control is defined in `Control_Slider` class which extends `Control_Base_Units` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::SLIDER` constant.

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
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code>, <code>after</code> and <code>none</code>. <code>default</code> will position the separator depending on the control type. <code>before</code> / <code>after</code> will position the separator before/after the control. <code>none</code> will hide the separator.</td>
		</tr>
		<tr>
			<td><code>size_units</code></td>
			<td><code>array</code></td>
			<td>[ ‘px’ ]</td>
			<td>An array of available CSS units like <code>px</code>, <code>em</code>, <code>rem</code>, <code>%</code>, <code>deg</code> and <code>vh</code>.</td>
		</tr>
		<tr>
			<td><code>range</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>
				An array of ranges for each register size.
				<p></p>
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
				<p></p>
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

```php {14-39,47,52}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function _register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'width',
			[
				'label' => __( 'Width', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
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
					'{{WRAPPER}} .box' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		echo '<div class="box" style="width: ' . $settings['width']['size'] . $settings['width']['unit'] '"> ... </div>';
	}

	protected function _content_template() {
		?>
		<div class="box" style="width: {{ settings.width.size }}{{ settings.width.unit }}"> ... </div>';
		<?php
	}

}
```
