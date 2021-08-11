# Number Control

Elementor number control displays a simple number input field with the option to limit the min and max values and define the step when changing the value.

The control is defined in `Control_Number` class which extends `Base_Data_Control` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::NUMBER` constant.

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
			<td>number</td>
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
			<td><code>min</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The minimum number (only affects the spinners, the user can still type a lower value).</td>
		</tr>
		<tr>
			<td><code>max</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The maximum number (only affects the spinners, the user can still type a higher value).</td>
		</tr>
		<tr>
			<td><code>step</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The intervals value that will be incremented or decremented when using the controls’ spinners. Default is empty, the value will be incremented by 1.</td>
		</tr>
		<tr>
			<td><code>placeholder</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The field placeholder that appears when the field has no values.</td>
		</tr>
		<tr>
			<td><code>title</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The field title that appears on mouse hover.</td>
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

(_`string`_) The number field value.

## Usage

```php {14-24,33,39}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'price',
			[
				'label' => __( 'Price', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'min' => 5,
				'max' => 100,
				'step' => 5,
				'default' => 10,
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		?>
		<span class="price"><?php echo $settings['price']; ?></span>
		<?php
	}

	protected function content_template() {
		?>
		<span class="price">{{{ settings.price }}}</span>
		<?php
	}

}
```
