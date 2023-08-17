# CSS Selectors

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

To transform control values to CSS styles, Elementor uses the `selector` argument for group controls and the `selectors` argument for other controls. These two arguments define which CSS selectors are used and on which CSS properties the values are set. Let's see how it works.

## Custom Stylesheets

When a WordPress post/page is created, it is assigned with a unique `id`. The Elementor editor uses this `id` to generate a very specific stylesheet for that page, based on the user data from each control. Then, with every page load, Elementor loads the stylesheet belonging to that particular page.

### Stylesheet Path

The stylesheet is saved in the `/elementor/css/` folder, which is located inside the WordPress `/uploads/` folder. The file itself can be identified by its `id`.

```
https://example.com/wp-content/uploads/elementor/css/post-{id}.css
```

When a page is loaded, Elementor automatically loads the corresponding stylesheet containing the styling options retrieved from the controls used by the widgets on that page.

### Custom CSS

Editor controls are a way to allow the user either content or styling data. To transform control values to CSS styles, the control inform the editor that it needs to create a CSS. This is done by specifying a list of CSS selectors, properties and values.

```php
'selectors' => [
	'.css-selectors' => 'css-property: css-value;',
],
```

## Selector Arguments

Elementor has two selector arguments. The first is applied on group controls, the second on non-group controls. Both methods convert user data into a CSS style in a stylesheet.

### Group Controls

To convert group control data to a specific CSS selector:

```php{5,13}
$this->add_group_control(
	\Elementor\Group_Control_Background::get_type(),
	[
		'name' => 'background',
		'selector' => '{{WRAPPER}} .css-selector',
	]
);

$this->add_group_control(
	\Elementor\Group_Control_Background::get_type(),
	[
		'name' => 'background_hover',
		'selector' => '{{WRAPPER}}:hover .css-selector',
	]
);
```

The `selector` argument is a `string`. It is passed to all the inner controls in the group popup. When using group controls without specifying the `selector` argument, Elementor will use `{ { WRAPPER } }` as a fallback.

### Non-Group Controls

To convert non-group control data to CSS selectors:

```php{6-8}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'selectors' => [
			'{{WRAPPER}} .css-selector' => 'css-property: {{VALUE}};',
		],
	]
);
```

The `selectors` argument is an `array`. It can accept a single or multiple key-value pairs.

## Selectors Variants

In most cases, a single selector is more than enough:

```php{6-8}
$this->add_control(
	'text-color',
	[
		'label' => esc_html__( 'Color', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'selectors' => [
			'{{WRAPPER}} .custom-container' => 'color: {{VALUE}};',
		],
	]
);
```

The selector can also be used to specify multiple CSS properties in a single selector:

```php{6-8}
$this->add_control(
	'text-color',
	[
		'label' => esc_html__( 'Color', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'selectors' => [
			'{{WRAPPER}} .custom-container' => 'color: {{VALUE}}; border-color: {{VALUE}}; outline-color: {{VALUE}};',
		],
	]
);
```

Or multiple (comma separated) CSS selectors in a single control selector:

```php{6-8}
$this->add_control(
	'text-color',
	[
		'label' => esc_html__( 'Color', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'selectors' => [
			'{{WRAPPER}} .custom-container .heading, {{WRAPPER}} .custom-container .content' => 'color: {{VALUE}};',
		],
	]
);
```

The code above can be written as multiple selectors:

```php{6-9}
$this->add_control(
	'text-color',
	[
		'label' => esc_html__( 'Color', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'selectors' => [
			'{{WRAPPER}} .custom-container .heading' => 'color: {{VALUE}};',
			'{{WRAPPER}} .custom-container .content' => 'color: {{VALUE}};',
		],
	]
);
```

To support both LTR and RTL websites, you can specify different selector values based on writing direction:

```php{6-9}
$this->add_control(
	'gap-size',
	[
		'label' => esc_html__( 'Gap', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::NUMBER,
		'selectors' => [
			'body:not(.rtl) {{WRAPPER}} .custom-container' => 'padding-left: {{VALUE}}',
			'body.rtl {{WRAPPER}} .custom-container' => 'padding-right: {{VALUE}}',
		],
	]
);
```

## Scoped Styling

Elementor offers two ways to apply custom CSS on a specific element inside your widget. It uses scoped styling using `{ { WRAPPER } }` or `{ { ID } }` keywords. Both keywords are placed on the left side of the key-value pair.

