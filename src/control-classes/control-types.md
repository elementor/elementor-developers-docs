# Control Types

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor includes a wide array of controls out-of-the-box. Each control has a custom template and optional default settings, default values, and other methods that affect the output of the control in the panel.

## Base Controls

Elementor has several base controls extending the abstract base class, each built to serve a different purpose:

* **Data Controls** – Controls that return a single value.
* **Multi Value Controls** – Controls that return multiple values.
* **Unit Controls** – Controls that return unit-based values.
* **UI Controls** – UI elements visible only in the panel that doesn't return values.
* **Group Controls** – Grouping together several controls.

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

## Extending Controls

### Extending Data Controls

To create your own data control, you need to extend the `\Elementor\Base_Data_Control` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Base_Data_Control {
}
```

### Extending Multi Value Controls

To create your own multivalue control, you need to extend the `\Elementor\Control_Base_Multiple` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Control_Base_Multiple {
}
```

### Extending Unit Controls

To create your own unit control, you need to extend the `\Elementor\Control_Base_Units` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Control_Base_Units {
}
```

### Extending UI Controls

To create your own UI controls, you need to extend the `\Elementor\Base_UI_Control` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Base_UI_Control {
}
```

### Extending Group Controls

To create your own group control, you need to extend the `\Elementor\Group_Control_Base` abstract class:

```php {1}
class Elementor_Test_Control extends \Elementor\Group_Control_Base {
}
```
