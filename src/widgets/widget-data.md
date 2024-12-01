# Widget Data

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Every widget requires basic information such as the widget ID, label and icon. In addition, a widget can have optional data providing extra information like an external link describing how to use the widget or promotion to promote premium version of the widget.

## Data Methods

Widget data needs to be "returned" by certain methods. Those methods are simple:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name(): string {
		return 'widget_name';
	}

	public function get_title(): string {
		return esc_html__( 'My Widget Name', 'textdomain' );
	}

	public function get_icon(): string {
		return 'eicon-code';
	}

	public function get_categories(): array {
		return [ 'general' ];
	}

	public function get_keywords(): array {
		return [ 'keyword', 'keyword' ];
	}

	public function get_custom_help_url(): string {
		return 'https://example.com/widget-name';
	}

	protected function get_upsale_data(): array {
		return [];
	}

}
```

* **Widget Name** – The `get_name()` method returns the widget name as it will be used in the code.

* **Widget Title** – The `get_title()` method returns the widget label as it will be displayed to the user.

* **Widget Icon** – The `get_icon()` method is an optional, but recommended, method. It lets you set the widget icon. You can use any [Elementor icons](https://elementor.github.io/elementor-icons/) or [FontAwesome icons](https://fontawesome.com/), to simply return the CSS class name.

* **Widget Categories** – The `get_categories()` method lets you set [the category of the widget](./widget-categories/).

* **Widget Keywords** – The `get_keywords()` method lets you set widget keywords and is used to filter the widget list.

* **Widget Help URL** – The `get_custom_help_url()` method is an optional method that sets a custom URL, where the user can get more information about the widget, below the controls.

* **Widget Promotion** – The `get_upsale_data()` method is an optional method that is used to [display promotions](./widget-promotions/) at the bottom of the widget panel.
