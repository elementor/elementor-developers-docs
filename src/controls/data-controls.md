# Data Controls

Data controls are simple controls used to return a single value and save it in the database.

## Using Data Controls

The following controls come with Elementor:

* [Text]() – A simple text field.
* [Number]() – A simple number field.
* [Textarea]() – A textarea field.
* [WYSIWYG]() – The WordPress rich-text editor based on "*TinyMCE*".
* [Code]() – A code editor textarea based on "*Ace Editor*".
* [Hidden]() – A hidden input field in the panel, to save data in the database.
* [Switcher]() – A switcher control (on/off), a fancy representation of checkbox.
* [Popover Toggle]() – A toggle button to open and close a popover.
* [Select]() – A simple select box field.
* [Select2]() – A select box field based on "*Select2*" plugin.
* [Choose]() – A radio buttons styled as groups of buttons with icons.
* [Color]() – A color picker field with an alpha slider.
* [Icon]() – A font icon select box field based on "*Font Awesome*" fonts.
* [Font]() – A font select box field based on "*Google Fonts*" library.
* [Date-Time]() – A date/time picker field based on the "*Flatpickr*" library.
* [Entrance Animation]() – An entrance animation select box field based on "*Animate.css*" library.
* [Hover Animation]() – A hover animation select box field based on "*Hover.css*" library.
* [Gallery]() – A gallery field based on the WordPress media library.
* [Repeater]() – Repeater controls allow you to build repeatable blocks of fields.

## Extending Data Controls

To create your own data control, you need to extend the `\Elementor\Base_Data_Control` abstract class:

```php {1}
class Control_Test extends \Elementor\Base_Data_Control {
}
```
