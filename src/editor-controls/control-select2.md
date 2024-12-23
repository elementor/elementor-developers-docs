# Select2 Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/controls/control-select2.png')" alt="Select2 Control" style="float: right;">

Elementor select2 control displays a select box control based on [Select2](https://select2.org/) library. It accepts an array in which the `key` is the value and the `value` is the option name. Set `multiple` to `true` to allow multiple value selection.

The control is defined in `Control_Select2` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::SELECT2` constant.

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
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code> and <code>after</code>. <code>default</code> will hide the separator, unless the control type has specific separator settings. <code>before</code> / <code>after</code> will position the separator before/after the control.</td>
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

```php {14-28,36-42,47-53}
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
			'list',
			[
				'label' => esc_html__( 'Show Elements', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SELECT2,
				'label_block' => true,
				'multiple' => true,
				'options' => [
					'title'  => esc_html__( 'Title', 'textdomain' ),
					'description' => esc_html__( 'Description', 'textdomain' ),
					'button' => esc_html__( 'Button', 'textdomain' ),
				],
				'default' => [ 'title', 'description' ],
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		if ( $settings['list'] ) {
			echo '<ul>';
			foreach ( $settings['list'] as $item ) {
				echo '<li>' . $item . '</li>';
			}
			echo '</ul>';
		}
	}

	protected function content_template(): void {
		?>
		<# if ( settings.list.length ) { #>
			<ul>
			<# _.each( settings.list, function( item ) { #>
				<li>{{{ item }}}</li>
			<# } ) #>
			</ul>
		<# } #>
		<?php
	}

}
```
