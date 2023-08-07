# Enable Skip Link

<Badge type="tip" vertical="top" text="Hello Elementor Theme" /> <Badge type="warning" vertical="top" text="Basic" />

The theme has a "Skip to content" link at the top of the page, it's used by screen readers to quickly navigate to the main content area. Developers can disable the skip link using a filter hook in a child-theme.

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
