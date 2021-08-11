# URL Control

Elementor URL control displays a URL input field with the ability to set the target of the link to _blank to open in a new tab and nofollow attribute.

The control is defined in `Control_URL` class which extends `Control_Base_Multiple` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::URL` constant.

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
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code>, <code>after</code> and <code>none</code>. <code>default</code> will position the separator depending on the control type. <code>before</code> / <code>after</code> will position the separator before/after the control. <code>none</code> will hide the separator.</td>
		</tr>
		<tr>
			<td><code>placeholder</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The field placeholder that appears when the field has no values.</td>
		</tr>
		<tr>
			<td><code>show_external</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to show ‘Is External’ button.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>
				The field default values.
				<p></p>
				<ul>
					<li><strong>$url</strong> (<code>string</code>) The URL.</li>
					<li><strong>$is_external</strong> (<code>bool</code>) Whether to open the url in the same tab or in a new one.</li>
					<li><strong>$nofollow</strong> (<code>bool</code>) Whether to add nofollow attribute.</li>
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
]
```

(_`array`_) An array containing the link data:

* **$url** (_`string`_) The URL.
* **$is_external** (_`bool`_) Whether to open the url in the same tab or in a new one.
* **$nofollow** (_`bool`_) Whether to add nofollow attribute.

## Usage

```php {14-27,35-37,42-46}
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
			'website_link',
			[
				'label' => __( 'Link', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::URL,
				'placeholder' => __( 'https://your-link.com', 'plugin-name' ),
				'show_external' => true,
				'default' => [
					'url' => '',
					'is_external' => true,
					'nofollow' => true,
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$target = $settings['website_link']['is_external'] ? ' target="_blank"' : '';
		$nofollow = $settings['website_link']['nofollow'] ? ' rel="nofollow"' : '';
		echo '<a href="' . $settings['website_link']['url'] . '"' . $target . $nofollow . '> ... </a>';
	}

	protected function content_template() {
		?>
		<#
		var target = settings.website_link.is_external ? ' target="_blank"' : '';
		var nofollow = settings.website_link.nofollow ? ' rel="nofollow"' : '';
		#>
		<a href="{{ settings.website_link.url }}"{{ target }}{{ nofollow }}> ... </a>
		<?php
	}

}
```
