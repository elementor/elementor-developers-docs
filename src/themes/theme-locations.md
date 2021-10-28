# Theme Locations

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Intermediate" />

**Theme Builder** only works if the theme has registered **theme locations**. This signals to Elementor that the theme supports global headers / footers, custom archive pages or single pages. Themes can support all core locations, some locations or create their own custom locations.

## Available Locations

Following are the Elementor locations:

* **Header** – template header replaces the theme `header.php` file.
* **Footer** – template footer replaces the theme `footer.php` file.
* **Single** – template content replaces the theme `singular.php`, `single.php`, `page.php`, `attachment.php` and `404.php` files.
* **Archive** – template archive replaces the theme `archive.php`, `taxonomy.php`, `author.php`, `date.php` and `search.php` files.










<!--

## Best Practice

To prevent compatibility issues, your theme should:

1. **Use [wp_head](https://developer.wordpress.org/reference/hooks/wp_head/) and [wp_footer](https://developer.wordpress.org/reference/hooks/wp_footer/) action hooks to add custom code to the theme.**

Because of the way Elementor works, themes that don’t support header / footer locations are defined by Elementor as “unsupported” themes. With unsupported themes, Elementor will replace the entire header.php and footer.php files. This can cause issues with themes that add custom code to the theme files instead of using the [wp_head](https://developer.wordpress.org/reference/hooks/wp_head/) and [wp_footer](https://developer.wordpress.org/reference/hooks/wp_footer/) action hooks.

2. **Use header and footer locations together.**

We require both headers and footers to be implemented together, because most themes have an opening DIV tag in the `header.php` file and a closing tag in the `footer.php` file. If Elementor replaces the original footer file without the header, some DIV tags will remain open, causing UI issues.

-->
