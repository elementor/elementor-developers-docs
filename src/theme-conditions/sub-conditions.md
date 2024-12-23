# Sub-Conditions

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Conditions can have sub-conditions in order to narrow the conditions. For example, instead of applying a condition to all `Singular` pages, applying it only to `Posts`, or a specific post. Sub-conditions help the user focus the main condition.

## Sub-Condition Methods

When conditions have sub-conditions, the condition class needs to use the following two methods:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function get_all_label(): string {
		return esc_html__( 'All Items', 'textdomain' );
	}

	public function register_sub_conditions(): void {
		$this->register_sub_condition( new Elementor_Test_Sub_Condition_1(); );
		$this->register_sub_condition( new Elementor_Test_Sub_Condition_2(); );
	}

}
```

* **Condition All Label** – The `get_all_label()` method returns the all/any label that will be displayed to the user, if the condition has sub-conditions.

<img :src="$withBase('/assets/img/elementor-theme-all-sub-conditions.png')" alt="All Sub-Conditions">

* **Sub-Conditions** – The `register_sub_conditions()` method registers sub-conditions.

<img :src="$withBase('/assets/img/elementor-theme-sub-condition.png')" alt="Sub-Conditions">
