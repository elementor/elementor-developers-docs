# Background Group Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor background group control displays input fields to define the background including the background color, background image, background gradient or background video.

The control is defined in `Group_Control_Background` class which extends `Group_Control_Base` class.

When using this group control, the `type` should be set to `Group_Control_Background::get_type()` method.

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
			<td>background</td>
			<td>The type of the control.</td>
		</tr>
		<tr>
			<td><code>separator</code></td>
			<td><code>string</code></td>
			<td>default</td>
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code>, <code>after</code> and <code>none</code>. <code>default</code> will position the separator depending on the control type. <code>before</code> / <code>after</code> will position the separator before/after the control. <code>none</code> will hide the separator.</td>
		</tr>
		<tr>
			<td><code>types</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>The specific background types to use. Available types are <code>classic</code>, <code>gradient</code> and <code>video</code>. Default is an empty array, including all the types.</td>
		</tr>
		<tr>
			<td><code>exclude</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>Exclude some controls from the group control. Example: <code>['image']</code></td>
		</tr>
		<tr>
			<td><code>fields_options</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>A multi dimensional array containing data that overrides control settings.</td>
		</tr>
	</tbody>
</table>

## Return Value

(_`array`_) An array containing the background values.

## Usage

```php {14-21,30-32,38-40}
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

		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .your-class',
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

## Notes

Video background is only supported at section level, not on widget level.
