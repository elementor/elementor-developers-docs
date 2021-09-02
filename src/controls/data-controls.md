# Data Controls

Data controls are simple controls, used to return a single value and save it in the database.

## Using Data Controls

The following controls are included in Elementor:

* [Text](./classes/control-text) – A simple text field.
* [Number](./classes/control-number) – A simple number field.
* [Textarea](./classes/control-textarea) – A textarea field.
* [WYSIWYG](./classes/control-wysiwyg) – The WordPress rich-text editor based on "*TinyMCE*".
* [Code](./classes/control-code) – A code editor textarea based on "*Ace Editor*".
* [Hidden](./classes/control-hidden) – A hidden input field in the panel, to save data in the database.
* [Switcher](./classes/control-switcher) – A switcher control (on/off), a fancy representation of checkboxes.
* [Popover Toggle](./classes/control-popover-toggle) – A toggle button to open and close a popover.
* [Select](./classes/control-select) – A simple select box field.
* [Select2](./classes/control-select2) – A select box field based on "*Select2*" plugin.
* [Choose](./classes/control-choose) – Radio buttons styled as groups of buttons with icons.
* [Color](./classes/control-color) – A color picker field with an alpha slider.
* [Icon](./classes/control-icon) – A font icon select box field based on "*Font Awesome*" fonts.
* [Font](./classes/control-font) – A font select box field-based on the "*Google Fonts*" library.
* [Date-Time](./classes/control-date-time) – A date/time picker field based on the "*Flatpickr*" library.
* [Gallery](./classes/control-gallery) – A gallery field based on the WordPress media library.
* [Repeater](./classes/control-repeater) – Repeater controls allowing you to build repeatable blocks of fields.
* [Entrance Animation](./classes/control-animation) – An entrance animation select box field based on "*Animate.css*" library.
* [Exit Animation](./classes/control-exit-animation) – An exit animation select box field based on "*Animate.css*" library.
* [Hover Animation](./classes/control-hover-animation) – A hover animation select box field based on "*Hover.css*" library.

## Extending Data Controls

To create your own data control, you need to extend the `\Elementor\Base_Data_Control` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Base_Data_Control {
}
```
