# Frontend Content

Elementor has a hook that filters the content in the frontend. It applied on the final HTML content, the entire Elementor content in the page/post. Developers can change the HTML output before Elementor display it to the user.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `elementor/frontend/the_content`
* **Affects On:** Frontend

## Hook Arguments

| Argument  | Type       | Description                                                |
|-----------|------------|------------------------------------------------------------|
| `content` | _`string`_ | The entire Elementor HTML output of the current page/post. |

## Check whether to display the content

Membership plugins can use this filter hook to check if the user can see the page content.

```php
function restrict_content_check( $content ) {

	if ( ! membership_plugin_is_content_allowed() ) {
		$content = __( 'Forbidden', 'plugin-name' );
	}

	return $content;

}
add_action( 'elementor/frontend/the_content', 'restrict_content_check' );
```
