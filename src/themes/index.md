# Theme Locations

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Intermediate" />

**Elementor Pro 2.0** introduced a **theme builder**. This feature transformed Elementor from a *page-builder* to a full *site-builder*.

## Overview

Before the release of **Elementor Pro 2.0**, Elementor was a page-builder, only affecting [the_content()](https://developer.wordpress.org/reference/functions/the_content/) of a single page. Elementor couldn't set global headers, global footers, design custom archive pages, search results, author pages, 404 pages etc.

The new theme builder functionality changed everything! It has greatly empowered users. They no longer have to rely on pre-designed themes, as they can design their own layouts using simple drag-and-drop functionality without any code.

Despite this development, theme usage did not drop. In fact, themes that adapted to this development saw an increase in overall usage and total downloads.

Every theme developer can make their theme **Elementor compatible** by supporting the **theme locations** functionality. They just need to add a few lines of code wrapping some elements. This will help Elementor replace theme elements with Elementor designs, allowing users to create their own designs.

## Available Locations

Themes can support all core locations, some locations or create their own custom locations. The following are the builtin Elementor locations:

* **Header** – template header replaces the theme `header.php` file.
* **Footer** – template footer replaces the theme `footer.php` file.
* **Single** – template content replaces the theme `singular.php`, `single.php`, `page.php`, `attachment.php` and `404.php` files.
* **Archive** – template archive replaces the theme `archive.php`, `taxonomy.php`, `author.php`, `date.php` and `search.php` files.

## Managing Locations

Learn how to develop "Elementor Compatible" themes:

* [Registering Locations](./registering-locations/)
* [Displaying Locations](./displaying-locations/)

## Theme Migration

Check out these examples to see how easy it is to migrate an existing theme and add Elementor support:

* [Migrating Themes](./migrating-themes/)
* [Original Theme](./original-theme/)
* [Migrating Themes with Functions](./migrating-themes-with-functions/)
* [Migrating Themes with Hooks](./migrating-themes-with-hooks/)
