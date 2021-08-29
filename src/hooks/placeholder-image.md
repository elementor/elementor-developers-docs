# Placeholder Image

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img src="/assets/img/elementor-placeholder-image.png" alt="Elementor Placeholder Image" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

The Elementor image widget and media-based controls display a placeholder image, unless the user selects a specific image from the media library.

By default, Elementor uses the default image located in Elementor's plugin assets folder. However, you can replace this default image with a custom one.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor/utils/get_placeholder_image_src`
* **Affects:** Elementor Editor

## Placeholder Image Filter Hook

With the `elementor/utils/get_placeholder_image_src` filter hook, developers can change the source of the default placeholder image.

You can set a placeholder image from an external URL:

```php
/**
 * Change the default Elementor placeholder image.
 *
 * Use an image located in an external URL.
 *
 * @since 1.0.0
 */
function custom_elementor_placeholder_image() {
	return 'https://developers.elementor.com/path/to/placeholder.png';
}
add_filter( 'elementor/utils/get_placeholder_image_src', 'custom_elementor_placeholder_image' );
```

Or set a placeholder image located in your plugin folder:

```php
/**
 * Change the default Elementor placeholder image.
 *
 * Use an image located in the plugin assets files.
 *
 * @since 1.0.0
 */
function custom_elementor_placeholder_image() {
	return plugins_url( 'assets/images/placeholder.png', __FILE__ );
}
add_filter( 'elementor/utils/get_placeholder_image_src', 'custom_elementor_placeholder_image' );
```

**Note:** The default placeholder image used by Elementor is located in: "`plugins/elementor/assets/images/placeholder.png`".
