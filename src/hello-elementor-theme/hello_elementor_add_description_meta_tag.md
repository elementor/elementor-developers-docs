# Description Meta Tag

<Badge type="tip" vertical="top" text="Hello Elementor Theme" /> <Badge type="warning" vertical="top" text="Basic" />

To improve SEO without using external plugins, the theme adds a [meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) that contains the page/post excerpt. Developers can remove this meta tag by using a simple hook.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `hello_elementor_add_description_meta_tag`

The hook adds HTML `<meta>` tag to the `<head>` on singular pages that have excerpts:

```html
<meta name="description" content="..." />
```

Search-engines, social-media and other external websites use the data in the `<title>` and the description `<meta>` tag.

However, if a website chooses to use an external SEO plugin, the page may have duplicate description meta tags. To avoid that, SEO plugins can remove the description meta tag added by the theme.

## Usage

To prevent the theme from displaying the `<meta>` tag with page description, use the following code:

```php
function remove_hello_elementor_description_meta_tag() {
	remove_action( 'wp_head', 'hello_elementor_add_description_meta_tag' );
}
add_action( 'after_setup_theme', 'remove_hello_elementor_description_meta_tag' );
```
