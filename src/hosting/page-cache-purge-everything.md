# Purge Everything

<Badge type="tip" vertical="top" text="Elementor Hosting" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor hosting offers the option to purge the entire site cache, clearing all the CDN cache for the whole domain. Please note that it might take some time for this to take effect.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `elementor/hosting/page_cache/purge_everything`
* **Affects:** Elementor Hosting

## Hook Arguments

None.

## Examples

To trigger the purge use the following code:

```php
/**
 * Purge all the cache.
 */
do_action( 'elementor/hosting/page_cache/purge_everything' );
```
