# Dynamic Tags Data

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Each dynamic tag requires basic information like the unique ID, title, group and category.

## Data Methods

Dynamic tags data is "returned" by these methods:

```php
class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function get_name(): string {
		return 'tag-name';
	}

	public function get_title(): string {
		return esc_html__( 'Dynamic Tag Name', 'textdomain' );
	}

	public function get_group(): array {
		return [ 'group-name' ];
	}

	public function get_categories(): array {
		return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
	}

}
```

* **Dynamic Tag Name** - The `get_name()` method returns a unique ID that will be used in the code.

* **Dynamic Tag Title** – The `get_title()` method returns the tag label displayed to the user.

* **Dynamic Tag Group** – The `get_group()` – method returns an array of groups the tag will appear under.

* **Dynamic Tag Categories** – The `get_categories()` method returns an array of control categories the tag belongs to.
