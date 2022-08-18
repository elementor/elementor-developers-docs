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

}
```

* **Condition Group Types** – The `get_type()` method return the condition group type.

## Available Condition Groups

When you select to which group to assign your condition to, you can select one of the following groups:

| Label           | ID         | Description                                             |
|-----------------| ---------- | ------------------------------------------------------- |
| **Entire Site** | `general`  | Condition to display the template across all the pages. |
| **Archives**    | `archive`  | Condition to display the template on archive pages.     |
| **Singular**    | `singular` | Condition to display the template on singular pages.    |

<img :src="$withBase('/assets/img/elementor-theme-conditions-groups.png')" alt="Theme Conditions Groups">
