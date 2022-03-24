# Elementor Deprecation

Elementor is an evolving product. Over time, some code is removed or replaced. The deprecated code is announced over verious channels. The deprecation process is gradual, deprecated code is removed after at least 8 major versions.

## Deprecation Process

To avoide regression errors cause by an external addon developers still using deprecated code, the deprecated code is not immediately removed from the codebase. Deprecated code removed over a period covered by a number of released versions.

Developers are informed of the code change through several channels, including the [developers blog](https://developers.elementor.com/category/deprecations/), major versions release notes, and debug tools.

Elementor's deprecation process includes 3 steps:

<img :src="$withBase('/assets/img/elementor-deprecation-process.png')" alt="Elementor Deprecation Process">

### Soft Deprecation

This step lasts 4 major Elementor versions. Using deprecated code in this phase will shows a JS warnings in the browser console. In addition, if the `ELEMENTOR_DEBUG` constant is defined as `true`, the site log will have PHP notices/warnings/errors. This grace period won't break sites as both the deprecated code and the new code work as expected.

### Hard Deprecation

This step lasts additional 4 major Elementor versions. Using deprecated code in this phase will throw a PHP error. This grace period won't break sites as both the deprecated code and the new code work as expected.

### Deletion

After 8 major versions, the deprecated code is deleted from the codebase. At this point, using deprecated function/argument/hook/methods will breake sites as this code is no longer exist.

## Updating Deprecated Code

If we deprecated a method in Elementor 3.0.0, it will start throwing errors after Elementor 3.4.0, and will likely be deleted in Elementor 3.8.0.

### Deprecated Methods

A good example we often see is when addon developers create [widgets](./widgets/) using deprecated methods prefixed with `_`. The fix is simple enough:

```diff
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name() {}

	public function get_title() {}

	public function get_icon() {}

	public function get_categories() {}

-	protected function _register_controls() {}
+	protected function register_controls() {}

-	protected function _render() {}
+	protected function render() {}

-	protected function _content_template() {}
+	protected function content_template() {}

}
```

Please note that using those old methods will break sites as they are already deleted from the Elementor codebase.

### Deprecated Hooks

Another, more recent example, is the rename of the [managers](./managers/) registration hooks in Elementor 3.5. Where we tried to standardize the registration process with simpler and intuitive hook names.

```diff
function register_new_widgets( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/widget-1.php' );
	require_once( __DIR__ . '/widgets/widget-2.php' );

-	$widgets_manager->register_widget_type( new \Elementor_Widget_1() );
-	$widgets_manager->register_widget_type( new \Elementor_Widget_2() );
+	$widgets_manager->register( new \Elementor_Widget_1() );
+	$widgets_manager->register( new \Elementor_Widget_2() );

}
- add_action( 'elementor/widgets/widgets_registered', 'register_new_widgets' );
+ add_action( 'elementor/widgets/register', 'register_new_widgets' );
```

In this case, using the old hook name won't break site until Elementor 4.3.

## How Elementor Deprecats Code

Elementor 3.1 introduced the `Deprecation` PHP class to deal with the entire deprecation process described above.

Some of the methods Elementor uses to deprecate PHP code:

* `deprecated_function()` - Handles the deprecation process for functions and methods.
* `deprecated_argument()` - Handles the deprecation process for arguments.
* `deprecated_hook()` - Handles the deprecation process for hooks.
* `do_deprecated_action()` - Run deprecated actions through Elementor's deprecation process.
* `apply_deprecated_filter()` - Run deprecated filters through Elementor's deprecation process.

### Deprecation Examples

Deprecating `add_category()` in version 3.5.0 and replacing it with `register_category()`:

```php
function add_category( $category_name, $category_instance ) {
	\Elementor\Plugin::$instance->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function(
		'add_category()',
		'3.5.0',
		'register_category()'
	);

	register_category( $category_instance, $category_name );
}
```

Deprecating the `$category_name` argument in version 3.5.0 infavor of an internal retriaval:

```php
function register( $category_instance, $category_name = null ) {
	if ( $category_name ) {
		// TODO: Remove this in the future.
		\Elementor\Plugin::instance()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_argument(
			'$category_name',
			'3.5.0'
		);
	} else {
		// TODO: Leave this in the future.
		$category_name = $category_instance->get_id();
	}

	$this->categories[ $category_name ] = $category_instance;
}
```

Deprecating `elementor/old/action` action hook in version 3.5.0 and replacing it with `elementor/new/action`:

```php
\Elementor\Plugin::$instance->modules_manager->get_modules( 'dev-tools' )->deprecation->do_deprecated_action(
	'elementor/old/action',
	[ $args ],
	'3.5.0',
	'elementor/new/action'
);

do_action( 'elementor/old/action', $args );
```

Deprecating `elementor/old/filter` filter hook in version 3.5.0 and replacing it with `elementor/new/filter`:

```php
$value = '';

\Elementor\Plugin::$instance->modules_manager->get_modules( 'dev-tools' )->deprecation->apply_deprecated_filter(
	'elementor/old/filter',
	[ $value ],
	'3.5.0',
	'elementor/new/filter'
);

$value = apply_filters( 'elementor/new/filter', $value );
```
