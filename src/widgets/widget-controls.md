# Widget Controls

Each widget needs to have some controls (setting fields), where users can select their data. This data is saved in the database and later used to generate custom output based on user selection.

## Registering Controls

In your widget class you can add controls inside the `register_controls()` method as follows:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section();

		$this->add_control();

		$this->end_controls_section();

	}

}
```

* **Widget Controls** – The `register_controls()` method lets you define which controls (setting fields) your widget will have.

## Available Control Types

Elementor has three **Control Types** that can be added to widgets:

* [Regular Control](./regular-control) – add single control.
* [Responsive Control](./responsive-control) – a control that sets different values to different screen sizes.
* [Group Control](./group-control) – add control that group together several regular controls.

Elementor also has **Control UI Wrappers** that can be used to group and rearranged controls:

* [Control Section](./control-section) – a wrapper for controls.
* [Control Tabs](./control-tabs) – arrange controls in tabs.
* [Control Popovers](./control-popovers) – toggle popover control.

## Control Methods

Elementor controls have a *single method* that registers a settings field. UI wrappers for controls have *two/four methods* that wrap other controls.

Available Methods:

* **Regular Control** - `add_control()`
* **Responsive Control** - `add_responsive_control()`
* **Group Control** - `add_group_control()`
* **Control Section** - `start_controls_section()` & `end_controls_section()`
* **Control Tabs** - `start_controls_tabs()` & `end_controls_tabs()` & `start_controls_tab()` & `end_controls_tab()`
* **Control Popovers** - `start_popover()` & `end_popover()`
