# Widget Categories

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor **Widget Categories** are used to organize the widgets into groups. When Elementor is initialized, it registers several default categories. The categories are displayed in the widgets panel, only if they have widgets assigned to them.

## Using Widget Categories

We use widget categories while registering new Elementor widgets. By extending the `\Elementor\Widget_Base` class, we are inheriting the `\Elementor\Widget_Base::get_categories()` method that returns the general category by default. To assign the widget to a different category, we need to override the method and return our new category the following way:

```php {3-5}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_categories() {
		return [ 'basic' ];
	}

}
```

## Default Categories

When you select the which category to assign you widget too, you can select one of the default categories:

* **Basic** – The `basic` category.
* **Pro** – Elementor Pro `pro-elements` category.
* **Theme** – Elementor Pro `theme-elements` category.
* **WooCommerce** – Elementor Pro `woocommerce-elements` category.
* **General** – The `general` category.
* **WordPress** – The `wordpress` category displaying WordPress widgets.

Or you can register your own category.

## Creating New Categories

Elementor allows developers to add new Widget Categories to group their own custom widgets. Registering a new widget category is done using `elementor/elements/categories_registered` action.

Note that when creating a new category, you need to supply the category name/slug, category title/label and the category icon.

```php
function add_elementor_widget_categories( $elements_manager ) {

	$elements_manager->add_category(
		'first-category',
		[
			'title' => esc_html__( 'First Category', 'plugin-name' ),
			'icon' => 'fa fa-plug',
		]
	);
	$elements_manager->add_category(
		'second-category',
		[
			'title' => esc_html__( 'Second Category', 'plugin-name' ),
			'icon' => 'fa fa-plug',
		]
	);

}
add_action( 'elementor/elements/categories_registered', 'add_elementor_widget_categories' );
```
