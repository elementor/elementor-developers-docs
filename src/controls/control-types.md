# Control Types

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor includes a wide array of controls out-of-the-box. Each control has a custom template and optional default settings, default values, and other methods that affect the output of the control in the panel.

## Base Controls

Elementor has several base controls extending the abstract base class, each built to serve a different purpose:

* [Data Controls](./data-controls/) – Controls that return a single value.
* [Multi Value Controls](./multi-value-controls/) – Controls that return multiple values.
* [Unit Controls](./unit-controls/) – Controls that return unit-based values.
* [UI Controls](./ui-controls/) – UI elements visible only in the panel that doesn't return values.
* [Group Controls](./group-controls/) – Grouping together several controls.

## Inheritance

Behind the scenes, the abstract base classes above are created by extending the `\Elementor\Base_Control` abstract class and inherit its properties and methods. All other controls you see in the editor extend those base controls.

```
Base_Control
|
├─ Base_Data_Control
|  ├─ ...
|  └─ ...
|
├─ Control_Base_Multiple
|  ├─ ...
|  └─ ...
|
├─ Control_Base_Units
|  ├─ ...
|  └─ ...
|
├─ Base_UI_Control
|  ├─ ...
|  └─ ...
|
└─ Group_Control_Base
   ├─ ...
   └─ ...
```
