# Rendering Repeaters

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

One advanced use case is to render multiple elements using the repeater control. Here, users set multiple fields in the repeater control and we need to print them on screen.

## Render Multiple Fields

Use the following to render multiple fields:

```php {14-46,55-67,73-89}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'list',
			[
				'label' => esc_html__( 'List', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => [
					[
						'name' => 'text',
						'label' => esc_html__( 'Text', 'textdomain' ),
						'type' => \Elementor\Controls_Manager::TEXT,
						'placeholder' => esc_html__( 'List Item', 'textdomain' ),
						'default' => esc_html__( 'List Item', 'textdomain' ),
					],
					[
						'name' => 'link',
						'label' => esc_html__( 'Link', 'textdomain' ),
						'type' => \Elementor\Controls_Manager::URL,
						'placeholder' => esc_html__( 'https://your-link.com', 'textdomain' ),
					],
				],
				'default' => [
					[
						'text' => esc_html__( 'List Item #1', 'textdomain' ),
						'link' => 'https://elementor.com/',
					],
					[
						'text' => esc_html__( 'List Item #2', 'textdomain' ),
						'link' => 'https://elementor.com/',
					],
				],
				'title_field' => '{{{ text }}}',
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( ! $settings['list'] ) {
			return;
		}
		?>
		<ul>
		<?php foreach ( $settings['list'] as $index => $item ) : ?>
			<li>
			<?php
			if ( $item['link']['url'] ) {
				?><a href="<?php echo esc_url( $item['link']['url'] ); ?>"><?php echo $item['text']; ?></a><?php
			} else {
				echo $item['text'];
			}
			?>
			</li>
		<?php endforeach; ?>
		</ul>
		<?php
	}

	protected function content_template(): void {
		?>
		<#
		if ( ! settings.list.length ) {
			return;
		}
		#>
		<ul>
		<# _.each( settings.list, function( item, index ) { #>
			<li>
			<# if ( item.link && item.link.url ) { #>
				<a href="{{{ item.link.url }}}">{{{ item.text }}}</a>
			<# } else { #>
				{{{ item.text }}}
			<# } #>
			</li>
		<# } ); #>
		</ul>
		<?php
	}

}
```
