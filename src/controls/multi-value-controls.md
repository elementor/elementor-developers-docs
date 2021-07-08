# Multi Value Controls

Multi-value controls are used to return more than a single value. Each value in the multi-value control will be returned as an item in a `key => value` array.

## Using Multi Value Controls

The following controls come with Elementor:

* [URL]() – A URL field with a button to open the link in an external tab.
* [Media]() – A media chooser section based on the WordPress media library.
* [Image Dimensions]() – A component with image width, input, image height input and an apply button.
* [Text Shadow]() – Input fields for horizontal shadow, vertical shadow, shadow blur and shadow color.
* [Box Shadow]() – Input fields for horizontal shadow, vertical shadow, shadow blur, shadow spread and shadow color.
* [Icons Control]() – Elementor’s Icon Library for Font Icons or SVG upload based on the WordPress media library.

## Extending Multi Value Controls

To create your own multi value control, you need to extend the `\Elementor\Control_Base_Multiple` abstract class:

```php {1}
class Control_Test extends \Elementor\Control_Base_Multiple {
}
```
