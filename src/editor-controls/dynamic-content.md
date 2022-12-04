# Dynamic Content

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor can replace control outputs using [dynamic tags](../dynamic-tags/) to generate content programmatically. Dynamic capabilities turn static controls into smart components. This helps users add customized data from various sources to their site. Let's see how to set this up.

## Dynamic Argument

Use the `dynamic` argument to set dynamic tags using Elementor controls:

```php{6-8}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::TEXT,
		'dynamic' => [
			'active' => true,
		],
	]
);
```

<img :src="$withBase('/assets/img/elementor-dynamic-tag-indicator.png')" alt="Elementor Dynamic Tag Indicator" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

When a control has dynamic tags support, an additional icon is added to indicate to the user that they can replace the content with any dynamic tag.

## Dynamic Example

Let's see how a simple control can become dynamic:

```php{8-10,20-22,35-37,47-49,61-63}
$this->add_control(
	'heading',
	[
		'label' => esc_html__( 'Heading', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::TEXT,
		'placeholder' => esc_html__( 'Enter your heading', 'textdomain' ),
		'label_block' => true,
		'dynamic' => [
			'active' => true,
		],
	]
);

$this->add_control(
	'content',
	[
		'label' => esc_html__( 'Content', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::TEXTAREA,
		'placeholder' => esc_html__( 'Enter your content', 'textdomain' ),
		'dynamic' => [
			'active' => true,
		],
	]
);

$this->add_control(
	'count',
	[
		'label' => esc_html__( 'Count', 'textdomain' ),
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
		'label' => esc_html__( 'Link', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::URL,
		'placeholder' => esc_html__( 'https://your-link.com', 'textdomain' ),
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
