# Select2 Control

Elementor select2 control displays a select box control based on [Select2](https://select2.org/) library. It accepts an array in which the `key` is the value and the `value` is the option name. Set `multiple` to `true` to allow multiple value selection.

The control is defined in `Control_Select2` class which extends `Base_Data_Control` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::SELECT2` constant.

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
			<td>select2</td>
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
			<td><code>multiple</code></td>
			<td><code>bool</code></td>
			<td>false</td>
			<td>Whether to allow multiple value selection.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>string|array</code></td>
			<td></td>
			<td>The selected option key, or an array of selected values if <code>multiple</code>&nbsp;is set to&nbsp;<code>true</code>.</td>
		</tr>
	</tbody>
</table>

## Return Value

(_`string`|`array`_) The selected option key, or an array of selected keys if `multiple` is set to `true`.

## Usage

```php {14-27,35-37,42-44}
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
			'show_elements',
			[
				'label' => __( 'Show Elements', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT2,
				'multiple' => true,
				'options' => [
					'title'  => __( 'Title', 'plugin-name' ),
					'description' => __( 'Description', 'plugin-name' ),
					'button' => __( 'Button', 'plugin-name' ),
				],
				'default' => [ 'title', 'description' ],
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		foreach ( $settings['show_elements'] as $element ) {
			echo '<div>' . $element . '</div>';
		}
	}

	protected function _content_template() {
		?>
		<# _.each( settings.show_elements, function( element ) { #>
			<div>{{{ element }}}</div>
		<# } ) #>
		<?php
	}

}
```
