# Displaying Locations

To display Elementor Locations in your theme is a simple posses. The `elementor_theme_do_location()` function will display the location defined by the user. In addition, theme developers can set fallback designs if on template was assigned to the location.

## Simple Location Display

Let’s see how it is done in an empty theme with a header and a footer. We are going to implement an `archive` location in our `archive.php` file:

```php
<?php
get_header();

// Elementor `archive` location
elementor_theme_do_location( 'archive' );

get_footer();
```

## Location with Fallback Design

Some themes have default design. We want to allow the user either to show custom archive locations designed in Elementor, or the regular theme layout if the user didn’t set any Elementor design to this location.

```php
<?php
get_header();

// Elementor `archive` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'archive' ) ) {
	get_template_part( 'template-parts/archive' );
}

get_footer();
```

## Custom Location Display

Many themes have sidebars, we can let the user design this area using Elementor. This can be done by registering new “main-sidebar” location.

```php
<?php get_header(); ?>

<div id="primary" class="content-area">

	<main id="main" class="site-main" role="main">
		<?php
		// Elementor `single` location
		if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'single' ) ) {
			get_template_part( 'template-parts/single' );
		}
		?>
	</main>

	<aside id="secondary" class="sidebar" role="complementary">
		<?php
		// Elementor `main-sidebar` location
		if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'main-sidebar' ) ) {
			get_sidebar( 'main' );
		}
		?>
	</aside>

</div>

<?php get_footer(); ?>
```

This is a simple example, you can add custom locations above the header for your top bars, custom locations for the footer, create your own content layout in single pages and archive pages giving the user to ability to edit each locations using Elementor. The possibilities are endless.
