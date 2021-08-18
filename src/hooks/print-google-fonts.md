# Print Google Fonts

Elementor offers a special filter hook that allows developes to prevent loading of Google Fonts by Elementor. In other words, won't enqueue all the frontend Google fonts.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor/frontend/print_google_fonts`
* **Affects On:** Frontend

## Control Google Fonts Enqueue

To prevent Elementor loading of Google Fonts in the frontend:

```php
add_filter( 'elementor/frontend/print_google_fonts', '__return_false' );
```
