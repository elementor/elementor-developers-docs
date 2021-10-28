# Original Theme

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Intermediate" />

To simplify the theme migration process, we stripped all custom code from the original theme (including the WordPress loop), and moved it to the `/template-parts/` folder. This way the code snippets will be much shorter and simpler to understand.

## Original Files

Original `header.php` file:

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

<?php get_template_part( 'template-parts/header' ); ?>
```

Original `footer.php` file:

```php
<?php get_template_part( 'template-parts/footer' ); ?>

</body>
</html>
```

Original `index.php` file:

```php
<?php
get_header();

if ( is_archive() || is_home() || is_search() ) {
	get_template_part( 'template-parts/archive' );
} elseif ( is_singular() ) {
	get_template_part( 'template-parts/single' );
} else {
	get_template_part( 'template-parts/404' );
}

get_footer();
```

Original `archive.php` file:

```php
<?php
get_header();

get_template_part( 'template-parts/archive' );

get_footer();
```

Original `single.php` file:

```php
<?php
get_header();

get_template_part( 'template-parts/single' );

get_footer();
```

Original `404.php` file:

```php
<?php
get_header();

get_template_part( 'template-parts/404' );

get_footer();
```
