# Rendering Inline Editing

When developing widgets, developers can define which controls will be inline editable, outside of the Editor in Elementor Preview.

<iframe width="560" height="315"src="https://www.youtube.com/embed/miNu2oONgYI" frameborder="0" allowfullscreen></iframe>

## Inline Editing Toolbars

Elementor supports the following types of toolbars for inline editing:

* **No Toolbar** – `(none)` Inline text editing without a toolbar, just typing text inline.
* **Basic Toolbar** – `(basic)` Inline text editing with a minimal toolbar, including: bold, italic and underline buttons.
* **Advanced Toolbar** – `(advanced)` Inline text editing with a full toolbar, including: adding/removing links, H1-H6 heading, blockquote, preformatting and bulleted or numbered list buttons.

![Inline Editing Example](/assets/img/inline-editing-example.png)

Keep in mind that we recommend to use inline editing the following way:

* **Input controls** – use inline editing without any toolbars in simple text/number/url/email fields.
* **Textarea controls** – use inline editing with a minimal toolbar.
* **Wysiwyg controls** – use inline editing with a full toolbar.

## Adding Inline Editing

Inline editing support is added using the `add_inline_editing_attributes()` method inside your widget `render()` and the `addInlineEditingAttributes()` method in `content_template()`.

Each inline editing attribute has two parameters:

* **Key** `(string)` – Unique name used in the code.
* **Toolbar** `(string)` – Toolbar type. Accepted values are: `advanced`, `basic` or `none`. Default is `none`.

Adding a new inline editing attributes is done as follows:

```php {5-6,11-12}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function render() {
		$this->add_inline_editing_attributes( 'text', 'advanced' );
		echo '<div ' . $this->get_render_attribute_string( 'text_attr' ) . '>' . $this->get_settings( 'text' ) . '</div>';
	}

	protected function content_template() {
		?>
		<# view.addInlineEditingAttributes( 'text', 'advanced' ); #>
		<div {{{ view.getRenderAttributeString( 'text' ) }}}>{{{ settings.text }}}</div>
		<?php
	}

}
```

## Example Inline Editing

Full example with three controls all having inline support. A simple text without a toolbar only inline editing, a textarea with a basic toolbar and a wysiwyg with advanced toolbar:

```php {48-50,52-54,61-63,65-67}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'title',
			[
				'label' => __( 'Title', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( 'Title', 'plugin-name' ),
			]
		);

		$this->add_control(
			'description',
			[
				'label' => __( 'Description', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'default' => __( 'Description', 'plugin-name' ),
			]
		);

		$this->add_control(
			'content',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'default' => __( 'Content', 'plugin-name' ),
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$this->add_inline_editing_attributes( 'title', 'none' );
		$this->add_inline_editing_attributes( 'description', 'basic' );
		$this->add_inline_editing_attributes( 'content', 'advanced' );
		?>
		<h2 <?php echo $this->get_render_attribute_string( 'title' ); ?>><?php echo $settings['title']; ?></h2>
		<div <?php echo $this->get_render_attribute_string( 'description' ); ?>><?php echo $settings['description']; ?></div>
		<div <?php echo $this->get_render_attribute_string( 'content' ); ?>><?php echo $settings['content']; ?></div>
		<?php
	}

	protected function content_template() {
		?>
		<#
		view.addInlineEditingAttributes( 'title', 'none' );
		view.addInlineEditingAttributes( 'description', 'basic' );
		view.addInlineEditingAttributes( 'content', 'advanced' );
		#>
		<h2 {{{ view.getRenderAttributeString( 'title' ) }}}>{{{ settings.title }}}</h2>
		<div {{{ view.getRenderAttributeString( 'description' ) }}}>{{{ settings.description }}}</div>
		<div {{{ view.getRenderAttributeString( 'content' ) }}}>{{{ settings.content }}}</div>
		<?php
	}

}
```
