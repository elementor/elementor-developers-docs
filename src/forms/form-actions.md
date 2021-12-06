# Form Actions

<img :src="$withBase('/assets/img/elementor-form-actions.png')" alt="Elementor Form Actions" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

Form actions are tasks being done after the submission. An action can send the form data by email, it can redirect to a different page, or send your data to an external marketing service. The possibilities are endless.

Elementor Pro provides a set of tools to add your own custom actions.

## Creating a Custom Form Action

Start by creating a class that extends the `\ElementorPro\Modules\Forms\Classes\Action_Base` class and fill in all the required methods.

Each Form action needs to have a few basic settings like a unique name or a label that will be used in the editor.

On top of that, we have some advanced settings like the action controls which are basically optional fields where the user can configure his custom data.

And a `run` method that executes the action once the form is submitted based on the user settings from the action’s controls.

## Form Action Structure

As mentioned above, Elementor Form Action extends the `\ElementorPro\Modules\Forms\Classes\Action_Base` class and inherits its methods. A simple Action skeleton will look like this:

```php
class Elementor_Test_Form_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function get_name() {}

	public function get_label() {}

	public function run( $record, $ajax_handler ) {}

	public function register_settings_section( $widget ) {}

	public function on_export( $element ) {}

}
```

Let’s break it down:

* `get_name()` – Return action name (id) that will be used in the code .
* `get_label()` – Return the Action Label that will be displayed in the editor.
* `run()` – Runs the actual action on submit.
* `register_settings_section()` – (Optional) Define Action controls (setting fields) .
* `on_export()` – Used to clear settings when exporting.

## Simple Form Action

