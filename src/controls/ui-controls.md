# UI Controls

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

UI controls are not a regular controls that the user can interact with, these are special controls only visible in [the editor](./editor/). Please note that these controls don’t return any value.

## Using UI Controls

The following controls are included in Elementor:

* [Heading](./../controls/classes/control-heading/) – Display a heading in the panel.
* [Raw HTML](./../controls/classes/control-raw-html/) – Display HTML content in the panel.
* [Button](./../controls/classes/control-button/) – Display a button that can trigger an event in the panel.
* [Divider](./../controls/classes/control-divider/) – Display a separator between controls.
* [Deprecated Notice](./../controls/classes/control-deprecated-notice/) - Display deprecation notices in the panel.

## Extending UI Controls

To create your own UI controls, you need to extend the `\Elementor\Base_UI_Control` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Base_UI_Control {
}
```
