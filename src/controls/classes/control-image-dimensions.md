# Image Dimensions Control

Elementor image dimensions control displays a width input, a height input and an apply button. It is used by the Image Size control to allow the user to set custom width or height for an image.

The control is defined in `Control_Image_Dimensions` class which extends `Control_Base_Multiple` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::IMAGE_DIMENSIONS` constant.

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
			<td>image_dimensions</td>
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
			<td>false</td>
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
			<td><code>default</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>
				Default image dimension values.
				<ul>
					<li><strong>$width</strong> (<code>int</code>) Image width.</li>
					<li><strong>$height</strong> (<code>int</code>) Image height.</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

## Return Value

```
[
	'width' => '',
	'height' => '',
]
```

(_`array`_) An array containing image dimension values:

* **$width** (_`int`_) Image width.
* **$height** (_`int`_) Image height.

## Usage

```php {14-25}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'custom_dimension',
			[
				'label' => esc_html__( 'Image Dimension', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::IMAGE_DIMENSIONS,
				'description' => esc_html__( 'Crop the original image size to any custom size. Set custom width or height to keep the original size ratio.', 'plugin-name' ),
				'default' => [
					'width' => '',
					'height' => '',
				],
			]
		);

		$this->end_controls_section();

	}

}
```
