# Rendering Media

Elementor let’s you select an image using the media control defined in `\Elementor\Control_Media` class. There are several ways to render media files, we will cover them here.

## Simple Image Rendering

The simplest media rendering method is to print the image URL in a custom `<img>` tag. You can also use the [wp_get_attachment_image()](https://developer.wordpress.org/reference/functions/wp_get_attachment_image/) function generate the image markup.

```php {14-23,33,36,41}
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
			'image',
			[
				'label' => __( 'Choose Image', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		// Get image url
		echo '<img src="' . $settings['image']['url'] . '" alt="">';

		// Get image by id
		echo wp_get_attachment_image( $settings['image']['id'], 'thumbnail' );
	}

	protected function content_template() {
		?>
		<img src="{{{ settings.image.url }}}">
		<?php
	}

}
```

## Advance Image Rendering

The more advanced way to handle images is to combine the `\Elementor\Control_Media` with `\Elementor\Group_Control_Image_Size`.

```php {14-23,25-32,40,45-60}
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
			'image',
			[
				'label' => __( 'Choose Image', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Image_Size::get_type(),
			[
				'name' => 'image',
				'default' => 'large',
				'separator' => 'none',
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings );
	}

	protected function content_template() {
		?>
		<#
		var image = {
			id: settings.image.id,
			url: settings.image.url,
			size: settings.image_size,
			dimension: settings.image_custom_dimension,
			model: view.getEditModel()
		};

		var image_url = elementor.imagesManager.getImageUrl( image );

		if ( ! image_url ) {
			return;
		}
		#>
		<img src="{{{ image_url }}}" />
		<?php
	}

}
```
