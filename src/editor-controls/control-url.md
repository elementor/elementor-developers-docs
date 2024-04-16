# URL Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/controls/control-url.png')" alt="URL Control" style="float: right;">

Elementor URL control displays a URL input field. The control also has the ability to display more controls, such as the ability to open the link in new window, to add `nofollow` attribute and to define additional attributes (a comma-separated list of key-value pairs).

<img :src="$withBase('/assets/img/controls/control-url-options2.png')" alt="URL Control Options" style="float: right;">

The control is defined in `Control_URL` class which extends `Control_Base_Multiple` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::URL` constant.

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
			<td>url</td>
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
			<td>true</td>
			<td>Whether to display the label in a separate line.</td>
		</tr>
		<tr>
			<td><code>separator</code></td>
			<td><code>string</code></td>
			<td>default</td>
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code> and <code>after</code>. <code>default</code> will hide the separator, unless the control type has specific separator settings. <code>before</code> / <code>after</code> will position the separator before/after the control.</td>
		</tr>
		<tr>
			<td><code>placeholder</code></td>
			<td><code>string</code></td>
			<td>Paste URL or type</td>
			<td>The field placeholder that appears when the field has no values.</td>
		</tr>
		<tr>
			<td><code>autocomplete</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to allow search functionality.</td>
		</tr>
		<tr>
			<td><code>options</code></td>
			<td><code>array</code>|<code>false</code></td>
			<td>[<br>'url',<br>'is_external',<br>'nofollow',<br>'custom_attributes'<br>]</td>
			<td>An array of URL options to show. By default it shows all the options. But you can select which URL elements to show. Setting the options to <code>false</code> we disable all the options.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>
				The field default values.
				<ul>
					<li><strong>$url</strong> (<code>string</code>) The URL.</li>
					<li><strong>$is_external</strong> (<code>bool</code>) Whether to open the url in the same tab or in a new one.</li>
					<li><strong>$nofollow</strong> (<code>bool</code>) Whether to add nofollow attribute.</li>
					<li><strong>$custom_attributes</strong> (<code>string</code>) Custom attributes string that come as a string of comma-delimited key|value pairs.</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

## Return Value

```
[
	'url' => 'https://your-link.com',
	'is_external' => true,
	'nofollow' => true,
	'custom_attributes' => '',
]
```

(_`array`_) An array containing the link data:

* **$url** (_`string`_) The URL.
* **$is_external** (_`bool`_) Whether to open the url in the same tab or in a new one.
* **$nofollow** (_`bool`_) Whether to add nofollow attribute.
* **$custom_attributes** (_`string`_) Custom attributes string that come as a string of comma-delimited `key|value` pairs.

## Usage

```php {14-28,36-38,40-42,48-50}
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
			'website_link',
			[
				'label' => esc_html__( 'Link', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::URL,
				'options' => [ 'url', 'is_external', 'nofollow' ],
				'default' => [
					'url' => '',
					'is_external' => true,
					'nofollow' => true,
					// 'custom_attributes' => '',
				],
				'label_block' => true,
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		if ( ! empty( $settings['website_link']['url'] ) ) {
			$this->add_link_attributes( 'website_link', $settings['website_link'] );
		}
		?>
		<a <?php $this->print_render_attribute_string( 'website_link' ); ?>>
			...
		</a>
		<?php
	}

	protected function content_template() {
		?>
		<a href="{{ settings.website_link.url }}">
			...
		</a>
		<?php
	}

}
```
