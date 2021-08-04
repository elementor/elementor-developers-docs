# Remove Field Type

To remove existing field type from the form widget we simply need to delete it from the list of available fields.

## Hooks

To do that we will hook to the `elementor_pro/forms/field_types` filter. This filter passed the list of available field types as a parameter. Developers can change this list to match their needs.

## Remove Field Type

A good example is when you don't allow your users to create forms with "File Upload" fields, for security reasons. You can remove the `upload` field type from Elementor form widget with the following code:

```php
/**
 * Remove `upload` field type from Elementor Form Widget.
 *
 * @param array $field_types Field types.
 */
function remove_elementor_form_field_type( $field_types ) {
	unset( $field_types['upload'] );
}
add_filter( 'elementor_pro/forms/field_types', 'remove_elementor_form_field_type' );
```
