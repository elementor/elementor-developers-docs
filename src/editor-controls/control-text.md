# Text Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/controls/control-text.png')" alt="Text Control" style="float: right;">

Elementor text control displays a simple text input field.

The control is defined in `Control_Text` class which extends `Base_Data_Control` class.

<img :src="$withBase('/assets/img/controls/control-text-block.png')" alt="Text Control - block view" style="float: right;">

When using this control, the `type` should be set to `\Elementor\Controls_Manager::TEXT` constant.

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
			<td>text</td>
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
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code> and <code>after</code>. <code>default</code> will hide the separator, unless the control type has specific separator settings. <code>before</code> / <code>after</code> will position the separator before/after the control.</td>
		</tr>
		<tr>
			<td><code>input_type</code></td>
			<td><code>string</code></td>
			<td>text</td>
			<td>The input field type. Available values are all HTML5 supported types.</td>
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
			<td><code>classes</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>Add custom classes to control wrapper in the panel.</td>
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

(_`string`_) The text field value.

## Usage

```php {14-22,35-37,48-50}
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
			'widget_title',
			[
				'label' => esc_html__( 'Title', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Default title', 'textdomain' ),
				'placeholder' => esc_html__( 'Type your title here', 'textdomain' ),
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['widget_title'] ) ) {
			return;
		}
		?>
		<h2 class="title">
			<?php echo $settings['widget_title']; ?>
		</h2>
		<?php
	}

	protected function content_template() {
		?>
		<#
		if ( '' === settings.widget_title ) {
			return;
		}
		#>
		<h2 class="title">
			{{{ settings.widget_title }}}
		</h2>
		<?php
	}

}
```
