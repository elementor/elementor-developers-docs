# Unit Controls

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Unit controls are used to return unit based values.

## Using Unit Controls

The following controls are included in Elementor:

* [Slider](./../controls/classes/control-slider/) – A draggable scale to choose between a range of numeric values.
* [Dimensions](./../controls/classes/control-dimensions/) – Four numeric input fields, suitable for setting top / right / bottom / left settings.

## Extending Unit Controls

To create your own unit control, you need to extend the `\Elementor\Control_Base_Units` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Control_Base_Units {
}
```
