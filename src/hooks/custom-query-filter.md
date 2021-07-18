# Custom Query Filter

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Both **Posts Widgets** and **Portfolio Widgets** come with a feature-packed query control that allows you to select specific posts to show in the widget. But sometimes you need more control over the query and for that, we added a Custom Query filter to expose the [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) object and allow you to customize the query in any way you want.

## Setting Up a Custom Filter

<img src="/assets/img/query-id.png" alt="Elementor Controls" style="float: right; width: 300px;">

In Posts widget or Portfolio widget, give your query an ID, make sure it is unique unless you want the filter to run on multiple posts widget or portfolio widgets.

In this example the query ID is set to `my_custom_filter`, so when Elementor render’s the widget it will create a custom filter based on the query ID: `elementor/query/my_custom_filter`.

## Using the Custom Filter

After you have set up the Custom Query Filter you can use it to modify the query in the same way WordPress native [pre_get_posts](https://developer.wordpress.org/reference/hooks/pre_get_posts/) hook lets you modify the Query. Using the Custom Query filter is just like any other WordPress native action hook:

```php
// Posts Widget or Portfolio Widget
add_action( 'elementor/query/{$query_id}', function( $query ) {
	// Modify the posts query here
} );
```

## Examples

### Multiple Post Types in Posts Widget

Showing multiple post types in Posts Widget use the following code snippet:

```php
add_action( 'elementor/query/{$query_id}', function( $query ) {
	// Here we set the query to fetch posts with
	// post type of 'custom-post-type1' and 'custom-post-type2'
	$query->set( 'post_type', [ 'custom-post-type1', 'custom-post-type2' ] );
} );
```

### Filter Posts by Post Meta in Portfolio Widget

Showing post with meta key filter in Portfolio Widget

```php
add_action( 'elementor/query/{$query_id}', function( $query ) {
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
} );
```

### Most Popular Post by Comment count in Posts Widget

Showing posts ordered by comment count in Posts Widget

```php
add_action( 'elementor/query/{$query_id}', function( $query ) {
	// Here we set the query to fetch posts with
	// ordered by comments count
	$query->set( 'orderby', 'comment_count' );
} );
```

### Show Posts of Multiple statuses in Posts Widget

Showing posts ordered by comment count in Posts Widget.

NOTE: Using this snippet may result in displaying private data. Please use with caution.

```php
add_action( 'elementor/query/{$query_id}', function( $query ) {
	// Here we set the query to fetch posts with post status 'future' and 'draft'.
	// Refer to WP_Query documentation in WP codex for values list.
	$query->set( 'post_status', [ 'future', 'draft'] );
} );
```

## Final Notes

The action hook provides two parameters:
  * `$query` – The WP_Query object.
  * `$widget` – The Current widget object.

You may need to refresh the [Editor](/editor/) to see the effect of the filter.
