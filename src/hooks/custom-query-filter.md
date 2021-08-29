# Custom Query Filter

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Both **posts widgets** and **portfolio widgets** come with a robust query control that lets you select specific posts to show in the widget. But sometimes, you need more control over the query. For those situations, there is the custom query filter, which exposes the [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) object, and allows you to customize the query in any way you want.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `elementor/query/{$query_id}`
* **Affects:** Query

## Hook Arguments

| Argument | Type                       | Description                   |
|----------|----------------------------|-------------------------------|
| `query`  | _`\WP_Query`_              | The WordPress query instance. |
| `widget` | _`\Elementor\Widget_Base`_ | The widget instance.          |

## Setting Up a Custom Filter

<img src="/assets/img/elementor-posts-query-id.png" alt="Elementor Posts Query ID" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

In a posts or portfolio widget, give your query an ID, making sure it is unique, unless you want the filter to run on multiple posts or portfolio widgets.

In the examples below, the query ID is set to `my_custom_filter`, so when Elementor renders the widget, it will create a custom filter based on the query ID: `elementor/query/my_custom_filter`.

## Using the Custom Filter

After you have set up the custom query filter, you can use it to modify the query in the same way that the WordPress native [pre_get_posts](https://developer.wordpress.org/reference/hooks/pre_get_posts/) hook lets you modify a query. Using the custom query filter is just like any other WordPress native action hook:

```php
/**
 * Update the posts widget or portfolio widget query.
 *
 * @since 1.0.0
 * @param \WP_Query $query The WordPress query instance.
 */
function custom_query_callback( $query ) {
	// Modify the posts query here
}
add_action( 'elementor/query/{$query_id}', 'custom_query_callback' );
```

## Examples

### Multiple Post Types in a Posts Widget

Show multiple post types in a posts widget using the following code snippet:

```php
/**
 * Update the query to use specific post types.
 *
 * @since 1.0.0
 * @param \WP_Query $query The WordPress query instance.
 */
function my_query_by_post_types( $query ) {
	$query->set( 'post_type', [ 'custom-post-type1', 'custom-post-type2' ] );
}
add_action( 'elementor/query/{$query_id}', 'my_query_by_post_types' );
```

### Filter Posts by the Posts' Metadata in a Portfolio Widget

Use the code below to show posts with a metadata key filter in a portfolio widget:

```php
/**
 * Update the query by specific post meta.
 *
 * @since 1.0.0
 * @param \WP_Query $query The WordPress query instance.
 */
function my_query_by_post_meta( $query ) {

	// Get current meta Query
	$meta_query = $query->get( 'meta_query' );

	// If there is no meta query when this filter runs, it should be initialized as an empty array.
	if ( ! $meta_query ) {
		$meta_query = [];
	}

	// Append our meta query
	$meta_query[] = [
		'key' => 'project_type',
		'value' => [ 'design', 'development' ],
		'compare' => 'in',
	];

	$query->set( 'meta_query', $meta_query );

}
add_action( 'elementor/query/{$query_id}', 'my_query_by_post_meta' );
```

### Most Popular Post by Comment Count in a Posts Widget

Use the following to show posts ordered by comment count in a posts widget:

```php
/**
 * Order the posts in the query by comment count.
 *
 * @since 1.0.0
 * @param \WP_Query $query The WordPress query instance.
 */
function my_query_by_different_order( $query ) {
	$query->set( 'orderby', 'comment_count' );
}
add_action( 'elementor/query/{$query_id}', 'my_query_by_different_order' );
```

### Show Posts with Multiple Statuses in a Posts Widget

Use the following to show posts by a specific post statuses.

NOTE: Using this snippet may result in displaying private data. Please use with caution.

```php
/**
 * Update the query to use specific post statuses.
 *
 * @since 1.0.0
 * @param \WP_Query $query The WordPress query instance.
 */
function my_query_by_post_status( $query ) {
	$query->set( 'post_status', [ 'future', 'draft'] );
}
add_action( 'elementor/query/{$query_id}', 'my_query_by_post_status' );
```

## Notes

You may need to refresh the [editor](/editor/) to see the effect of the filter.
