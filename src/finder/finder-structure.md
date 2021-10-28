# Finder Structure

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

The finder is organized into categories, each of which includes an array of links.

## Finder Class

To edit the finder's categories, we first need to create a class that extends the `\Elementor\Core\Common\Modules\Finder\Base_Category` class - the base finder category class:

```php
class New_Finder_Category extends \Elementor\Core\Common\Modules\Finder\Base_Category {
}
```

## Finder Methods

The extended class will have the following methods:

```php
class New_Finder_Category extends \Elementor\Core\Common\Modules\Finder\Base_Category {

	public function get_title() {}

	public function get_category_items() {}

	public function is_dynamic() {}

}
```

* **Category Title** - The `get_title()` method returns the label displayed to the user.

* **Category Items** - The `get_category_items()` method returns an array of links belong to the category.

* **Is Dynamic** - The `is_dynamic()` method is an optional method that return a boolean value. It is used when the category items return data using Ajax requests (like posts/pages titles). We wiil not be covering this method.
