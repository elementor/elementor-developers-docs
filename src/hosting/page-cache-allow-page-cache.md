# Dynamic Page Cache

<Badge type="tip" vertical="top" text="Elementor Hosting" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor hosting offers the option to control whether a page should be cached or not, depending on its dynamic nature. By using this hook, you can prevent caching of certain pages that require real-time or dynamic content updates, ensuring that the visitors always see the latest content on those pages.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor/hosting/page_cache/allow_page_cache`
* **Affects:** Elementor Hosting

## Hook Arguments

| Argument | Type     | Description                  |
|----------|----------|------------------------------|
| `allow`  | _`bool`_ | Whether to allow page cache. |

## Examples

Clear cache for dynamic content updates using the following code:

```php
/**
 * @param bool Whether to allow page cache.
 * @return bool
 */
function custom_page_cache( $allow ) {
	if ( ! $allow ) {
		return $allow;
	}

	return is_my_special_page();
}
add_filter( 'elementor/hosting/page_cache/allow_page_cache', 'custom_page_cache', 20 );
```
