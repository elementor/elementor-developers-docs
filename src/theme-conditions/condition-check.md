# Condition Check

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor run a series of checks to ensure the condition complies to a certain set of rules. The `check()` method sets the checks to apply the condition.

## Check Method

The method that triggers the condition proccess called `check()`. In your condition class, use the method as follows:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ) {
		return true;
	}

}
```

If the condition check is valid, the template will be applied.

## Checking Conditions

Developers can add any type of condition checking. Let's see some examples.

### Front Page

In the example below, we'll check if it's a front page:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ) {
		return is_front_page();
	}

}
```

### 404 Page

In the following example we'll check if it's a 404 page:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ) {
		return is_404();
	}

}
```

## Embed Page

Another use case is to check if it's an embed page:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ) {
		return is_embed();
	}

}
```

## SSL Page

We can use server variables to check if the page was accessed with SSL:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ) {
		return empty( $_SERVER['HTTPS'] );
	}

}
```

## User Browser

We can apply different templates for different browsers by checking the [user browser](https://www.php.net/manual/en/function.get-browser.php):

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ) {
		$browser = get_browser(null, true);
		$is_firefox = ( $browser['browser'] === 'Firefox' );
		return $is_firefox;
	}

}
```
