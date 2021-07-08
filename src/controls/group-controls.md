# Group Controls

Group control are used to group together several regular controls and return them in a small popup in the editor. This control helps improve UX and display a large number of controls in single line.

## Using Group Controls

The following controls come with Elementor:

* [Typography]() – Font size, font family, font weight, text transform, font style, line height and letter spacing.
* [Text Shadow]() – Add a shadow effect to texts.
* [Box Shadow]() – Add a shadow effect to elements.
* [Border]() – Border type, border width and border color.
* [Background]() – Background color, background image, background gradient or background video.
* [Image Size]() – Select image sizes (thumbnail, medium, medium_large, large) or custom dimension.

## Extending Group Controls

To create your own group control, you need to extend the `\Elementor\Group_Control_Base` abstract class:

```php {1}
class Control_Test extends \Elementor\Group_Control_Base {
}
```
