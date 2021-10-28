# Migrating Themes with Hooks

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Intermediate" />

In this example, we'll add [Elementor locations](./theme-locations) to the [original theme](./original-theme) using **hooks**. After migration, the theme will look as follows:

## Themes Files

The new `function.php` file:

```php
<?php
// Register Elementor locations
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {
	$elementor_theme_manager->register_location(
		'header',
		[
			'hook' => 'theme_prefix_header',
			'remove_hooks' => [ 'theme_prefix_print_elementor_header' ],
		]
	);
	$elementor_theme_manager->register_location(
		'footer',
		[
			'hook' => 'theme_prefix_footer',
			'remove_hooks' => [ 'theme_prefix_print_elementor_footer' ],
		]
	);
	$elementor_theme_manager->register_location(
		'single',
		[
			'hook' => 'theme_prefix_single',
			'remove_hooks' => [ 'theme_prefix_print_elementor_single' ],
		]
	);
	$elementor_theme_manager->register_location(
		'archive',
		[
			'hook' => 'theme_prefix_archive',
			'remove_hooks' => [ 'theme_prefix_print_elementor_archive' ],
		]
	);
}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );

// Theme header
function theme_prefix_print_elementor_header() {
	get_template_part( 'templates-parts/header' );
}
add_action( 'theme_prefix_header', 'theme_prefix_print_elementor_header' );

// Theme footer
function theme_prefix_print_elementor_footer() {
	get_template_part( 'templates-parts/footer' );
}
add_action( 'theme_prefix_footer', 'theme_prefix_print_elementor_footer' );

// Single page
function theme_prefix_print_elementor_single() {
	get_template_part( 'templates-parts/single' );
}
add_action( 'theme_prefix_single', 'theme_prefix_print_elementor_single' );

// Archive page
function theme_prefix_print_elementor_archive() {
	get_template_part( 'templates-parts/archive' );
}
add_action( 'theme_prefix_archive', 'theme_prefix_print_elementor_archive' );
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

<?php do_action( 'theme_prefix_header' ); ?>
```

The new `footer.php` file:

```php
<?php do_action( 'theme_prefix_footer' ); ?>

<?php wp_footer(); ?>

</body>
</html>
```

The new `archive.php` file:

```php
<?php
get_header();

do_action( 'theme_prefix_archive' );

get_footer();
```

The new `single.php` file:

```php
<?php
get_header();

do_action( 'theme_prefix_single' );

get_footer();
```
