# Global Style

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor users can set global styles using the [site settings panel](../editor/site-settings-panel/). The controls mechnism in the editor has a special functionality that allows the user to set custom styling or inherit global styles. Let's see how to set it up.

## Global Argument

To set global styles on Elementor controls, use the `global` argument in any color or typography control:

```php{6-8}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'global' => [
			// ...
		],
	]
);
```

<img :src="$withBase('/assets/img/elementor-global-style-indicator.png')" alt="Elementor Global Style Indicator" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

When setting a `global` argument on controls, the control has an additional globe icon which indicates to the user that he can either use one of the defined global styles or set a custom style.

## Available Global Styles

Site settings panel is where the user defines the sites design system. Currently Elementor design system has support for:

<img :src="$withBase('/assets/img/elementor-design-system.png')" alt="Elementor Design System" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

* **Global Colors**
* **Global Fonts**

Elementor offers 4 default colors and 4 default typography sets to which users can add their own colors and typographies.

### Global Colors

* `\Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_PRIMARY`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_SECONDARY`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_TEXT`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_ACCENT`

### Global Fonts

* `\Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_PRIMARY`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_SECONDARY`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_TEXT`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_ACCENT`

## Global Example

Let's see how a control can inherit global styles from the sites design system defined by the user in the site settings panel:

```php{9-11,23-25,37-39,48-50,59-61,70-72}
$this->add_control(
	'heading_color',
	[
		'label' => esc_html__( 'Heading Color', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'selectors' => [
			'{{WRAPPER}} .heading-class' => 'color: {{VALUE}};',
		],
		'global' => [
			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_PRIMARY,
		],
	]
);

$this->add_control(
	'sub_heading_color',
	[
		'label' => esc_html__( 'Sub Heading Color', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'selectors' => [
			'{{WRAPPER}} .sub-heading-class' => 'color: {{VALUE}};',
		],
		'global' => [
			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_SECONDARY,
		],
	]
);

$this->add_control(
	'content_color',
	[
		'label' => esc_html__( 'Content Color', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'selectors' => [
			'{{WRAPPER}} .content-class' => 'color: {{VALUE}};',
		],
		'global' => [
			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_TEXT,
		],
	]
);

$this->add_group_control(
	\Elementor\Group_Control_Typography::get_type(),
	[
		'name' => 'heading_typography',
		'selector' => '{{WRAPPER}} .heading-class',
		'global' => [
			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_PRIMARY,
		],
	]
);

$this->add_group_control(
	\Elementor\Group_Control_Typography::get_type(),
	[
		'name' => 'sub_heading_typography',
		'selector' => '{{WRAPPER}} .sub_heading-class',
		'global' => [
			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_SECONDARY,
		],
	]
);

$this->add_group_control(
	\Elementor\Group_Control_Typography::get_type(),
	[
		'name' => 'content_typography',
		'selector' => '{{WRAPPER}} .content-class',
		'global' => [
			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_TEXT,
		],
	]
);
```

In conclusion, you can set whether the controls will be able to inherit global styles from the sites design system, and if so what type it will inherit (primary, secondary, text or accent).
