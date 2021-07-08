# Widget Settings

Before the [widget rendering](./widget-rendering) function start generating the final HTML, it needs to retrieve the data from the controls.

In Elementor terminology, "*Widget Settings*" is all the "*User Data*" retrieved from the widget controls.

## Retrieving JS Settings

With JS templates we don’t really need to retrieve the data using a special function, it's done by Elementor for us. The data from the controls stored in `settings` variable.

```php
<?php
protected function _content_template() {
	?>
	<h3 class="{{{ settings.class }}}">{{{ settings.title }}}</h3>
	<?php
}
```

## Retrieving PHP Settings

When retrieving the data saved by the user we can either retrieve all data from all the controls of a piece of data from a specific control. The data retrieval is done using `get_settings_for_display()` method.

Retrieving data from a single control:

```php
protected function render() {
	echo '<h3>' . $this->get_settings_for_display( 'title' ) . '</h3>';
}
```

But when we need to retrieve data from multiple controls, we can retrieve all the data from all the controls into a single parameter:

```php
protected function render() {
	$settings = $this->get_settings_for_display();
	echo '<h3 class="' . $settings['class'] . '">' . $settings['title'] . '</h3>';
}
```

In both ways we get the same result, but keep in mind that the second way has performance benefits.
