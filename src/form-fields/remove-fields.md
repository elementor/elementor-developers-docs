# Remove Fields

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

To remove existing field from the form widget we simply need to delete it from the list of available fields.

## Hooks

To do that we simply hook to the `elementor_pro/forms/field_types` filter. This filter holds the list of available fields as a parameter. Developers can change this list to match their needs.

## Remove Fields

A good example is when you don't allow your users to create forms with "File Upload" fields, for security reasons. You can remove the `upload` field from Elementor form widget with the following code:

```php
/**
 * Remove `upload` field from Elementor Form Widget.
 *
 * @param array $fields Elementor form fields.
 *
 * @return array Updated fields list.
 */
function remove_elementor_form_field( $fields ) {

	unset( $fields['upload'] );

	return $fields;

}
add_filter( 'elementor_pro/forms/field_types', 'remove_elementor_form_field' );
```
