# Advanced Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

A recent example of deprecation is standardizing the registration of [managers](./../managers/) in Elementor 3.5. In this instance, we simplified the process using easier and more intuitive naming conventions.

## Widgets

When [registering new widgets](./../managers/registering-widgets.md), we renamed the action hook name and the registration method:

```diff
function register_new_widgets( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/widget-1.php' );
	require_once( __DIR__ . '/widgets/widget-2.php' );

-	$widgets_manager->register_widget_type( new \Elementor_Widget_1() );
-	$widgets_manager->register_widget_type( new \Elementor_Widget_2() );
+	$widgets_manager->register( new \Elementor_Widget_1() );
+	$widgets_manager->register( new \Elementor_Widget_2() );

}
- add_action( 'elementor/widgets/widgets_registered', 'register_new_widgets' );
+ add_action( 'elementor/widgets/register', 'register_new_widgets' );
```

## Controls

When [registering new controls](./../managers/registering-controls/), we renamed the action hook and the registration method. We also removed the control name argument:

```diff
function register_new_controls( $controls_manager ) {

	require_once( __DIR__ . '/controls/control-1.php' );
	require_once( __DIR__ . '/controls/control-2.php' );

-	$controls_manager->register_control( 'control-name', new \Elementor_Control_1() );
-	$controls_manager->register_control( 'control-name', new \Elementor_Control_2() );
+	$controls_manager->register( new \Elementor_Control_1() );
+	$controls_manager->register( new \Elementor_Control_2() );

}
- add_action( 'elementor/controls/controls_registered', 'register_new_controls' );
+ add_action( 'elementor/controls/register', 'register_new_controls' );
```
