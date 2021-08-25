# Widget Rendering

The last step in widget development is to display the output. Each widget needs to render the data returned from the controls and generate the final HTML displayed in the frontend and in preview.

## Rendering Methods

Elementor has two rendering methods, both relay on the returned values from the control but each method renders differently as one uses PHP and the other uses JS.

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function render() {}

	protected function content_template() {}

}
```

* `render()` – Written as a PHP template that generates the **frontend** output.

* `content_template()` – Written as a JS template that generates the [preview](/editor/elementor-preview) output in [the editor](/editor/).

## Rendering Different Controls

Elementor offers a number of ways to use the returned value of a control. Widgets can simply print the value in the template, use the value to create a CSS rule in the stylesheet file, add a class to the element template wrapper etc.

We're going to dive in and see how this is done using the different methods. We'll start with very simple examples and move on to more advanced ones.

* [Widget Settings](./widget-settings)
* [Rendering Text](./rendering-text)
* [Rendering Style](./rendering-style)
* [Rendering Media](./rendering-media)
* [Rendering Repeater](./rendering-repeaters)
* [Rendering HTML Attribute](./rendering-html-attribute)
* [Rendering Inline Editing](./rendering-inline-editing)
