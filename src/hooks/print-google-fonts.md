# Print Google Fonts

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor offers a special filter hook that lets developers prevent Google fonts from loading. In other words, not all frontend Google fonts will be enqueued.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor/frontend/print_google_fonts`
* **Affects:** Frontend

## Control Google Fonts Enqueue

To prevent Elementor from loading Google fonts in the frontend:

```php
/**
 * Prevent Elementor from loading Google Fonts in the frontend.
 *
 * @since 1.0.0
 */
add_filter( 'elementor/frontend/print_google_fonts', '__return_false' );
```
