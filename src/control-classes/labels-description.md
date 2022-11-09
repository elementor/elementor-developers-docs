# Labels and Description

Controls are simply input fields where users fill the data. Each control can have a label that appears above the field and a short description appears below the field. The control mechanism in the editor has special arguments that help developers set those fields and style them.

## Basic Arguments

Each control in the editor accept the folowing arguments:

```php{5-6}
$this->add_control(
	'unique-control-name',
	[
		'type' => \Elementor\Controls_Manager::TEXT,
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'description' => esc_html__( 'Short control description.', 'textdomain' ),
		'show_label' => false,
		'label_block' => false,
		'separator' => 'after'
	]
);
```

| Name          | Description |
|---------------| ----------- |
| `type`        | (`string`) The type of the control. |
| `label`       | (`string`) The label that appears before/above of the field. |
| `description` | (`string`) The description that appears below the field. |
| `show_label`  | (`bool`)   Whether to display the label. Default is `true`. |
| `label_block` | (`bool`)   Whether to display the label in a separate line. Default is `false`. |
| `separator`   | (`string`) Set the position of the control separator. Available values are: <ul><li> `default` will position the separator depending on the control type.</li><li> `before` / `after` will position the separator before/after the control.</li><li> `none` will hide the separator.</li></ul> Default is `default`. |

### Label

<img :src="$withBase('/assets/img/controls/control-field-label.png')" alt="Elementor Control - Label View" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

Control label represents the field caption in the editor. It's a string that helps user to understand what the control represents. It also aids people who use screen readers or other assistive technologies.

```php{5}
$this->add_control(
	'unique-control-name',
	[
		'type' => \Elementor\Controls_Manager::TEXT,
		'label' => esc_html__( 'Control Label', 'textdomain' ),
	]
);
```

### Label Block

<img :src="$withBase('/assets/img/controls/control-field-label-block.png')" alt="Elementor Control - Label Block" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

Control labels and input fields are placed side-by-side in the same row. Developers can choose to style controls differently, and stack them one on top of the other instead of the side-by-side.

```php{6}
$this->add_control(
	'unique-control-name',
	[
		'type' => \Elementor\Controls_Manager::TEXT,
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'label_block' => true,
	]
);
```

### Show Label

<img :src="$withBase('/assets/img/controls/control-field-label-hidden.png')" alt="Elementor Control - Hidden Label" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

By default all control labels are displayed in the editor. Developers can choose to hide label, leaving only the input field. Please note, for accessibility reasons, the label is not removed, it's only visually hidden.

```php{6}
$this->add_control(
	'unique-control-name',
	[
		'type' => \Elementor\Controls_Manager::TEXT,
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'show_label' => false,
	]
);
```

### Description

<img :src="$withBase('/assets/img/controls/control-field-description.png')" alt="Elementor Control - Field Description" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

Control description is a simple text that appears below the field, providing the user more information about the control. The description displayed on a seperate row, whether the label and the field are displayed in the same row, or stacked one on top of the other.

```php{6}
$this->add_control(
	'unique-control-name',
	[
		'type' => \Elementor\Controls_Manager::TEXT,
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'description' => esc_html__( 'Short control description.', 'textdomain' ),
	]
);
```

### Separator

Set the position of the control separator. Available values are:

* `default` will position the separator depending on the control type.
* `before` / `after` will position the separator before/after the control.
* `none` will hide the separator.

This argument is usefull when seperating between two more controls.
