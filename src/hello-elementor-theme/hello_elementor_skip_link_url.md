# Skip Link URL

<Badge type="tip" vertical="top" text="Hello Elementor Theme" /> <Badge type="warning" vertical="top" text="Basic" />

The theme has a "Skip to content" link at the top of the page, it's used by screen readers to quickly navigate to the main content area. Developers can modify the skip link URL using a filter hook in a child-theme.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `hello_elementor_skip_link_url`
* **Default Value:** `#content`

The hook controls the URL of the main content on the page. By default it links to `#content`, i.e. an element with a `content` ID.

## Usage

To modify the skip link URL, use the following hook in a child-theme `functions.php` file:

```php
function custom_hello_elementor_skip_link_url() {
	return '#main';
}
add_filter( 'hello_elementor_skip_link_url', 'custom_hello_elementor_skip_link_url' );
```

For conditional URLs based on [WordPress Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/) use the following hook:

```php
function custom_hello_elementor_skip_link_url() {
	if ( is_404() ) {
		return '#404-content';
	} else if ( is_page() ) {
		return '#page-content';
	} else if ( is_post() ) {
		return '#post-content';
	} else {
		return '#main-content';
	} 
}
add_filter( 'hello_elementor_skip_link_url', 'custom_hello_elementor_skip_link_url' );
```
