# Deprecated Notice Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor Deprecated Notice control displays a pre-formatted notice in the panel, warning that the widget is deprecated and should be replaced.

The control is defined in `Control_Deprecated_Notice` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::DEPRECATED_NOTICE` constant.

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
			<td>raw_html</td>
			<td>The type of the control.</td>
		</tr>
		<tr>
			<td><code>label</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The label that appears above of the field.</td>
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
			<td><code>widget</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The widget name.</td>
		</tr>
		<tr>
			<td><code>since</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>Plugin version in which the widget was deprecated.</td>
		</tr>
		<tr>
			<td><code>last</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>Plugin version in which the widget will be removed.</td>
		</tr>
		<tr>
			<td><code>plugin</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>Plugin’s title.</td>
		</tr>
		<tr>
			<td><code>replacement</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>Widget replacement.</td>
		</tr>
	</tbody>
</table>

## Return Value

This control does not return any value.

## Usage

There are two ways to add deprecation notice to widgets:

### Using the Regular Add Control

Add a notice warning that the widget is deprecated using the regular `add_control()` method.

```php {14-25}
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
			'deprecated_notice',
			[
				'type' => \Elementor\Controls_Manager::DEPRECATED_NOTICE,
				'widget' => 'your-old-widget',
				'since' => '2.6.0',
				'last' => '3.0.0',
				'plugin' => 'Your Great Plugin',
				'replacement' => 'your-new-widget',
				'content_classes' => 'your-class',
			]
		);

		// Register the rest of the controls as usual.

		$this->end_controls_section();

	}

}
```

### Using a Deprecated Notice Method

Add a notice warning that the widget is deprecated using the `deprecated_notice()` method.

```php {14-19}
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

		$this->deprecated_notice(
			'Your Great Plugin',
			'2.6.0',
			'3.0.0',
			'your-new-widget'
		);

		// Register the rest of the controls as usual.

		$this->end_controls_section();

	}
}
```
