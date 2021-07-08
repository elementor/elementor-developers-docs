# Form Field Types

When you create a new Elementor Form you can create new forms using dedicated fields. Some fields are simple other are more advanced.

![Elementor Form Fields](/assets/img/form-fields.png)

Elementor uses the "Repeater" control to allow the user to add multiple fields. Then the user can select the field type for each field from a list of available field types.

![Elementor Form Field type](/assets/img/form-field-type.png)

## Default Field Types

Form widget come out-ot-the-box with several field types:

| Type        |  ID          |
| ----------- | ------------ |
| Text        | `text`       |
| Email       | `email`      |
| Textarea    | `textarea`   |
| URL         | `url`        |
| Tel         | `tel`        |
| Radio       | `radio`      |
| Select      | `select`     |
| Checkbox    | `checkbox`   |
| Acceptance  | `acceptance` |
| Number      | `number`     |
| Date        | `date`       |
| Time        | `time`       |
| File Upload | `upload`     |
| Password    | `password`   |
| HTML        | `html`       |
| Hidden      | `hidden`     |

Developers can control those fields, remove existing field types and add new field types.

## Remove Exisiting Field Types

A good example is when you don't allow your users to create forms with "File Upload" fields, for security reasons. You can remove the "File Upload" field type from the forms widget.

```php
/**
 * Remove upload field type from Elementor Form Widget.
 *
 * @param array $field_types Field types.
 */
function remove_field_types( $field_types ) {
    unset( $field_types['upload'] );
}
add_filter( 'elementor_pro/forms/field_types', 'remove_field_types', 10, 2 );
```

We hooked to the `elementor_pro/forms/field_types` filter and removed the `upload` field type from the list of available types defined in `$field_types`.
