# Save Editor Data

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor has a hook that lets developers run code after the user has saved data in the editor.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `elementor/editor/after_save`
* **Affects:** Editor

## Hook Arguments

| Argument      | Type        | Description                   |
|---------------|-------------|-------------------------------|
| `post_id`     | _`integer`_ | The post ID.                  |
| `editor_data` | _`array`_   | A list of Elementor elements. |

## Examples

A good example of using this hook is when you want to log user activities. Each time the user saves Elementor data, you can log this activity.

```php
/**
 * Log user activity when the user saves Elementor data.
 *
 * @since 1.0.0
 * @param int   $post_id     The ID of the post.
 * @param array $editor_data The editor data.
 */
function log_saved_elementor_data( $post_id, $editor_data ) {

	// Interact with your activity log plugin
	insert_activity_log_data(
		[
			'action' => 'saved',
			'object_type' => 'Elementor Data',
			'object_id' => $post_id,
			'object_name' => get_the_title( $post_id ),
		]
	);

}
add_action( 'elementor/editor/after_save', 'log_saved_elementor_data' );
```

Another example is when you want to clear the cache each time the user updates a post:

```php
/**
 * Clear old cache when the user saves new Elementor data.
 *
 * @since 1.0.0
 * @param int   $post_id     The ID of the post.
 * @param array $editor_data The editor data.
 */
function clear_cache_when_updating_elementor( $post_id, $data ) {

	if ( get_post_status( $post_id ) != 'publish' ) {
		return;
	}

	// Interact with your caching plugin
	clear_old_cache_data_for_your_post( $post_id );

}
add_action( 'elementor/editor/after_save', 'clear_cache_when_updating_elementor' );
```
