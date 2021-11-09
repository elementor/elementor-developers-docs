# Widget Data

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Every widget requires basic information such as the widget ID, label and icon.

## Data Methods

Widget data needs to be "returned" by certain methods. Those methods are simple:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'widget_name';
	}

	public function get_title() {
		return esc_html__( 'My Widget Name', 'plugin-name' );
	}

	public function get_icon() {
		return 'eicon-code';
	}

	public function get_custom_help_url() {
		return 'https://go.elementor.com/widget-name';
	}

	public function get_categories() {
		return [ 'general' ];
	}

	public function get_keywords() {
		return [ 'keyword', 'keyword' ];
	}

}
```

* **Widget Name** – The `get_name()` method returns the widget name as it will be used in the code.

* **Widget Title** – The `get_title()` method returns the widget label as it will be displayed to the user.

* **Widget Icon** – The `get_icon()` method is an optional, but recommended, method. It lets you set the widget icon. You can use any [Elementor icons](https://elementor.github.io/elementor-icons/) or [FontAwesome icons](https://fontawesome.com/), to simply return the CSS class name.

* **Widget Help URL** – The `get_custom_help_url()` method is an optional method that sets a custom URL, where the user can get more information about the widget, below the controls.

* **Widget Categories** – The `get_categories()` method lets you set [the category of the widget](/widgets/widget-categories).

* **Widget Keywords** – The `get_keywords()` method lets you set widget keywords and is used to filter the widget list.
