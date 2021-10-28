# Migrating Themes with Functions

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Intermediate" />

In this example, we'll add [Elementor locations](./theme-locations) to the [original theme](./original-theme) using simple **functions**. After migration, the theme will look as follows:

## Themes Files

The new `function.php` file:

```php
<?php
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {

	$elementor_theme_manager->register_all_core_location();

}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );
```

The new `header.php` file:

```php
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php
// Elementor `header` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'header' ) ) {
	get_template_part( 'template-parts/header' );
}
```

The new `footer.php` file:

```php
<?php
// Elementor `footer` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'footer' ) ) {
	get_template_part( 'template-parts/footer' );
}

wp_footer();
?>

</body>
</html>
```

The new `index.php` file:

```php
<?php
get_header();

if ( is_archive() || is_home() || is_search() ) {
	// Elementor `archive` location
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'archive' ) ) {
		get_template_part( 'template-parts/archive' );
	}
} else ( is_singular() ) {
	// Elementor `single` location
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'single' ) ) {
		get_template_part( 'template-parts/single' );
	}
} else {
	// Elementor `404` location
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'single' ) ) {
		get_template_part( 'template-parts/404' );
	}
}

get_footer();
```

The new `archive.php` file:

```php
<?php
get_header();

// Elementor `archive` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'archive' ) ) {
	get_template_part( 'template-parts/archive' );
}

get_footer();
```

The new `single.php` file:

```php
<?php
get_header();

// Elementor `single` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'single' ) ) {
	get_template_part( 'template-parts/single' );
}

get_footer();
```

The new `404.php` file:

```php
<?php
get_header();

// Elementor `single` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'single' ) ) {
	get_template_part( 'template-parts/404' );
}

get_footer();
```

The new `search.php` file:

```php
<?php
get_header();

// Elementor `archive` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'archive' ) ) {
	get_template_part( 'template-parts/search' );
}

get_footer();
```
