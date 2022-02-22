# Dynamic Content

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor has the ability to replace the control output using [dynamic tags](../dynamic-tags/) to generated content programatically. Dynamic capabilities turn static controls into smart components. Helping users to add customized data from various sources to their site. Let's see how to set it up.

## Dynamic Argument

To set dynamic tags on Elementor controls, use the `dynamic` argument:

```php{6-8}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::TEXT,
		'dynamic' => [
			'active' => true,
		],
	]
);
```

<img :src="$withBase('/assets/img/elementor-dynamic-tag-indicator.png')" alt="Elementor Dynamic Tag Indicator" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

When a control has dynamic tags support, an additional icon is added to indicate to the user that he can replace the content with any dynamic tag.

## Dynamic Example

Let's see how a simple control can become dynamic:

```php{8-10,20-22,35-37,47-49,61-63}
$this->add_control(
	'heading',
	[
		'label' => esc_html__( 'Heading', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::TEXT,
		'placeholder' => esc_html__( 'Enter your heading', 'plugin-name' ),
		'label_block' => true,
		'dynamic' => [
			'active' => true,
		],
	]
);

$this->add_control(
	'content',
	[
		'label' => esc_html__( 'Content', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::TEXTAREA,
		'placeholder' => esc_html__( 'Enter your content', 'plugin-name' ),
		'dynamic' => [
			'active' => true,
		],
	]
);

$this->add_control(
	'count',
	[
		'label' => esc_html__( 'Count', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::NUMBER,
		'default' => 0,
		'min' => 0,
		'max' => 100,
		'step' => 1,
		'dynamic' => [
			'active' => true,
		],
	]
);

$this->add_control(
	'url',
	[
		'label' => esc_html__( 'Link', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::URL,
		'placeholder' => esc_html__( 'https://your-link.com', 'plugin-name' ),
		'dynamic' => [
			'active' => true,
		],
	]
);

$this->add_control(
	'image',
	[
		'label' => esc_html__( 'Choose Image', 'elementor' ),
		'type' => \Elementor\Controls_Manager::MEDIA,
		'default' => [
			'url' => \Elementor\Utils::get_placeholder_image_src(),
		],
		'dynamic' => [
			'active' => true,
		],
	]
);
```
