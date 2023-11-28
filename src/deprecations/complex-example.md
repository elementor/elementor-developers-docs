# Complex Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

In Elementor 3.0, the limited Schemes mechanism had been replaced with [Globals](./../editor-controls/global-style/) which allows users to define limitless colors and typographies. Addons using schemes in their widgets controls should update their code.

## Schemes to Globals

To migrate from deprecated Schemes to the new Globals, developers should look for color and typography group controls, and changes them.

### Typography

Replace the following:

* `\Elementor\Core\Schemes\Typography::TYPOGRAPHY_1`
* `\Elementor\Core\Schemes\Typography::TYPOGRAPHY_2`
* `\Elementor\Core\Schemes\Typography::TYPOGRAPHY_3`
* `\Elementor\Core\Schemes\Typography::TYPOGRAPHY_4`

With:

* `\Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_PRIMARY`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_SECONDARY`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_TEXT`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_ACCENT`

Here is an example:

```diff
$this->add_group_control(
	\Elementor\Group_Control_Typography::get_type(),
	[
		'name' => 'heading_typography',
-		'scheme' => \Elementor\Core\Schemes\Typography::TYPOGRAPHY_1,
+		'global' => [
+			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_PRIMARY,
+		],
		'selector' => '{{WRAPPER}} .heading-class',
	]
);

$this->add_group_control(
	\Elementor\Group_Control_Typography::get_type(),
	[
		'name' => 'subheading_typography',
-		'scheme' => \Elementor\Core\Schemes\Typography::TYPOGRAPHY_2,
+		'global' => [
+			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_SECONDARY,
+		],
		'selector' => '{{WRAPPER}} .subheading-class',
	]
);

$this->add_group_control(
	\Elementor\Group_Control_Typography::get_type(),
	[
		'name' => 'text_typography',
-		'scheme' => \Elementor\Core\Schemes\Typography::TYPOGRAPHY_3,
+		'global' => [
+			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_TEXT,
+		],
		'selector' => '{{WRAPPER}} .text-class',
	]
);

$this->add_group_control(
	\Elementor\Group_Control_Typography::get_type(),
	[
		'name' => 'accent_typography',
-		'scheme' => \Elementor\Core\Schemes\Typography::TYPOGRAPHY_4,
+		'global' => [
+			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_ACCENT,
+		],
		'selector' => '{{WRAPPER}} .accent-class',
	]
);
```

### Colors

Replace the following:

* `\Elementor\Core\Schemes\Color::COLOR_1`
* `\Elementor\Core\Schemes\Color::COLOR_2`
* `\Elementor\Core\Schemes\Color::COLOR_3`
* `\Elementor\Core\Schemes\Color::COLOR_4`

With:

* `\Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_PRIMARY`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_SECONDARY`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_TEXT`
* `\Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_ACCENT`

Here is an example:

```diff
$this->add_control(
	'heading_color',
	[
		'label' => esc_html__( 'Heading Color', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::COLOR,
-		'scheme' => [
-			'type' => \Elementor\Core\Schemes\Color::get_type(),
-			'value' => \Elementor\Core\Schemes\Color::COLOR_1,
-		],
+		'global' => [
+			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_PRIMARY,
+		],
		'selectors' => [
			'{{WRAPPER}} .heading-class' => 'color: {{VALUE}};',
		],
	]
);

$this->add_control(
	'subheading_color',
	[
		'label' => esc_html__( 'Subheading Color', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::COLOR,
-		'scheme' => [
-			'type' => \Elementor\Core\Schemes\Color::get_type(),
-			'value' => \Elementor\Core\Schemes\Color::COLOR_2,
-		],
+		'global' => [
+			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_SECONDARY,
+		],
		'selectors' => [
			'{{WRAPPER}} .subheading-class' => 'color: {{VALUE}};',
		],
	]
);

$this->add_control(
	'text_color',
	[
		'label' => esc_html__( 'Text Color', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::COLOR,
-		'scheme' => [
-			'type' => \Elementor\Core\Schemes\Color::get_type(),
-			'value' => \Elementor\Core\Schemes\Color::COLOR_3,
-		],
+		'global' => [
+			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_TEXT,
+		],
		'selectors' => [
			'{{WRAPPER}} .text-class' => 'color: {{VALUE}};',
		],
	]
);

$this->add_control(
	'accent_color',
	[
		'label' => esc_html__( 'Accent Color', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::COLOR,
-		'scheme' => [
-			'type' => \Elementor\Core\Schemes\Color::get_type(),
-			'value' => \Elementor\Core\Schemes\Color::COLOR_4,
-		],
+		'global' => [
+			'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_ACCENT,
+		],
		'selectors' => [
			'{{WRAPPER}} .accent-class' => 'color: {{VALUE}};',
		],
	]
);
```
