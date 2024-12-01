# Media Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/controls/control-media.png')" alt="Media Control" style="float: right;">

Elementor Media control displays a media chooser section based on the WordPress media library. It allows the user to select an image from the media library.

The control is defined in `Control_Media` class which extends `Control_Base_Multiple` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::MEDIA` constant.

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
			<td>media</td>
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
			<td><code>media_types</code></td>
			<td><code>array</code></td>
			<td>['image']</td>
			<td>Supported media types. Available values are <code>image</code>, <code>video</code>, <code>svg</code>, <code>application/pdf</code> etc.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>array</code></td>
			<td></td>
			<td>
				Default media values.
				<ul>
					<li><strong>$id</strong> (<code>int</code>) Media id.</li>
					<li><strong>$url</strong> (<code>string</code>) Media url.</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

## Return Value

```
[
	'id' => '',
	'url' => '',
]
```

(_`array`_) An array containing image data:

* **$id** (_`int`_) Media id.
* **$url** (_`string`_) Media url.

## Usage

Add an image:

```php {14-23,36-37,39-40,42-47,52-69}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'image',
			[
				'label' => esc_html__( 'Choose Image', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['image']['url'] ) ) {
			return;
		}

		// Get image URL
		echo '<img src="' . $settings['image']['url'] . '">';

		// Get image 'thumbnail' by ID
		echo wp_get_attachment_image( $settings['image']['id'], 'thumbnail' );

		// Get image HTML
		$this->add_render_attribute( 'image', 'src', $settings['image']['url'] );
		$this->add_render_attribute( 'image', 'alt', \Elementor\Control_Media::get_image_alt( $settings['image'] ) );
		$this->add_render_attribute( 'image', 'title', \Elementor\Control_Media::get_image_title( $settings['image'] ) );
		$this->add_render_attribute( 'image', 'class', 'my-custom-class' );
		echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'image' );
	}

	protected function content_template(): void {
		?>
		<#
		if ( '' === settings.image.url ) {
			return;
		}

		const image = {
			id: settings.image.id,
			url: settings.image.url,
			size: settings.image_size,
			dimension: settings.image_custom_dimension,
			model: view.getEditModel()
		};

		const image_url = elementor.imagesManager.getImageUrl( image );

		if ( '' === image_url ) {
			return;
		}
		#>
		<img src="{{ image_url }}">
		<?php
	}

}
```

Add a video media type to display a self hosted video:

```php
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'video',
			[
				'label' => esc_html__( 'Choose Video File', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'media_types' => [ 'video' ],
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		$video_url = $settings['video']['url'];

		if ( empty( $video_url ) ) {
			return;
		}
		?>
		<video src="<?php echo esc_attr( $video_url ); ?>" class="elementor-video"></video>
		<?php
	}

	protected function content_template(): void {
		?>
		<#
		const video_url = settings.video.url;

		if ( '' === video_url ) {
			return;
		}
		#>
		<video src="{{ video_url }}" class="elementor-video"></video>
		<?php
	}

}
```

Add a PDF file:

```php
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'pdf',
			[
				'label' => esc_html__( 'Choose PDF', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'media_types' => [ 'application/pdf' ],
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		$pdf_url = $settings['pdf']['url'];

		if ( ! empty( $pdf_url ) ) {
			return;
		}
		?>
		<a download href="<?php echo esc_attr( $pdf_url ); ?>">
			<?php echo esc_html__( 'Download PDF', 'textdomain' ); ?>
		</a>
		<?php
	}

	protected function content_template(): void {
		?>
		<#
		const pdf_url = settings.pdf.url;

		if ( '' === pdf_url ) {
			return;
		}
		#>
		<a download src="{{ pdf_url }}">
			<?php echo esc_html__( 'Download PDF', 'textdomain' ); ?>
		</a>
		<?php
	}

}
```
