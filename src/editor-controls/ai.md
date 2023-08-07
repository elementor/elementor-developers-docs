# AI

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

<img :src="$withBase('/assets/img/elementor-control-ai-button.png')" alt="Control AI Button" style="float: right;">

Elementor has added AI capabilities to a multitude of controls to empower users to elevate their websites with original or enhanced text, as well as custom codes (HTML & CSS), so that they can improve their productivity as web creators. Addon developers can choose whether to enable or disable the AI button. If enabled, they can control the AI capabilities.

## AI Capabilities

Elementor's AI solution lets users generate new content, or update existing content, as part of the editing experience. By clicking the AI button, a new dialog will display, which will allow users to write prompts that will create AI-generated content. Then, users can choose if they would like to add the content to the control they applied AI to, or make adjustments to it, like making it longer, shorter, changing its tone, and more.

## Supported Controls

Not all Editor controls support AI capabilities, for example switcher controls and select controls don’t have an AI button. However text-based controls, code controls and media controls have gotten a new AI button.

The following controls have an AI button by default:

* [Write with AI](#write-with-ai)
  * [Text control](./../editor-controls/control-text/)
  * [Textarea control](./../editor-controls/control-textarea/)
  * [WYSIWYG control](./../editor-controls/control-wysiwyg/)
* [Code with AI](#code-with-ai)
  * [Code control](./../editor-controls/control-code/)
* [Create with AI](#create-with-ai)
  * [Media control](./../editor-controls/control-media/)

Since in some cases you may not want to display the AI button on the supported control, you can choose to disable the AI button. For example, there is no sense to add an AI button on a text control that allows the user to set an Element ID. You can disable the AI button.

There may be an opposite case in which the control has no AI button by default, but you would like to add one. For example, when [creating new Elementor controls](./../controls/), with custom capabilities, that have text areas, where you want to allow web creators to insert AI generated content. You can add an AI button.

Furthermore, each control type triggers different prompt options and suggestions. While text controls are mainly used for generating either short titles or longer paragraphs, code suggestions are used for generating HTML & CSS code and media controls are generating images.

## AI Argument

To manage AI capabilities for Elementor controls, use the `ai` argument. It’s an array that accepts the following options:

| Name       | Description |
|------------| ----------- |
| `active`   | (`boolean`) Whether to display the AI button to the control, or not. |
| `type`     | (`string`) The type of the control and the AI prompt options. Available values are: `text`, `textarea`, `code` and `media`. |
| `language` | (`string`) Override code control language. Available values are: `html` and `css`. |

## Usage

Lets see a few live examples how to use the Elementor AI button to enhance editor controls.

### Write with AI

AI capabilities on text-based controls:

```php
// Text control with an AI button that generates short texts
$this->add_control(
	'title',
	[
		'label' => esc_html__( 'Title', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::TEXT,
	]
);

// Textarea control with an AI button that generates paragraphs
$this->add_control(
	'description',
	[
		'label' => esc_html__( 'Description', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::TEXTAREA,
	]
);

// WYSIWYG control with an AI button that generates paragraphs
$this->add_control(
	'content',
	[
		'label' => esc_html__( 'Content', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::WYSIWYG,
	]
);

// Textarea control with an AI button that generates short texts
$this->add_control(
	'subheading',
	[
		'label' => esc_html__( 'Subheading', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::TEXTAREA,
		'ai' => [
			'type' => 'text',
		],
	]
);

// Text control without an AI button
$this->add_control(
	'title-id',
	[
		'label' => esc_html__( 'Title ID', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::TEXT,
		'ai' => [
			'active' => false,
		],
	]
);

// Add AI button to custom controls
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Custom Element', 'textdomain' ),
		'type' => \My_Addon::CUSTUM_TEXT_CONTROL,
		'ai' => [
			'active' => true,
			'type' => 'text',
		],
	]
);
```

### Code with AI

AI capabilities that generates custom code:

```php
// Code control with an AI button that generates CSS
$this->add_control(
	'custom-css',
	[
		'label' => esc_html__( 'Custom CSS', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::CODE,
		'language' => 'css',
	]
);

// Code control with an AI button that generates HTML
$this->add_control(
	'custom-html',
	[
		'label' => esc_html__( 'Custom HTML', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::CODE,
		'language' => 'html',
	]
);

// Code control without an AI button
$this->add_control(
	'css',
	[
		'label' => esc_html__( 'CSS', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::CODE,
		'language' => 'css',
		'ai' => [
			'active' => false,
		],
	]
);

// Override control language for AI
$this->add_control(
	'html',
	[
		'label' => esc_html__( 'HTML', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::CODE,
		'language' => 'html',
		'ai' => [
			'language' => 'css',
		],
	]
);
```

### Create with AI

AI capabilities on media controls:

```php
// Media control without an AI button
$this->add_control(
	'background-image',
	[
		'label' => esc_html__( 'Choose Image', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::MEDIA,
		'ai' => [
			'active' => true,
		],

	]
);

// Media control with an AI button that generates background images
$this->add_control(
	'background-image',
	[
		'label' => esc_html__( 'Choose Image', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::MEDIA,
		'dynamic' => [
			'active' => true,
		],
		'ai' => [
			'category' => 'background',
		],

	]
);

// Media control with an AI button that generates 3D images
$this->add_control(
	'3d-cover-image',
	[
		'label' => esc_html__( 'Choose Image', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::MEDIA,
		'dynamic' => [
			'active' => true,
		],
		'ai' => [
			'category' => '3d',
		],

	]
);

// Media control with an AI button that generates photographic images
$this->add_control(
	'photo',
	[
		'label' => esc_html__( 'Choose Image', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::MEDIA,
		'dynamic' => [
			'active' => true,
		],
		'ai' => [
			'category' => 'photographic',
		],

	]
);

// Media control with an AI button that generates handmade images
$this->add_control(
	'drawings',
	[
		'label' => esc_html__( 'Choose Image', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::MEDIA,
		'dynamic' => [
			'active' => true,
		],
		'ai' => [
			'category' => 'handmade',
		],

	]
);

// Media control with an AI button that generates digital art
$this->add_control(
	'art-image',
	[
		'label' => esc_html__( 'Choose Image', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::MEDIA,
		'dynamic' => [
			'active' => true,
		],
		'ai' => [
			'category' => 'digital-art',
		],

	]
);
```

**Note**: Non-image [media types](./../editor-controls/control-media/#arguments) won't display the AI button as they are not supported.
