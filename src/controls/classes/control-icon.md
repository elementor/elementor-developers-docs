# Icon Control

::: danger DEPRECATED
This control was deprecated in favor of the new [Icons Control](./../classes/control-icons/).
:::

Elementor icon control displays a font icon select box field based on [Font Awesome](https://fontawesome.com/) fonts. The control accepts `include` or `exclude` arguments to set a partial list of icons.

The control is defined in `Control_Icon` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::ICON` constant.

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
			<td>icon</td>
			<td>The type of the control.</td>
		</tr>
		<tr>
			<td><code>label</code></td>
			<td><code>string</code></td>
			<td>&nbsp;</td>
			<td>The label that appears above of the field.</td>
		</tr>
		<tr>
			<td><code>description</code></td>
			<td><code>string</code></td>
			<td>&nbsp;</td>
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
			<td><code>get_icons()</code></td>
			<td>An associative array of available icons.</td>
		</tr>
		<tr>
			<td><code>include</code></td>
			<td><code>array</code></td>
			<td>&nbsp;</td>
			<td>An array of icon classes to include in the options list.</td>
		</tr>
		<tr>
			<td><code>exclude</code></td>
			<td><code>array</code></td>
			<td>&nbsp;</td>
			<td>An array of icon classes to exclude from the options list.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>string</code></td>
			<td>&nbsp;</td>
			<td>Default icon name.</td>
		</tr>
	</tbody>
</table>

## Return Value

(_`string`_) The selected icon CSS class.

## Usage

```php {14-34,43,49}
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
			'icon',
			[
				'label' => esc_html__( 'Social Icons', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::ICON,
				'include' => [
					'fa fa-facebook',
					'fa fa-flickr',
					'fa fa-google-plus',
					'fa fa-instagram',
					'fa fa-linkedin',
					'fa fa-pinterest',
					'fa fa-reddit',
					'fa fa-twitch',
					'fa fa-twitter',
					'fa fa-vimeo',
					'fa fa-youtube',
				],
				'default' => 'fa fa-facebook',
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		?>
		<i class="<?php echo esc_attr( $settings['icon'] ); ?>" aria-hidden="true"></i>
		<?php
	}

	protected function content_template() {
		?>
		<i class="{{ settings.icon }}" aria-hidden="true"></i>
		<?php
	}

}
```
