# Rendering Repeaters

One advance use-cases is to render multiple elements from the repeater control. The user sets multiple fields in the repeater control and we need to print them on screen.

## Render Multiple Fields

```php {14-46,55-67,73-89}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'list',
			[
				'label' => __( 'List', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => [
					[
						'name' => 'text',
						'label' => __( 'Text', 'plugin-name' ),
						'type' => \Elementor\Controls_Manager::TEXT,
						'placeholder' => __( 'List Item', 'plugin-name' ),
						'default' => __( 'List Item', 'plugin-name' ),
					],
					[
						'name' => 'link',
						'label' => __( 'Link', 'plugin-name' ),
						'type' => \Elementor\Controls_Manager::URL,
						'placeholder' => __( 'https://your-link.com', 'plugin-name' ),
					],
				],
				'default' => [
					[
						'text' => __( 'List Item #1', 'plugin-name' ),
						'link' => 'https://elementor.com/',
					],
					[
						'text' => __( 'List Item #2', 'plugin-name' ),
						'link' => 'https://elementor.com/',
					],
				],
				'title_field' => '{{{ text }}}',
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		?>
		<ul>
		<?php foreach ( $settings['list'] as $index => $item ) : ?>
			<li>
				<?php
				if ( ! $item['link']['url'] ) {
					echo $item['text'];
				} else {
					?><a href="<?php echo esc_url( $item['link']['url'] ); ?>"><?php echo $item['text']; ?></a><?php
				}
				?>
			</li>
		<?php endforeach; ?>
		</ul>
		<?php
	}

	protected function content_template() {
		?>
		<ul>
		<#
		if ( settings.list ) {
			_.each( settings.list, function( item, index ) {
			#>
			<li>
				<# if ( item.link && item.link.url ) { #>
					<a href="{{{ item.link.url }}}">{{{ item.text }}}</a>
				<# } else { #>
					{{{ item.text }}}
				<# } #>
			</li>
			<#
			} );
		}
		#>
		</ul>
		<?php
	}

}
```
