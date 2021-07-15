# Advanced Example

More advanced example will include the use of custom field and controls where the user can set fields. The tag will calculate the average of those fields.

## Dynamic Tag Class

First we need to create a class that extends the `Elementor\Core\DynamicTags\Tag` class:

```php
Class Elementor_Dynamic_Tag_ACF_Average extends \Elementor\Core\DynamicTags\Tag {
}
```

## Dynamic Tag Data

Now we can start filling in the data methods:

```php
Class Elementor_Dynamic_Tag_ACF_Average extends \Elementor\Core\DynamicTags\Tag {

	public function get_name() {
		return 'acf-average';
	}

	public function get_title() {
		return __( 'ACF Average', 'plugin-name' );
	}

	public function get_group() {
		return 'site';
	}

	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
	}

}
```

## Dynamic Tag Controls

The tag will have a single control where the user can set a coma-separated list of IDs:

```php
Class Elementor_Dynamic_Tag_ACF_Average extends \Elementor\Core\DynamicTags\Tag {

	protected function _register_controls() {
		$this->add_control(
			'fields',
			[
				'label' => __( 'Fields', 'plugin-name' ),
				'type' => 'text',
			]
		);
	}

}
```

## Dynamic Tag Rendering

Finally, we will calculate the average of the coma-separated list of ACF fields:

```php
Class Elementor_Dynamic_Tag_ACF_Average extends \Elementor\Core\DynamicTags\Tag {

	public function render() {
		$fields = $this->get_settings( 'fields' );
		$sum = 0;
		$count = 0;
		$value = 0;

		// Make sure that ACF if installed and activated
		if ( ! function_exists( 'get_field' ) ) {
			echo 0;
			return;
		}

		foreach ( explode( ',', $fields ) as $index => $field_name ) {
			$field = get_field( $field_name );
			if ( (int) $field > 0 ) {
				$sum += (int) $field;
				$count++;
			}
		}

		if ( 0 !== $count ) {
			$value = $sum / $count;
		}

		echo $value;
	}

}
```

## Register the Dynamic Tag

When the dynamic tag class is ready, we have to register the tag with Elementor’s dynamic tag manager at the `elementor/dynamic_tags/register_tags` hook:

```php
function register_acf_average_tag( $dynamic_tags ) {
	$dynamic_tags->register_tag( 'Elementor_Dynamic_Tag_ACF_Average' );
}
add_action( 'elementor/dynamic_tags/register_tags', 'register_acf_average_tag' );
```

## The Entire Code

Altogether the widget class with some extra phpDocs should look as follows:


```php
class Elementor_Dynamic_Tag_ACF_Average extends \Elementor\Core\DynamicTags\Tag {

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
		return 'acf-average';
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
		return __( 'ACF Average', 'plugin-name' );
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
		return [ 'site' ];
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
		return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
	}

	/**
	 * Register Controls
	 *
	 * Registers the dynamic tag controls.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @return void
	 */
	protected function _register_controls() {
		$this->add_control(
			'fields',
			[
				'label' => __( 'Fields', 'plugin-name' ),
				'type' => 'text',
			]
		);
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
		$fields = $this->get_settings( 'fields' );
		$sum = 0;
		$count = 0;
		$value = 0;

		// Make sure that ACF if installed and activated
		if ( ! function_exists( 'get_field' ) ) {
			echo 0;
			return;
		}

		foreach ( explode( ',', $fields ) as $index => $field_name ) {
			$field = get_field( $field_name );
			if ( (int) $field > 0 ) {
				$sum += (int) $field;
				$count++;
			}
		}

		if ( 0 !== $count ) {
			$value = $sum / $count;
		}

		echo $value;
	}

}

/**
 * Register new dynamic tag that calculates ACF fields average.
 *
 * @since 1.0.0
 * @return void
 */
function register_acf_average_tag( $dynamic_tags ) {
	$dynamic_tags->register_tag( 'Elementor_Dynamic_Tag_ACF_Average' );
}
add_action( 'elementor/dynamic_tags/register_tags', 'register_acf_average_tag' );
```

## The Result

Dynamic tag in a group view:

<img src="/assets/img/dynamic-tag-example-acf-average.png" alt="Dynamic Tag Example">

Dynamic tag controls:

<img src="/assets/img/dynamic-tag-example-acf-average-controls.png" alt="Dynamic Tag Example">
