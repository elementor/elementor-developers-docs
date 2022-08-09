# Simple Example

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

To see how easy it is to extend the form widget, we are going to create an addon that removes the old `tel` field and adds a `local-tel` field.

## Folder Structure

The addon will have two files. One file for the new field-type and the other main file to register the field and handle all the other stuff.

```
elementor-form-local-tel-field/
|
├─ form-fields/
|  └─ local-tel.php
|
└─ elementor-form-local-tel-field.php
```

## Plugin Files

**elementor-form-local-tel-field.php**

```php
<?php
/**
 * Plugin Name: Elementor Forms Local Tel Field
 * Description: Custom addon that adds "local-tel" field to Elementor Forms Widget.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-form-local-tel-field
 *
 * Elementor tested up to: 3.7.0
 * Elementor Pro tested up to: 3.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Remove `tel` field from Elementor form widget.
 *
 * @since 1.0.0
 * @param array $fields Elementor form fields.
 * @return array Updated fields list.
 */
function remove_existing_form_field( $fields ) {

	unset( $fields['tel'] );

	return $fields;

}
add_filter( 'elementor_pro/forms/field_types', 'remove_existing_form_field' );

/**
 * Add new `local-tel` field to Elementor form widget.
 *
 * @since 1.0.0
 * @param \ElementorPro\Modules\Forms\Registrars\Form_Fields_Registrar $form_fields_registrar
 * @return void
 */
function add_new_form_field( $form_fields_registrar ) {

	require_once( __DIR__ . '/form-fields/local-tel.php' );

	$form_fields_registrar->register( new \Elementor_Local_Tel_Field() );

}
add_action( 'elementor_pro/forms/fields/register', 'add_new_form_field' );
```

**form-fields/local-tel.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Form Field - Local Tel
 *
 * Add a new "Local Tel" field to Elementor form widget.
 *
 * @since 1.0.0
 */
class Elementor_Local_Tel_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	/**
	 * Get field type.
	 *
	 * Retrieve local-tel field unique ID.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Field type.
	 */
	public function get_type() {
		return 'local-tel';
	}

	/**
	 * Get field name.
	 *
	 * Retrieve local-tel field label.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Field name.
	 */
	public function get_name() {
		return esc_html__( 'Local Tel', 'elementor-form-local-tel-field' );
	}

	/**
	 * Render field output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param mixed $item
	 * @param mixed $item_index
	 * @param mixed $form
	 * @return void
	 */
	public function render( $item, $item_index, $form ) {
		$form->add_render_attribute(
			'input' . $item_index,
			[
				'size' => '1',
				'class' => 'elementor-field-textual',
				'pattern' => '[0-9]{3}-[0-9]{3}-[0-9]{4}',
				'title' => esc_html__( 'Format: 123-456-7890', 'elementor-form-local-tel-field' ),
			]
		);

		echo '<input ' . $form->get_render_attribute_string( 'input' . $item_index ) . '>';
	}

	/**
	 * Field validation.
	 *
	 * Validate local-tel field value to ensure it complies to certain rules.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param \ElementorPro\Modules\Forms\Classes\Field_Base   $field
	 * @param \ElementorPro\Modules\Forms\Classes\Form_Record  $record
	 * @param \ElementorPro\Modules\Forms\Classes\Ajax_Handler $ajax_handler
	 * @return void
	 */
	public function validation( $field, $record, $ajax_handler ) {
		if ( empty( $field['value'] ) ) {
			return;
		}

		if ( preg_match( '/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/', $field['value'] ) !== 1 ) {
			$ajax_handler->add_error(
				$field['id'],
				esc_html__( 'Phone number must be in "123-456-7890" format.', 'elementor-form-local-tel-field' )
			);
		}
	}

	/**
	 * Field constructor.
	 *
	 * Used to add a script to the Elementor editor preview.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	public function __construct() {
		parent::__construct();
		add_action( 'elementor/preview/init', [ $this, 'editor_preview_footer' ] );
	}

	/**
	 * Elementor editor preview.
	 *
	 * Add a script to the footer of the editor preview screen.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	public function editor_preview_footer() {
		add_action( 'wp_footer', [ $this, 'content_template_script' ] );
	}

	/**
	 * Content template script.
	 *
	 * Add content template alternative, to display the field in Elemntor editor.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	public function content_template_script() {
		?>
		<script>
		jQuery( document ).ready( () => {

			elementor.hooks.addFilter(
				'elementor_pro/forms/content_template/field/<?php echo $this->get_type(); ?>',
				function ( inputField, item, i ) {
					const fieldId    = `form_field_${i}`;
					const fieldClass = `elementor-field-textual elementor-field ${item.css_classes}`;
					const size       = '1';
					const pattern    = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
					const title      = "<?php echo esc_html__( 'Format: 123-456-7890', 'elementor-forms-local-tel-field' ); ?>";

					return `<input id="${fieldId}" class="${fieldClass}" size="${size}" pattern="${pattern}" title="${title}">`;
				}, 10, 3
			);

		});
		</script>
		<?php
	}

}
```
