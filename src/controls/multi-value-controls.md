# Multi Value Controls

Multi-value controls are used to return more than a single value. Each value in the multi-value control will be returned as an item in a `key => value` array.

## Using Multi Value Controls

The following controls come with Elementor:

* [URL](./classes/control-url) – A URL field with a button to open the link in an external tab.
* [Media](./classes/control-media) – A media chooser section based on the WordPress media library.
* [Image Dimensions](./classes/control-image-dimensions) – A component with image width, input, image height input and an apply button.
* [Icons Control](./classes/control-icons) – An icon chooser (Font Icons or SVG files) based on the Elementor Icon Library.
* [Text Shadow](./classes/control-text-shadow) – Input fields for horizontal shadow, vertical shadow, shadow blur and shadow color.
* [Box Shadow](./classes/control-box-shadow) – Input fields for horizontal shadow, vertical shadow, shadow blur, shadow spread and shadow color.

## Extending Multi Value Controls

To create your own multi value control, you need to extend the `\Elementor\Control_Base_Multiple` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Control_Base_Multiple {
}
```
