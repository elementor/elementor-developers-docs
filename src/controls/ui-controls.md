# UI Controls

The UI controls are not a regular controls that the user can interact with, those are special controls visible only in [The Editor](/editor/). Please note that those controls don’t return any value.

## Using UI Controls

The following controls come with Elementor:

* [Heading](./classes/control-heading) – Display a heading in the panel.
* [Raw HTML](./classes/control-raw-html) – Display an HTML content in the panel.
* [Button](./classes/control-button) – Display a button in the panel that can trigger an event.
* [Divider](./classes/control-divider) – Display a separator between controls.
* [Deprecated Notice](./classes/control-deprecated-notice) - Display deprecation notices in the panel.

## Extending UI Controls

To create your own UI control, you need to extend the `\Elementor\Base_UI_Control` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Base_UI_Control {
}
```
