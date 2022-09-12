# Condition Structure

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Each condition needs to have a few basic settings, such as a unique name and label. In addition, a condition should be assigned to a group. A condition could have sub-conditions. The final, and most important, is the check method that checks whether the condition complies with a set of predefined rules.

## Theme Condition Class

First, we need to create a class that extends the `\ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base` class:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {
}
```

## Theme Condition Structure

As mentioned above, conditions extend the `\ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base` class and inherit its methods. A simple condition skeleton will look as follows:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public static function get_type() {}

	public function get_priority() {}

	public function get_name() {}

	public function get_label() {}

	public function get_all_label() {}

	public function register_sub_conditions() {}

	public function check( $args ) {}

}
```

Let’s break it down:

* **Condition Type** – The `get_type()` method returns the condition group type.

* **Condition Priority** – The `get_priority()` method priorotize the condition in a group type.

* **Condition Name** – The `get_name()` method returns the condition name (id) that will be used in the code.

* **Condition Label** – The `get_label()` method returns the condition label that will be displayed to the user.

* **Condition All Label** – The `get_all_label()` method returns the all/any label that will be displayed to the user, if the condition has sub-conditions.

* **Condition Check** – The `check()` method is the actual method that checks if the condition complies to a certain set of rules.

* **Sub-Conditions** – The `register_sub_conditions()` method registers sub-conditions.

Please note that the `Condition_Base` class has many more methods developers can use, but the methods mentioned above will cover the vast majority of your needs.
