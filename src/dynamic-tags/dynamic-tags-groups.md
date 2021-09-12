# Dynamic Tags Groups

<img src="/assets/img/dynamic-tags-list.png" alt="Dynamic Tags List" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

To simplify navigation, all tags are arranged into groups. This allows users to quickly scan the list and scroll to the group that suits them.

## Available Groups

Elementor Pro adds the following groups:

* **Post** - Post related dynamic data.
* **Archive** - Theme archive related dynamic data.
* **Site** - Site related dynamic data.
* **Media** - Dynamic data based on media files.
* **Actions** - Custom dynamic data.
* **Author** - Post author dynamic data.
* **Comments** - Post comments dynamic data.

If you would like to use the groups added by Elementor Pro, your addons must [set Elementor Pro as a dependency](/getting-started/plugin-header).

## Applying Groups

When creating new dynamic tags, you can set the tag group by returning group names with the `get_group()` method:

```php
Class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function get_group() {
		return [ 'actions' ];
	}

}
```

## Creating New Groups

Elementor Pro’s dynamic tags manager lets external developers create custom groups using the `elementor/dynamic_tags/register_tags` action hook:

```php
/**
 * Register new dynamic tag group
 *
 * @since 1.0.0
 * @return void
 */
function register_new_dynamic_tag_group( $dynamic_tags ) {

	\Elementor\Plugin::instance()->dynamic_tags->register_group(
		'group-name',
		[
			'title' => esc_html__( 'Group Label', 'plugin-name' )
		]
	);

}
add_action( 'elementor/dynamic_tags/register_tags', 'register_new_dynamic_tag_group' );
```
