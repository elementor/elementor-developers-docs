# Finder Structure

Elementor Finder is organized into categories, each includes an array of links.

## Finder Class

First we need to create a class that extends the `\Elementor\Core\Common\Modules\Finder\Base_Category` class which is the base Finder Category class:

```php
class New_Finder_Category extends \Elementor\Core\Common\Modules\Finder\Base_Category {
}
```

## Finder Methods

The class will have the following methods:

```php
class New_Finder_Category extends \Elementor\Core\Common\Modules\Finder\Base_Category {

	public function get_title() {}

	public function get_category_items() {}

    public function is_dynamic() {}

}
```

* **Category Title** - The `get_title()` method returns the label displayed to the user.

* **Category Items** - The `get_category_items()` method returns an array of links belong to the category.

* **Is Dynamic** - The `is_dynamic()` method is an optional method that return a boolean value. It is being used when the category items return data using ajax requests (like posts/pages titles). We won't be covering this method.
