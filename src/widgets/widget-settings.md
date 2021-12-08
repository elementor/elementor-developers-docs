# Widget Settings

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Before the [widget rendering](./widget-rendering/) function starts generating the final HTML output, it needs to retrieve data from the controls.

In Elementor terminology, "*widget settings*" are the "*user data*" retrieved from the widget controls.

## Retrieving JS Settings

With JS templates we don’t need to retrieve the data using a special function, it's done by Elementor for us. Data from the controls is stored in the `settings` variable and can be retrieved like this:

```php
<?php
protected function content_template() {
	?>
	<h3 class="{{{ settings.class }}}">{{{ settings.title }}}</h3>
	<?php
}
```

## Retrieving PHP Settings

When retrieving data saved by the user, we can either retrieve all the data from all the controls or specific data from a specific control. Data retrieval is done using `get_settings_for_display()` method.

Use the following to retrieve data from a single control:

```php
<?php
protected function render() {
	?>
	<h3>
		<?php echo $this->get_settings_for_display( 'title' ); ?>
	</h3>
	<?php
}
```

When retrieving data from multiple controls, we can retrieve all the data from all the controls into a single parameter:

```php
<?php
protected function render() {
	$settings = $this->get_settings_for_display();
	?>
	<h3 class="<?php echo esc_attr( $settings['class'] ); ?>">
		<?php echo $settings['title']; ?>
	</h3>
	<?php
}
```

Either way achieves the same result, however, in some cases the second method has performance benefits.
