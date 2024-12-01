# Rendering Text

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

The most common [widget rendering](./widget-rendering/) use case is to print the value of a simple text control. These controls are usually found in the content tab.

## Printing Text Values

Let's say you have a widget with a single control in which the users can set a "title". To print the title entered by the user, we simply echo the control value:

```php {14-21,28-29,33-35}
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
			'title',
			[
				'label' => esc_html__( 'Title', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your title', 'textdomain' ),
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['title'] ) ) {
			return;
		}
		?>
		<h3>
			<?php echo $settings['title']; ?>
		</h3>
		<?php
	}

	protected function content_template(): void {
		?>
		<#
		if ( '' === settings.title ) {
			return;
		}
		#>
		<h3>
			{{{ settings.title }}}
		</h3>
		<?php
	}

}
```
