# Sub Conditions

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Conditions can have sub-conditions to apply strick conditions. A good example, all `Singular` pages, or only the `Posts`, or a specific post. Sub conditins help the user to narrow the main condition and focus the condition.

## Sub Condition Methods

When conditions have sub conditions, the condition class need to use the following two methods:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function get_all_label() {
		return esc_html__( 'All Items', 'plugin-name' );
	}

	public function register_sub_conditions() {
		$this->register_sub_condition( new Elementor_Test_Sub_Condition_1(); );
		$this->register_sub_condition( new Elementor_Test_Sub_Condition_2(); );
	}

}
```

* **Condition All Label** – The `get_all_label()` method return the all/any label that will be displayed to the user, if the condition has sub-conditions.

<img :src="$withBase('/assets/img/elementor-theme-all-sub-conditions.png')" alt="All Sub Conditions">

* **Sub Conditions** – The `register_sub_conditions()` method registers sub-conditions.

<img :src="$withBase('/assets/img/elementor-theme-sub-condition.png')" alt="Sub Conditions">