### Element Wrapper

When an element wrapper variable is used in a selector:

```php
'selectors' => [
	'{{WRAPPER}} .widget-container' => 'color: red;',
],
```

It generates CSS containing the selector of the widget's instance:

```css
.elementor-123 .elementor-element.elementor-element-1a2b3c4 .widget-container {
	color: red;
}
```

If you omit the widget wrapper, the style will apply on all the `.widget-container` classes on the page. With the wrapper, the style will apply only on the `.widget-container` class of the widget. It is basically Elementor's way to create scoped styles for particular widget instances.

### Element ID

When an element id variable is used in a selector:

```php
'selectors' => [
	'#elementor-element-{{ID}}' => 'color: red;',
],
```

It generates CSS containing the id of the widget instance:

```css
#elementor-element-1a2b3c4 {
	color: red;
}
```

The element id variable helps create unique elements, but it presents an issue when the widget has multiple instances on the page. This is because the `id` attribute should be unique on the page. Therefore we discourage external developers from using this technique. It is used by Elementor only in very specific use cases.

## Control Values to CSS Value

Each control returns a different value type, some return strings while others return arrays. Therefore you need to familiaraze yourself with the [control types](./control-types/). This will help you understand how to properly transform them to CSS values.

### Data Controls

All the data controls return `string`s. To apply the user selected value to the style we need to insert the control value to selectors argument:

```php
'selectors' => [
	'{{WRAPPER}} .widget-container' => 'color: {{VALUE}};',
],
```

### Unit Control

[Slider Controls](./control-slider/) return an `array` with the size and the unit (`[ 'size' => '', 'unit' => '' ]`), to use this user data in the selectors argument:

```php
'selectors' => [
	'{{WRAPPER}} .widget-container' => 'width: {{SIZE}}{{UNIT}};',
],
```

### Dimensions Control

[Dimensions Controls](./control-dimensions/) return an `array` with all four sides and a unit (`[ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => '', 'isLinked' => '' ]`), to use the user data in the selectors argument:

```php
'selectors' => [
	'{{WRAPPER}} .widget-container' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
],
```

### URL Control

[URL Controls](./control-url/) return an `array` with the url and some attributes (`[ 'url' => '', 'is_external' => '', 'nofollow' => '', 'custom_attributes' => '' ]`), to use the user data in the selectors argument:

```php
'selectors' => [
	'{{WRAPPER}} .widget-container' => 'background-image: url( {{URL}} );',
],
```

### Media Control

[Media Controls](./control-media/) return an `array` with the media id and url (`[ 'id' => '', 'url' => '' ]`), to use the user data in the selectors argument:

```php
'selectors' => [
	'{{WRAPPER}} .widget-container' => 'background-image: url( {{URL}} );',
],
```

### Multivalue Controls

Other multivalue controls return different `array` types but we are not applying CSS to these controls as they are considered content controls rather than style controls.

## Values from other Controls

In some less common cases you'll need more than one style control to create a single CSS property. For these cases, Elementor offers the ability to prefix the value with the control name. This method provides the means to pull data from other controls.

### Simple Example

A simple example is an `aspect-ratio` scenario where we need to use two [number controls](./control-number/) to set a single css declaration:

```css
aspect-ratio: {{width}} / {{height}};
```

To achieve this, you need two controls, and a single `selectors` argument that utilizes the values from both controls:

```php{14-16}
$this->add_control(
	'aspect-ratio-width',
	[
		'label' => esc_html__( 'Aspect Ratio Width', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::NUMBER,
	]
);

$this->add_control(
	'aspect-ratio-height',
	[
		'label' => esc_html__( 'Aspect Ratio Height', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::NUMBER,
		'selectors' => [
			'{{WRAPPER}} .custom-container img' => 'aspect-ratio: {{aspect-ratio-width.VALUE}} / {{aspect-ratio-height.VALUE}};'
		],
	]
);
```

### Complex Example

A more complex example is a `linear-gradient()` containing a single angle and multiple colors and stop-positions:

```css
background-image: linear-gradient(
	{{angle}},
	{{color1}} {{position1}},
	{{color2}} {{position2}},
	{{color3}} {{position3}}
);
```

In this case we will allow you to implement this by yourself so that you can practice.
