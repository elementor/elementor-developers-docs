# Widget Rendering

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

The last step in widget development is to display the output. Each widget needs to render the data returned from the controls, and generate the final HTML displayed in the frontend and the preview area.

## Rendering Methods

Elementor has two rendering methods, both rely on the returned values from the control, but each method renders differently as one uses PHP and the other uses JS.

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function render() {}

	protected function content_template() {}

}
```

* `render()` – Written as a PHP template that generates the **frontend** output.

* `content_template()` – Written as a JS template that generates the [preview](./editor/elementor-preview) output in [the editor](./editor/).

## Rendering Different Controls

Elementor offers a number of ways to use the returned value of a control. Widgets can simply print the value in the template, use the value to create a CSS rule in the stylesheet file, add a class to the element template wrapper, and more.

We're going to dive in and see how this is done using the different methods. We'll start with very simple methods and move on to more advanced ones.

* [Widget Settings](./widgets/widget-settings)
* [Rendering Text](./widgets/rendering-text)
* [Rendering Style](./widgets/rendering-style)
* [Rendering Media](./widgets/rendering-media)
* [Rendering Repeater](./widgets/rendering-repeaters)
* [Rendering HTML Attribute](./widgets/rendering-html-attribute)
* [Rendering Inline Editing](./widgets/rendering-inline-editing)
