# Control Types

Elementor includes a wide array of controls out-of-the-box. Each control has a custom template and optional default settings, default values, and other methods that affect the output of the control in the panel.

## Base Controls

Elementor has several base controls extending the abstract base class, each built to serve a different purpose:

* [UI Controls](./ui-controls) – Control for creating UI controls visible only in the panel, they don’t return any value.
* [Data_Controls](./data-controls) – Control for creating data controls that returns a single value.
* [Multi Value Controls](./multi-value-controls) – Control for creating controls that returns multiple values.
* [Unit Controls](./unit-controls) – Control for creating unit control that returns unit based values.
* [Group Controls](./group-controls) – Control for creating group controls that group together several regular controls.

## Inheritance

Behind the since, the abstract base class above are created by extending the `\Elementor\Base_Control` abstract class an inherit its properties and methods. All other controls you see in the editor extend those base controls.

```
Base_Control
|
├─ Base_UI_Control
|  ├─ ...
|  └─ ...
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
└─ Group_Control_Base
   ├─ ...
   └─ ...
```
