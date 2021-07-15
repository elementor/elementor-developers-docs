# Dynamic Tags Groups

<img src="/assets/img/dynamic-tags-list.png" alt="Dynamic Tags List" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

To simplify the navigation, all tags grouped together into groups. It allows the user to quickly scan the list and scroll to the group that suits him.

## Available Groups

Elementor has no groups but Elementor Pro adds the following groups:

* **Post** - Post related dynamic data.
* **Archive** - Dynamic data based on theme archive.
* **Site** - Site related dynamic data.
* **Media** - Dynamic data based on media files.
* **Actions** - Custom dynamic data.
* **Author** - Post author dynamic data.
* **Comments** - Post comments data.

If you would like to use the groups added by Elementor Pro, it will require your addon to [set Elementor Pro as a dependency](/docs/plugin-header).

## Applying Groups

When creating new dynamic tags, you can set the tag group by returning the group name in the `get_group()` method:

```php
Class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function get_group() {
		return 'actions';
	}

}
```

## Creating New Groups

Elementor’s dynamic tag manager allows external developers to create custom groups using the `elementor/dynamic_tags/register_tags` action hook:

```php
/**
 * Register new dynamic tag group
 *
 * @since 1.0.0
 * @return void
 */
function register_new_dynamic_tag_group( $dynamic_tags ) {

	\Elementor\Plugin::$instance->dynamic_tags->register_group(
		'group-name',
		[
			'title' => __( 'Group Label', 'plugin-name' )
		]
	);

}
add_action( 'elementor/dynamic_tags/register_tags', 'register_new_dynamic_tag_group' );
```
