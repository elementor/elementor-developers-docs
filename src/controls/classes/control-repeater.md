# Repeater Control

Elementor repeater control allows you to build repeatable blocks of fields. You can create, for example, a set of fields that will contain a title and a WYSIWYG text – the user will then be able to add "rows", and each row will contain a title and a text. The data can be wrapped in custom HTML tags, designed using CSS, and interact using JS or external libraries.

The control is defined in `Control_Repeater` class which extends `Base_Data_Control` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::REPEATER` constant.

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
			<td>repeater</td>
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
			<td><code>fields</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>A multi dimensional array containing the repeater fields.</td>
		</tr>
		<tr>
			<td><code>title_field</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>Field that will be used as the repeater title in the fields list when the item is minimized.</td>
		</tr>
		<tr>
			<td><code>prevent_empty</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to prevent deleting the first repeater field. To keep at least one repeater field.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>Default repeater values. A multi dimensional array containing fields as keys and default values for each key as values: <code>[ [ 'title' =&gt; '', 'content' =&gt; '' ], [ 'title' =&gt; '', 'content' =&gt; '' ], ... ]</code></td>
		</tr>
	</tbody>
</table>

## Return Value

(_`array`_) A multi dimensional array containing inner fields values.

## Usage

Usage example with `Repeater()` class:

```php {14-43,50,72-79,84-91}
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

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'list_title', [
				'label' => __( 'Title', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'List Title' , 'plugin-name' ),
				'label_block' => true,
			]
		);

		$repeater->add_control(
			'list_content', [
				'label' => __( 'Content', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'default' => __( 'List Content' , 'plugin-name' ),
				'show_label' => false,
			]
		);

		$repeater->add_control(
			'list_color',
			[
				'label' => __( 'Color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => 'color: {{VALUE}}'
				],
			]
		);

		$this->add_control(
			'list',
			[
				'label' => __( 'Repeater List', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'list_title' => __( 'Title #1', 'plugin-name' ),
						'list_content' => __( 'Item content. Click the edit button to change this text.', 'plugin-name' ),
					],
					[
						'list_title' => __( 'Title #2', 'plugin-name' ),
						'list_content' => __( 'Item content. Click the edit button to change this text.', 'plugin-name' ),
					],
				],
				'title_field' => '{{{ list_title }}}',
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		if ( $settings['list'] ) {
			echo '<dl>';
			foreach (  $settings['list'] as $item ) {
				echo '<dt class="elementor-repeater-item-' . esc_attr( $item['_id'] ) . '">' . $item['list_title'] . '</dt>';
				echo '<dd>' . $item['list_content'] . '</dd>';
			}
			echo '</dl>';
		}
	}

	protected function content_template() {
		?>
		<# if ( settings.list.length ) { #>
		<dl>
			<# _.each( settings.list, function( item ) { #>
				<dt class="elementor-repeater-item-{{ item._id }}">{{{ item.list_title }}}</dt>
				<dd>{{{ item.list_content }}}</dd>
			<# }); #>
			</dl>
		<# } #>
		<?php
	}

}
```
