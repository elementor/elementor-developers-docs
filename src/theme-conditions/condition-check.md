# Condition Check

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor runs a series of checks to ensure that conditions comply with a certain set of rules. The `check()` method sets these checks.

## Check Method

The method that triggers this condition process is called `check()`. In your condition class, use the method as follows:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return true;
	}

}
```

If the condition check is valid, the template will be applied.

## Checking Conditions

Developers can add any type of condition checking. Let's see some examples.

### Front Page

In the example below, we'll check to see if it's a front page:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return is_front_page();
	}

}
```

### 404 Page

In the following example we'll check to see if it's a 404 page:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return is_404();
	}

}
```

## Embed Page

In this example we'll check to see if it's an embed page:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return is_embed();
	}

}
```

## SSL Page

We can use server variables to check and see if the page was accessed with SSL:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return empty( $_SERVER['HTTPS'] );
	}

}
```

## User Browser

We can apply different templates for different browsers by checking the [user's browser](https://www.php.net/manual/en/function.get-browser.php):

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		$browser = get_browser(null, true);
		$is_firefox = ( $browser['browser'] === 'Firefox' );
		return $is_firefox;
	}

}
```
