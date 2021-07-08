# Unit Controls

Unit controls are used to return unit based values.

## Using Unit Controls

The following controls come with Elementor:

* [Slider]() – A draggable scale to choose between a range of numeric values.
* [Dimensions]() – A component with 4 number fields, suitable for setting top/right/bottom/left settings.

## Extending Unit Controls

To create your own unit control, you need to extend the `\Elementor\Control_Base_Units` abstract class:

```php {1}
class Control_Test extends \Elementor\Control_Base_Units {
}
```
