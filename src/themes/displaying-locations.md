# Displaying Locations

Displaying Elementor locations in your theme is a simple process. The `elementor_theme_do_location()` function will display the location as defined by the user. In addition, theme developers can set fallback designs if a template was assigned to the location.

## Simple Location Display

Let’s see how this is done in an empty theme with a header and a footer. In this case, we're going to implement an `archive` location in our `archive.php` file:

```php
<?php
get_header();

// Elementor `archive` location
elementor_theme_do_location( 'archive' );

get_footer();
```

## Location with a Fallback Design

Some themes have default designs. Users will be able to show either; the custom archive locations designed in Elementor, or the regular theme layout, in case the user didn’t set an Elementor design for this location.

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

Many themes have sidebars. We can let the user design this area using Elementor. This is done by registering new “main-sidebar” locations.

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

This is a simple example. You can also add custom locations above the header for your top bars, custom locations for the footer, create your own content layout in single pages, and archive pages. These will allow the user to edit each location using Elementor. The possibilities are endless.
