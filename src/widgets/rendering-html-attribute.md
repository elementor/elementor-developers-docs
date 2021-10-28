# Rendering HTML Attributes

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

This type of rendering is used to add render attributes to specific HTML elements. For example, a widget can add a new `<div>` tag with a hardcoded "class" attribute or add a new `<a>` tag with hardcoded "target" and "rel" attributes. When used, you need to add `if` statements to check whether or not there are classes/target/rel attributed before adding them to the HTML tag. In addition, you need to escape user data with `esc_attr()` to improve security.

Elementor offers another way to add HTML attributes using the `add_render_attribute()` and `get_render_attribute_string()` methods.

## Simple Widget Output

Let's look at a simple widget output:

```html
<div id="" class="" role="" aria-label=""> ... </div>
```

## PHP Render Attribute

Using the `render()` method, we can add attributes to the HTML tag using `add_render_attribute()` and retrieve the attribute using `get_render_attribute_string()`:

```php
<?php
protected function render() {

	$this->add_render_attribute(
		'wrapper',
		[
			'id' => 'custom-widget-id',
			'class' => [ 'custom-widget-wrapper-class', settings['custom_class'] ],
			'role' => settings['role'],
			'aria-label' => settings['name'],
		]
	);
	?>
	<div <?php echo $this->get_render_attribute_string( 'wrapper' ); ?>> ... </div>
	<?php

}
```

## JS Render Attribute

Using the `content_template()` method, we can add attributes to the HTML tag using `addRenderAttribute()` and retrieve the attribute using `getRenderAttributeString()`:

```php
<?php
protected function content_template() {
	?>
	<#
	view.addRenderAttribute(
		'wrapper',
		{
			'id': 'custom-widget-id',
			'class': [ 'elementor-tab-title', settings.custom_class ],
			'role': settings.role,
			'aria-label': settings.name,
		}
	);
	#>
	<div {{{ view.getRenderAttributeString( 'wrapper' ) }}}> ... </div>
	<?php
}
```
