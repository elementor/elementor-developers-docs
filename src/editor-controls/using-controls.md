# Using Controls

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Controls can be used inside Elementor widgets or Elementor panels. Controls used by end users to select their data. This data is saved in the database and later used to generate custom output based on the user's selection.

## Registering Controls

In your widget class, you can add controls inside the `register_controls()` method as follows:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section();

		$this->add_control();

		$this->add_responsive_control();

		$this->add_group_control();

		$this->end_controls_section();

	}

}
```

## Available Control Types

Elementor has three **control types** that can be added to widgets:

* [Regular Control](./regular-control/) – adds a single control.
* [Responsive Control](./responsive-control/) – adds a control that sets different values for different screen sizes.
* [Group Control](./group-control/) – adds a control that groups together several other controls.

Elementor also has **UI wrappers for controls** that can be used to group and rearrange controls:

* [Control Section](./control-section/) – a wrapper for controls.
* [Control Popovers](./control-popovers/) – a wrapper that toggles popover control.
* [Control Tabs](./control-tabs/) – a wrapper that arranges controls in tabs.

## Control Methods

Elementor controls have a *single method* that registers a settings field. UI wrappers for controls have *two/four methods* that wrap other controls.

Available methods:

* **Regular Control** - `add_control()`
* **Responsive Control** - `add_responsive_control()`
* **Group Control** - `add_group_control()`
* **Control Section** - `start_controls_section()` & `end_controls_section()`
* **Control Popovers** - `start_popover()` & `end_popover()`
* **Control Tabs** - `start_controls_tabs()` & `end_controls_tabs()` & `start_controls_tab()` & `end_controls_tab()`
