# Data Controls

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Data controls are simple controls, used to return a single value and save it in the database.

## Using Data Controls

The following controls are included in Elementor:

* [Text](./../controls/classes/control-text/) – A simple text field.
* [Number](./../controls/classes/control-number/) – A simple number field.
* [Textarea](./../controls/classes/control-textarea/) – A textarea field.
* [WYSIWYG](./../controls/classes/control-wysiwyg/) – The WordPress rich-text editor based on "*TinyMCE*".
* [Code](./../controls/classes/control-code/) – A code editor textarea based on "*Ace Editor*".
* [Hidden](./../controls/classes/control-hidden/) – A hidden input field in the panel, to save data in the database.
* [Switcher](./../controls/classes/control-switcher/) – A switcher control (on/off), a fancy representation of checkboxes.
* [Popover Toggle](./../controls/classes/control-popover-toggle/) – A toggle button to open and close a popover.
* [Select](./../controls/classes/control-select/) – A simple select box field.
* [Select2](./../controls/classes/control-select2/) – A select box field based on "*Select2*" plugin.
* [Choose](./../controls/classes/control-choose/) – Radio buttons styled as groups of buttons with icons.
* [Color](./../controls/classes/control-color/) – A color picker field with an alpha slider.
* [Icon](./../controls/classes/control-icon/) – A font icon select box field based on "*Font Awesome*" fonts.
* [Font](./../controls/classes/control-font/) – A font select box field-based on the "*Google Fonts*" library.
* [Date-Time](./../controls/classes/control-date-time/) – A date/time picker field based on the "*Flatpickr*" library.
* [Gallery](./../controls/classes/control-gallery/) – A gallery field based on the WordPress media library.
* [Repeater](./../controls/classes/control-repeater/) – Repeater controls allowing you to build repeatable blocks of fields.
* [Entrance Animation](./../controls/classes/control-animation/) – An entrance animation select box field based on "*Animate.css*" library.
* [Exit Animation](./../controls/classes/control-exit-animation/) – An exit animation select box field based on "*Animate.css*" library.
* [Hover Animation](./../controls/classes/control-hover-animation/) – A hover animation select box field based on "*Hover.css*" library.

## Extending Data Controls

To create your own data control, you need to extend the `\Elementor\Base_Data_Control` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Base_Data_Control {
}
```
