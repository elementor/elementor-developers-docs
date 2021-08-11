# Color Control

Elementor color control displays a color picker field with an alpha slider. It includes a customizable color palette that can be preset by the user. Accepts a scheme argument that allows you to set a value from the active color `scheme` as the default value returned by the control.

The control is defined in `Control_Color` class which extends `Base_Data_Control` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::COLOR` constant.

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
			<td>color</td>
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
			<td><code>alpha</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to allow alpha channel.</td>
		</tr>
		<tr>
			<td><code>scheme</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>The "color scheme" to display in the control.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>Default color in RGB, RGBA, or HEX format.</td>
		</tr>
	</tbody>
</table>

## Return Value

(_`string`_) The color value in RGB, RGBA, or HEX format.

## Usage

```php {14-27,36-38,44-46}
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
			'title_color',
			[
				'label' => __( 'Title Color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'scheme' => [
					'type' => \Elementor\Scheme_Color::get_type(),
					'value' => \Elementor\Scheme_Color::COLOR_1,
				],
				'selectors' => [
					'{{WRAPPER}} .title' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		?>
		<h2 class="title" style="color: <?php echo esc_attr( $settings['title_color'] ); ?>;">
			...
		</h2>
		<?php
	}

	protected function content_template() {
		?>
		<h2 class="title" style="color: {{ settings.title_color }}">
			...
		</h2>
		<?php
	}

}
```
