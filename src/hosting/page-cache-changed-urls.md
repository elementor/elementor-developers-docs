# Cache Changed URLs

<Badge type="tip" vertical="top" text="Elementor Hosting" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor hosting offers the option to add custom co-changing URLs to the page cache whenever a specific content type (post, comment, WooCommerce product etc.) is updated. This can be useful for keeping cache up-to-date for pages that depend on the updated content.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor/hosting/page_cache/{$content_type}_changed_urls`
* **Affects:** Elementor Hosting

The dynamic portion of the hook name, `$content_type`, refers to the content type, e.g `post`, `comment`, `woocommerce_product` etc.

## Hook Arguments

| Argument     | Type      | Description       |
|--------------|-----------|-------------------|
| `urls`       | _`array`_ | An array of URLs. |
| `content_id` | _`int`_   | Content ID.       |

## Examples

Clear cache for dynamic content updates, using the following code:

```php
/**
 * @param array
 * @param int
 * @return array
 */
function custom_clear_cache_on_woccomerce_update( $urls, $product_id ) {
	if ( ( ! is_array( $urls ) ) || empty( $urls ) ) {
		$urls = [];
	}

	$url[] = site_url('/my-path');

	return $urls;
}
add_filter( 'elementor/hosting/page_cache/woocommerce_product_changed_urls', 'custom_clear_cache_on_woccomerce_update', 10, 2 );
```
