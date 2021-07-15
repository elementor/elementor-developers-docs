# Complex Example

To showcase a complex dynamic tag we are going to allow the use to display server variables from a list of available server variables.

## Register New Group

In this example we will start by registering our own [Dynamic Tags Group](./dynamic-tags-groups).

```php
function register_request_variables_dynamic_tag_group( $dynamic_tags ) {

	\Elementor\Plugin::$instance->dynamic_tags->register_group(
		'request-variables',
		[
			'title' => __( 'Request Variables', 'plugin-name' )
		]
	);

}
add_action( 'elementor/dynamic_tags/register_tags', 'register_request_variables_dynamic_tag_group' );
```

## Dynamic Tag Class

Then we will create a class that extends the `Elementor\Core\DynamicTags\Tag` class:

```php
Class Elementor_Dynamic_Tag_Server_Variable extends \Elementor\Core\DynamicTags\Tag {
}
```

## Dynamic Tag Data

Next we will fill in the basic tag data:

```php
Class Elementor_Dynamic_Tag_Server_Variable extends \Elementor\Core\DynamicTags\Tag {

	public function get_name() {
		return 'server-variable';
	}

	public function get_title() {
		return __( 'Server Variable', 'plugin-name' );
	}

	public function get_group() {
		return 'request-variables';
	}

	public function get_categories() {
		return [ 'text' ];
	}

}
```

## Dynamic Tag Controls

Now we will add a control with a select box containing all the available server variables:

```php
Class Elementor_Dynamic_Tag_Server_Variable extends \Elementor\Core\DynamicTags\Tag {

	protected function _register_controls() {
		$variables = [];

		foreach ( array_keys( $_SERVER ) as $variable ) {
			$variables[ $variable ] = ucwords( str_replace( '_', ' ', $variable ) );
		}

		$this->add_control(
			'user_selected_variable',
			[
				'type' => \Elementor\Controls_Manager::SELECT,
				'label' => __( 'Variable', 'plugin-name' ),
				'options' => $variables,
			]
		);
	}

}
```

We add a single select control with the list of the sever variables to choose from. Note that this is just an example, and in a real-world use case you would probably want to exclude some of the server variables.

## Dynamic Tag Rendering

Last, we need to implement the `render()` method, which takes the variable name the user selected in the control and returns the server corresponding variable value:

```php
Class Elementor_Dynamic_Tag_Server_Variable extends \Elementor\Core\DynamicTags\Tag {

	public function render() {
		$user_selected_variable = $this->get_settings( 'user_selected_variable' );

		if ( ! $user_selected_variable ) {
			return;
		}

		if ( ! isset( $_SERVER[ $user_selected_variable ] ) ) {
			return;
		}

		$value = $_SERVER[ $user_selected_variable ];
		echo wp_kses_post( $value );
	}

}
```

The `render()` method simply checks that a server variable with the selected param name exists and echo it to the buffer after some minimal escaping.

## Register the Dynamic Tag

So after we have our dynamic tag class ready all that we have to do is register the tag with Elementor’s Dynamic tag manager at the `elementor/dynamic_tags/register_tags` hook:

```php
function register_server_variable_dynamic_tag( $dynamic_tags ) {
	$dynamic_tags->register_tag( 'Elementor_Dynamic_Tag_Server_Variable' );
}
add_action( 'elementor/dynamic_tags/register_tags', 'register_server_variable_dynamic_tag' );
```

## The Entire Code

Altogether the dynamic tag class with some extra phpDocs should look as follows:

```php
Class Elementor_Dynamic_Tag_Server_Variable extends \Elementor\Core\DynamicTags\Tag {

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
		return 'server-variable';
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
		return __( 'Server Variable', 'plugin-name' );
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
		return 'request-variables';
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
		$variables = [];

		foreach ( array_keys( $_SERVER ) as $variable ) {
			$variables[ $variable ] = ucwords( str_replace( '_', ' ', $variable ) );
		}

		$this->add_control(
			'user_selected_variable',
			[
				'type' => \Elementor\Controls_Manager::SELECT,
				'label' => __( 'Variable', 'plugin-name' ),
				'options' => $variables,
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
		$user_selected_variable = $this->get_settings( 'user_selected_variable' );

		if ( ! $user_selected_variable ) {
			return;
		}

		if ( ! isset( $_SERVER[ $user_selected_variable ] ) ) {
			return;
		}

		$value = $_SERVER[ $user_selected_variable ];
		echo wp_kses_post( $value );
	}

}

/**
 * Register new dynamic tag group for Request Variables.
 *
 * @since 1.0.0
 * @return void
 */
function register_request_variables_dynamic_tag_group( $dynamic_tags ) {

	\Elementor\Plugin::$instance->dynamic_tags->register_group(
		'request-variables',
		[
			'title' => __( 'Request Variables', 'plugin-name' )
		]
	);

}
add_action( 'elementor/dynamic_tags/register_tags', 'register_request_variables_dynamic_tag_group' );

/**
 * Register new dynamic tag for Server Variables.
 *
 * @since 1.0.0
 * @return void
 */
function register_server_variable_dynamic_tag( $dynamic_tags ) {
	$dynamic_tags->register_tag( 'Elementor_Dynamic_Tag_Server_Variable' );
}
add_action( 'elementor/dynamic_tags/register_tags', 'register_server_variable_dynamic_tag' );
```
