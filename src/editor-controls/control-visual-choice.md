# Visual Choice Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/controls/control-visual-choice.png')" alt="Visual Choice Control" style="float: right;">

Elementor visual choice control displays radio buttons styled as groups of buttons with an image for each option.

The control is defined in `Control_Visual_Choice` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::VISUAL_CHOICE` constant.

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
			<td>visual_choice</td>
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
			<td><code>options</code></td>
			<td><code>array</code></td>
			<td>[]</td>
			<td>A multi dimensional array containing a <code>title</code> and an <code>image</code> for each radio button.
		</tr>
		<tr>
			<td><code>columns</code></td>
			<td><code>number</code></td>
			<td>1</td>
			<td>Whether to allow toggle / unset the selection.</td>
		</tr>
		<tr>
			<td><code>toggle</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to allow toggle / unset the selection.</td>
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

```php {14-50}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'structure',
			[
				'label' => esc_html__( 'Structure', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::VISUAL_CHOICE,
				'label_block' => true,
				'options' => [
					'grid-3' => [
						'title' => esc_attr__( 'Grid: 3 columns.', 'textdomain' ),
						'image' => plugins_url( 'assets/img/grid-3.svg', __FILE__ ),
					],
					'masonry' => [
						'title' => esc_attr__( 'Masonry: arbitrary order', 'textdomain' ),
						'image' => plugins_url( 'assets/img/masonry.svg', __FILE__ ),
					],
					'stacked' => [
						'title' => esc_attr__( 'Stacked: Single column.', 'textdomain' ),
						'image' => plugins_url( 'assets/img/stacked.svg', __FILE__ ),
					],
					'focus' => [
						'title' => esc_attr__( 'Focus: Text only.', 'textdomain' ),
						'image' => plugins_url( 'assets/img/focus.svg', __FILE__ ),
					],
					'grid-2' => [
						'title' => esc_attr__( 'Grid: 2 columns.', 'textdomain' ),
						'image' => plugins_url( 'assets/img/grid2.svg', __FILE__ ),
					],
					'stretch' => [
						'title' => esc_attr__( 'Stretch: fit available width.', 'textdomain' ),
						'image' => plugins_url( 'assets/img/stretch.svg', __FILE__ ),
					]
				],
				'default' => 'masonry',
				'columns' => 2,
				'prefix_class' => 'some-layout-',
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
