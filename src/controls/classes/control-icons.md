# Icons Control

<img :src="$withBase('/assets/img/controls/control-icons.png')" alt="Icons Control" style="float: right;">

Elementor Icons control displays the icons chooser. In addition, it has the abilitiy to select existing icons from Elementor's "Icon Library" or "Upload SVG" to WordPress media library.

The control is defined in `Control_Icons` class which extends `Control_Base_Multiple` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::ICONS` constant.

## Arguments

<table>
	<tbody>
		<tr>
			<td><strong>Name</strong></td>
			<td><strong>Type</strong></td>
			<td><strong>Default</strong></td>
			<td><strong>Description</strong></td>
		</tr>
		<tr>
			<td><code>type</code></td>
			<td><code>string</code></td>
			<td>icons</td>
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
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>array</code></td>
			<td>&nbsp;</td>
			<td>The default value is set as an array of value and library</td>
		</tr>
		<tr>
			<td><code>fa4compatibility</code></td>
			<td><code>string</code></td>
			<td>&nbsp;</td>
			<td>Used to Migrate data from old <a href="./control-icon.html">Icon control</a>, Should be set to the old control name.</td>
		</tr>
		<tr>
			<td><code>recommended</code></td>
			<td><code>array</code></td>
			<td>&nbsp;</td>
			<td>Used to set the Recommended icons of this Control instance</td>
		</tr>
		<tr>
			<td><code>skin</code></td>
			<td><code>string</code></td>
			<td>media</td>
			<td>Used to change the appearance of the control. There are two options: <code>media</code> or <code>inline</code>. The inline skin’s design is based on the Choose Control.</td>
		</tr>
		<tr>
			<td><code>exclude_inline_options</code></td>
			<td><code>array</code></td>
			<td>&nbsp;</td>
			<td>Used with the <code>inline</code> skin only, to hide an option (Icon Library/SVG) from the inline icon control’s buttons.</td>
		</tr>
	</tbody>
</table>

## Return Value

```
[
	'value' => '',
	'library' => '',
]
```

(_`array`_) An array containing icon data:

* **$value** (_`int`_) Icon value.
* **$library** (_`string`_) Icon library name.

## Usage

```php {22-44,53-55,61-66}
<?php
class Icons_Elementor_Test_Control_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'icons_test_widget';
	}

	public function get_title() {
		return esc_html__( 'Icons Test Widget', 'textdomain' );
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section_icon',
			[
				'label' => esc_html__( 'Icon', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'icon',
			[
				'label' => esc_html__( 'Icon', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-circle',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'circle',
						'dot-circle',
						'square-full',
					],
					'fa-regular' => [
						'circle',
						'dot-circle',
						'square-full',
					],
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		?>
		<div class="my-icon-wrapper">
			<?php \Elementor\Icons_Manager::render_icon( $settings['icon'], [ 'aria-hidden' => 'true' ] ); ?>
		</div>
		<?php
	}

	protected function content_template() {
		?>
		<#
		var iconHTML = elementor.helpers.renderIcon( view, settings.selected_icon, { 'aria-hidden': true }, 'i' , 'object' );
		#>
		<div class="my-icon-wrapper">
			{{{ iconHTML.value }}}
		</div>
		<?php
	}

}
```
