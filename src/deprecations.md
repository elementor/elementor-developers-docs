# Elementor Deprecation

Elementor is an evolving product. Over time, some code is removed or replaced. The deprecated code is announced over verious channels. The deprecation process is gradual, deprecated code is removed after at least 8 major versions.

## Deprecation Process

To avoide regression errors cause by an external addon developers still using deprecated code, the deprecated code is not immediately removed from the codebase. Deprecated code removed over a period covered by a number of released versions.

Developers are informed of the code change through several channels, including the [developers blog](https://developers.elementor.com/category/deprecations/), major versions release notes, and debug tools.

Elementor's deprecation process includes 3 steps:

* **Soft Deprecation**
* **Hard Deprecation**
* **Deletion**

### Soft Deprecation

This step lasts 4 major Elementor versions. Using deprecated code in this phase will shows a JS warnings in the browser console. In addition, if the `ELEMENTOR_DEBUG` constant is defined as `true`, the site log will have PHP notices/warnings/errors. This grace period won't break sites as both the deprecated code and the new code work as expected.

### Hard Deprecation

This step lasts additional 4 major Elementor versions. Using deprecated code in this phase will throw a PHP error. This grace period won't break sites as both the deprecated code and the new code work as expected.

### Deletion

After 8 major versions, the deprecated code is deleted from the codebase. At this point, using deprecated function/argument/hook/methods will breake sites as this code is no longer exist.

## Deprecation Example

If we deprecated a method in Elementor 3.0.0, it will start throwing errors after Elementor 3.4.0, and will likely be deleted in Elementor 3.8.0.

### Widgets

A good example we still see is when addon developers create [widgets](./widgets/) using depreated methods prefixed with `_`.


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

Using the old code will break sites as the old methods already delete from the Elementor codebase.

### Managers

Another, more recent example, is the rename of the [managers](./managers/) registration hooks in Elementor 3.5. Where we tried to standardize the registration process with simpler and intuitive hook names.

Using the old hook name won't break site untill Elementor 4.3.
