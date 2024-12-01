# Widget Information

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor widget need to have a unique ID used in the code, and an addition basic information used in the Elementor editor.

## Widget Name/ID

To set a unique ID for the widget, use the `get_name()` method. This string is used in code and in the database. The name should include only lowercase letters and it should not contain spaces (use `_` instead).

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name(): string {
		return 'widget_name';
	}

}
```

## Widget Title

Widget title is the label used in the Elementor editor. The end user will see this text when interacting with different panels. The title should use internalization functions to make the string translatable to other languages.

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_title(): string {
		return esc_html__( 'My Widget Name', 'textdomain' );
	}

}
```

## Widget Icon

Each widget has not only a label but also an icon. This icons is displayed in different location in the Editor, like the elements panel and the navigator panel. It's not a required field, but very recommended.

Widgets can use any [Elementor icons](https://elementor.github.io/elementor-icons/) or [FontAwesome icons](https://fontawesome.com/), returning the icon CSS class. Custom icons can also be used.

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_icon(): string {
		return 'eicon-code';
	}

}
```
