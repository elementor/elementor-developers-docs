# Simple Example

To put all of the pieces together we are going to create a simple Dynamic Tag which will return a random number.

## Dynamic Tag Class

First we need to create a class that extends the `Elementor\Core\DynamicTags\Tag` class:

```php
Class Elementor_Dynamic_Tag_Random_Number extends \Elementor\Core\DynamicTags\Tag {
}
```

## Dynamic Tag Data

Next we need to add data settings for our tag:

```php
Class Elementor_Dynamic_Tag_Random_Number extends \Elementor\Core\DynamicTags\Tag {

	public function get_name() {
		return 'random-number';
	}

	public function get_title() {
		return __( 'Random Number', 'plugin-name' );
	}

	public function get_group() {
		return 'actions';
	}

	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::NUMBER_CATEGORY ];
	}

}
```

## Dynamic Tag Controls

To simplify the example, this dynamic tag won't have any controls. But you can enhance the code and add two controls for minimum and maximum limits.

## Dynamic Tag Rendering

Now we will echo the tag output using in the `render()` method - a simple `rand()` output.

```php
Class Elementor_Dynamic_Tag_Random_Number extends \Elementor\Core\DynamicTags\Tag {

	public function render() {
		echo rand();
	}

}
```

## Register the Dynamic Tag

When the dynamic tag class is ready, we have to register the tag with Elementor’s dynamic tag manager at the `elementor/dynamic_tags/register_tags` hook:

```php
function register_random_number_tag( $dynamic_tags ) {
	$dynamic_tags->register_tag( 'Elementor_Dynamic_Tag_Random_Number' );
}
add_action( 'elementor/dynamic_tags/register_tags', 'register_random_number_tag' );
```

## The Entire Code

Altogether the widget class with some extra phpDocs should look as follows:

```php
class Elementor_Dynamic_Tag_Random_Number extends \Elementor\Core\DynamicTags\Tag {

	/**
	 * Get Name
	 *
	 * Returns the name of the tag.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_name() {
		return 'random-number';
	}

	/**
	 * Get Title
	 *
	 * Returns the title of the tag.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_title() {
		return __( 'Random Number', 'plugin-name' );
	}

	/**
	 * Get Group
	 *
	 * Returns the group of the tag.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_group() {
		return [ 'actions' ];
	}

	/**
	 * Get Categories
	 *
	 * Returns an array of tag categories.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array
	 */
	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::NUMBER_CATEGORY ];
	}

	/**
	 * Render
	 *
	 * Prints the dynamic tag value.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	public function render() {
		echo rand();
	}

}

/**
 * Register new dynamic tag that generates random numbers.
 *
 * @since 1.0.0
 * @return void
 */
function register_random_number_tag( $dynamic_tags ) {
	$dynamic_tags->register_tag( 'Elementor_Dynamic_Tag_Random_Number' );
}
add_action( 'elementor/dynamic_tags/register_tags', 'register_random_number_tag' );
```
