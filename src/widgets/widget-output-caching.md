## Widget Output Caching

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers a feature to minimize the impact of widgets on page performance. For widgets that generate static output, Elementor can cache the HTML, avoiding the need to render it each time the page loads.

By default, Elementor does not cache widget outputs and renders all widgets on the page with every page load. However, developers can enable HTML output caching for widgets to enhance loading speeds.

## Widgets Rendering Mechanism

During page load, Elementor renders all widgets to generate the required markup. The more widgets the page has, the slower the rendering process.

To optimize this, Elementor's widget caching mechanism can be employed. This mechanism renders a widget once, caches the output, and uses the cached version for subsequent page loads. This reduces server memory usage by 99% and improves Time To First Byte (TTFB) on the frontend.

### Content Types

Widgets can return two types of output:

* **Static Content** - return the same content each time, for every user.
* **Dynamic Content** - return content that may change based on different parameters.

A static content example is a heading widget that consistently returns the text from a control. Since the output is identical for all users, it can be cached.

In contrast, dynamic content involves logic that alters the output based on different conditions. For example, a widget that includes a PHP function to display the user's name will show different results for different users, thus the widget should not cache the output.

An extreme case of dynamic content is a widget that displays a random number on each page load. Such a widget should not cache its output.

The widget caching mechanism in Elementor is sophisticated and includes several exceptions to avoid inappropriate caching. For instance, if one of the widget controls uses a dynamic tag or has a display condition, Elementor will bypass the cache, fully rendering the widget.

### Caching Output

To enhance widget performance by caching static content, apply the following method to the widget class:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function is_dynamic_content() {
		return false;
	}

}
```

Using the code above, the widget instructs Elementor to cache its output if it generates static content.

By default, all widgets are treated as dynamic and are not cached. If you are not sure, avoid using this method.

### Exceptions

The widget caching mechanism in Elementor is sophisticated and includes several exceptions to avoid inappropriate caching. For instance, if one of the widget controls uses a dynamic tag or has a display condition, Elementor will bypass the cache, fully rendering the widget.

## Examples

### A Widget With a Static Output

Let's say you have a widget with a single control in which the users can set a "title". The render function will always render the same HTML for all the users, therefore the output can be cached:

```php {4-6,38-40,51-53}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function is_dynamic_content() {
		return false;
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'title',
			[
				'label' => esc_html__( 'Title', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your title', 'textdomain' ),
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['title'] ) ) {
			return;
		}
		?>
		<h3>
			<?php echo $settings['title']; ?>
		</h3>
		<?php
	}

	protected function content_template() {
		?>
		<#
		if ( '' === settings.title ) {
			return;
		}
		#>
		<h3>
			{{{ settings.title }}}
		</h3>
		<?php
	}

}
```

### A Widget With a Dynamic Output

Let's say you have the same widget, but the render function has custom code that may produce different HTML far different users, therefore the output can't be cached:

```php {34-36,38-40,51-53,55-57}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'title',
			[
				'label' => esc_html__( 'Title', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your title', 'textdomain' ),
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['title'] ) ) {
			return;
		}

		if ( is_user_logged_in() ) {
			$greeting = esc_html__( 'Hi logged in user!', 'textdomain' ) . ' ';
		}
		?>
		<h3>
			<?php echo $greeting . $settings['title']; ?>
		</h3>
		<?php
	}

	protected function content_template() {
		?>
		<#
		if ( '' === settings.title ) {
			return;
		}

		if ( document.body.classList.contains( 'logged-in' ) ) {
			greeting = 'Hi logged in user! ';
		}
		#>
		<h3>
			{{{ greeting + settings.title }}}
		</h3>
		<?php
	}

}
```

This widget generates different HTML output for logged-in users and anonymous users. We can't cache the widget output as the cached HTML may be displayed for the wrong users.