To put all of the pieces together we are going to create a simple Form Action which will add a new subscriber to a [Sendy](https://sendy.co/) Server using it’s [API](https://sendy.co/api).

## Form Action Class

First we need to create a class that extends the `\ElementorPro\Modules\Forms\Classes\Action_Base` class:

```php
class Elementor_Form_Sendy_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {
}
```

## Form Action settings

Now that we have a class for our Form Action, we can start filling in the methods, and we start with the simple ones:

```php
Class Elementor_Form_Sendy_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {
	public function get_name() {
		return 'sendy';
	}

	public function get_label() {
		return esc_html__( 'Sendy', 'text-domain' );
	}
}
```

## Form Action Controls

Next, we need to add the Form Action controls using the `register_settings_section()` method:

```php
Class Elementor_Form_Sendy_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {
    public function register_settings_section( $widget ) {
        $widget->start_controls_section(
            'section_sendy',
            [
                'label' => esc_html__( 'Sendy', 'text-domain' ),
                'condition' => [
                    'submit_actions' => $this->get_name(),
                ],
            ]
        );

        $widget->add_control(
            'sendy_url',
            [
                'label' => esc_html__( 'Sendy URL', 'text-domain' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'placeholder' => 'http://your_sendy_installation/',
                'label_block' => true,
                'separator' => 'before',

                'description' => esc_html__( 'Enter the URL where you have Sendy installed', 'text-domain' ),
            ]
        );

        $widget->add_control(
            'sendy_list',
            [
                'label' => esc_html__( 'Sendy List ID', 'text-domain' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'separator' => 'before',
                'description' => esc_html__( 'the list id you want to subscribe a user to. This encrypted & hashed id can be found under View all lists section named ID.', 'text-domain' ),
            ]
        );

        $widget->add_control(
            'sendy_email_field',
            [
                'label' => esc_html__( 'Email Field ID', 'text-domain' ),
                'type' => \Elementor\Controls_Manager::TEXT,
            ]
        );

        $widget->add_control(
            'sendy_name_field',
            [
                'label' => esc_html__( 'Name Field ID', 'text-domain' ),
                'type' => \Elementor\Controls_Manager::TEXT,
            ]
        );

        $widget->end_controls_section();

    }
}
```

We add a new controls section to the form widget which will be active (shown) if the user selects a Sendy as an action after submit. To this section we add 4 controls: Sendy installation URL, list ID (to subscribe the user to), email field ID to use as Sendy subscriber email and name field ID to use as Sendy subscriber name.

## Form Action Run

Like mentioned before the `run()` method is the actual action method which is triggered once the form is submitted, and in our case, this is where we send a request to Sendy’s API to subscribe the user to a list.

```php
Class Elementor_Form_Sendy_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {
	public function run( $record, $ajax_handler ) {
		$settings = $record->get( 'form_settings' );

		//  Make sure that there is a Sendy installation url
		if ( empty( $settings['sendy_url'] ) ) {
			return;
		}

		//  Make sure that there is a Sendy list ID
		if ( empty( $settings['sendy_list'] ) ) {
			return;
		}

		// Make sure that there is a Sendy Email field ID
		// which is required by Sendy's API to subsribe a user
		if ( empty( $settings['sendy_email_field'] ) ) {
			return;
		}

		// Get submitetd Form data
		$raw_fields = $record->get( 'fields' );

		// Normalize the Form Data
		$fields = [];
		foreach ( $raw_fields as $id => $field ) {
			$fields[ $id ] = $field['value'];
		}

		// Make sure that the user entered an email
		// which is required by Sendy's API to subsribe a user
		if ( empty( $fields[ $settings['sendy_email_field'] ] ) ) {
			return;
		}

		// If we got this far we can start building our request data
		// Based on the param list at https://sendy.co/api
		$sendy_data = [
			'email' => $fields[ $settings['sendy_email_field'] ],
			'list' => $settings['sendy_list'],
			'ipaddress' => \ElementorPro\Classes\Utils::get_client_ip(),
			'referrer' => isset( $_POST['referrer'] ) ? $_POST['referrer'] : '',
		];

		// Add name if field is mapped
		if ( empty( $fields[ $settings['sendy_name_field'] ] ) ) {
			$sendy_data['name'] = $fields[ $settings['sendy_name_field'] ];
		}

		// Send the request to Sendy installation
		wp_remote_post( $settings['sendy_url'] . 'subscribe', [
			'body' => $sendy_data,
		] );
	}
}
```

Last we need to implement `on_export()` method to make sure we don’t export it as a form setting:

```php
Class Elementor_Form_Sendy_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {
    public function on_export( $element ) {
        unset(
            $element['sendy_url'],
            $element['sendy_list'],
            $element['sendy_name_field'],
            $element['sendy_email_field']
        );
    }
}
```

We simply unset all of Sendy’s controls from the element.

## The Entire Code

Altogether the Form Action class with some extra phpDocs should look something like this:

```php
<?php
/**
 * Class Sendy_Action_After_Submit
 *
 * Custom elementor form action after submit to add a subscriber to Sendy list via API.
 */
class Sendy_Action_After_Submit extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	/**
	 * Get Name
	 *
	 * Return the action name
	 *
	 * @access public
	 * @return string
	 */
	public function get_name() {
		return 'sendy';
	}

	/**
	 * Get Label
	 *
	 * Returns the action label
	 *
	 * @access public
	 * @return string
	 */
	public function get_label() {
		return esc_html__( 'Sendy', 'text-domain' );
	}

	/**
	 * Run
	 *
	 * Runs the action after submit
	 *
	 * @access public
	 * @param \ElementorPro\Modules\Forms\Classes\Form_Record $record
	 * @param \ElementorPro\Modules\Forms\Classes\Ajax_Handler $ajax_handler
	 */
	public function run( $record, $ajax_handler ) {
		$settings = $record->get( 'form_settings' );

		//  Make sure that there is a Sendy installation url
		if ( empty( $settings['sendy_url'] ) ) {
			return;
		}

		//  Make sure that there is a Sendy list ID
		if ( empty( $settings['sendy_list'] ) ) {
			return;
		}

		// Make sure that there is a Sendy Email field ID
		// which is required by Sendy's API to subsribe a user
		if ( empty( $settings['sendy_email_field'] ) ) {
			return;
		}

		// Get sumitetd Form data
		$raw_fields = $record->get( 'fields' );

		// Normalize the Form Data
		$fields = [];
		foreach ( $raw_fields as $id => $field ) {
			$fields[ $id ] = $field['value'];
		}

		// Make sure that the user emtered an email
		// which is required by Sendy's API to subsribe a user
		if ( empty( $fields[ $settings['sendy_email_field'] ] ) ) {
			return;
		}

		// If we got this far we can start building our request data
		// Based on the param list at https://sendy.co/api
		$sendy_data = [
			'email' => $fields[ $settings['sendy_email_field'] ],
			'list' => $settings['sendy_list'],
			'ipaddress' => \ElementorPro\Classes\Utils::get_client_ip(),
			'referrer' => isset( $_POST['referrer'] ) ? $_POST['referrer'] : '',
		];

		// add name if field is mapped
		if ( empty( $fields[ $settings['sendy_name_field'] ] ) ) {
			$sendy_data['name'] = $fields[ $settings['sendy_name_field'] ];
		}

		// Send the request
		wp_remote_post( $settings['sendy_url'] . 'subscribe', [
			'body' => $sendy_data,
		] );
	}

	/**
	 * Register Settings Section
	 *
	 * Registers the Action controls
	 *
	 * @access public
	 * @param \Elementor\Widget_Base $widget
	 */
	public function register_settings_section( $widget ) {
		$widget->start_controls_section(
			'section_sendy',
			[
				'label' => esc_html__( 'Sendy', 'text-domain' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		$widget->add_control(
			'sendy_url',
			[
				'label' => esc_html__( 'Sendy URL', 'text-domain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => 'http://your_sendy_installation/',
				'label_block' => true,
				'separator' => 'before',
				'description' => esc_html__( 'Enter the URL where you have Sendy installed', 'text-domain' ),
			]
		);

		$widget->add_control(
			'sendy_list',
			[
				'label' => esc_html__( 'Sendy List ID', 'text-domain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'separator' => 'before',
				'description' => esc_html__( 'the list id you want to subscribe a user to. This encrypted & hashed id can be found under View all lists section named ID.', 'text-domain' ),
			]
		);

		$widget->add_control(
			'sendy_email_field',
			[
				'label' => esc_html__( 'Email Field ID', 'text-domain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
			]
		);

		$widget->add_control(
			'sendy_name_field',
			[
				'label' => esc_html__( 'Name Field ID', 'text-domain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
			]
		);

		$widget->end_controls_section();
	}

	/**
	 * On Export
	 *
	 * Clears form settings on export
	 * @access public
	 * @param array $element
	 */
	public function on_export( $element ) {
		unset(
			$element['sendy_url'],
			$element['sendy_list'],
			$element['sendy_name_field'],
			$element['sendy_email_field']
		);
	}
}
```

## Register the Action

So after we have our From Action class ready all that we have to do is register the Action with Elementor’s Form Widget and we do that using `elementor_pro/init` hook:

```php
<?php
add_action( 'elementor_pro/init', function() {
	// Here its safe to include our action class file
	include_once( 'path/to/action/class/file' );

	// Instantiate the action class
	$sendy_action = new Sendy_Action_After_Submit();

	// Register the action with form widget
	\ElementorPro\Plugin::instance()->modules_manager->get_modules( 'forms' )->add_form_action( $sendy_action->get_name(), $sendy_action );
});
```

## Final Notes:

* You should only include the Form Action class on the `elementor_pro/init` hook to make sure Elementor’s autoloader loads all base classes for you.
* Actions can use validation and proccesing filters to block/limit submittions.
* Actions can return data to the client via `$ajax_handler->add_response_data`.
