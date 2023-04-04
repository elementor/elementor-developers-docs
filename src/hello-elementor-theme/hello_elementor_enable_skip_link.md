# Enable Skip Link

The theme has a "Skip to content" link at top of the page, it's used by screen readers to quickly navigate to the main content. Developers can disable this link using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_enable_skip_link`
* **Default Value:** `true`

The hook controls whether the theme should enable the "Skip to content" link. By default it's set to `true`, however developers can disable it.

## Usage

To prevent the theme from displaying the "Skip to content" link for screen readers, use the following hook in a child-theme `functions.php` file:

```php
add_filter( 'hello_elementor_enable_skip_link', '__return_false' );
```
