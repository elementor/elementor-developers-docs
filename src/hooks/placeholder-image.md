# Placeholder Image

<img src="/assets/img/elementor-placeholder-image.png" alt="Elementor Placeholder Image" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

Elementor image widget and media based controls display a placeholder image until the user selects a specific image from the media library.

By default, Elementor uses the default image located in Elementor's plugin assets folder. But, if you would like to change the default image with a custom one, Elementor let's you do that.

## Placeholder Image Filter Hook

With the `elementor/utils/get_placeholder_image_src` filter hook developers can change the source of the default placeholder image.

You can set a placeholder image from an external URL:

```php
function custom_elementor_placeholder_image() {
	return 'https://developers.elementor.com/path/to/placeholder.png';
}
add_filter( 'elementor/utils/get_placeholder_image_src', 'custom_elementor_placeholder_image' );
```

Or set a placeholder image located in your plugin folder:

```php
function custom_elementor_placeholder_image() {
	return plugins_url( 'assets/images/placeholder.png', __FILE__ );
}
add_filter( 'elementor/utils/get_placeholder_image_src', 'custom_elementor_placeholder_image' );
```

**Note:** The default placeholder image used by Elementor located at: "`plugins/elementor/assets/images/placeholder.png`".
