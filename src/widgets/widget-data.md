# Widget Data

Each widget require basic information like the widget id, label and icon.

## Data Methods

Widget data needs to be "returned" by the methods. Those methods are dead simple:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'widget_name';
	}

	public function get_title() {
		return __( 'My Widget Name', 'plugin-name' );
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

}
```

* **Widget Name** – The `get_name()` method returns the widget name that will be used in the code.

* **Widget Title** – The `get_title()` method returns the widget label that will be displayed to the user.

* **Widget Icon** – The `get_icon()` method is an optional but recommended method, it lets you set the widget icon. You can use any [Elementor Icons](https://elementor.github.io/elementor-icons/) or [FontAwesome Icons](https://fontawesome.com/), simply return the css class name.

* **Widget Help URL** – The `get_custom_help_url()` method is an optional method that sets a custom URL where the user can get more information about the widget below the controls.

* **Widget Categories** – The `get_categories()` method lets you set [the category of the widget](./widget-categories), return the category name as a string.
