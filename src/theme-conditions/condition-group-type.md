# Condition Group Type

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Conditions are grouped into types. There are several pre-defined types to choose from, based on the [WordPress Template Hierarchy](https://wphierarchy.com/). When creating new conditions, we have to assign the conditions to a specific type.

## Group Method

Feild group is deffined by the following mwthod:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public static function get_type() {
		return 'condition_type';
	}

	public static function get_priority() {
		return 40;
	}

}
```

* **Condition Group Type** – The `get_type()` method return the condition group type.

* **Condition Priority** – The `get_priority()` method priorotize the condition in a group type.

## Available Condition Groups

When you select to which group to assign your condition to, you can select one of the following groups:

| ID            | Label              | Description                                             |
| ------------- |--------------------| ------------------------------------------------------- |
| >`general`    | > **General**      |                                                         |
| >> `general`  | >> **Entire Site** | Condition to display the template across all the pages. |
| >> `archive`  | >> **Archives**    | Condition to display the template on archive pages.     |
| >> `singular` | >> **Singular**    | Condition to display the template on singular pages.    |

<img :src="$withBase('/assets/img/elementor-theme-conditions-groups.png')" alt="Theme Conditions Groups">

## Conditions Tree

We basically creating a tree of conditions. Each time we add a sub-condition, we expand the tree. `get_type()` method tells us to which group the condition belongs.

## Conditions Priority

When several sub-conditions are nested inside a group type or inside a condition, their display order can be controlled using the priority method.

Built-in conditions use priority ranging between `0` to `100`. When `get_priority()` method is not defined, the default priority inherited from the base class, there it returns `100`.
