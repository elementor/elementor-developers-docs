# Dynamic Tags Groups

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

<img :src="$withBase('/assets/img/dynamic-tags-list.png')" alt="Dynamic Tags List" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

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

If you would like to use the groups added by Elementor Pro, your addons must [make sure Elementor Pro was loaded](./../addons/compatibility/).

## Applying Groups

When creating new dynamic tags, you can set the tag group by returning group names with the `get_group()` method:

```php
class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

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
 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags_manager Elementor dynamic tags manager.
 * @return void
 */
function register_new_dynamic_tag_group( $dynamic_tags_manager ) {

	$dynamic_tags_manager->register_group(
		'group-name',
		[
			'title' => esc_html__( 'Group Label', 'plugin-name' )
		]
	);

}
add_action( 'elementor/dynamic_tags/register', 'register_new_dynamic_tag_group' );
```
