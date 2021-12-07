# Themes

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Intermediate" />

**Elementor Pro 2.0** introduced a **theme builder**. This feature transformed Elementor from a *page-builder* to a full *site-builder*.

## Overview

Before the release of **Elementor Pro 2.0**, Elementor was a page-builder, only affecting [the_content()](https://developer.wordpress.org/reference/functions/the_content/) of a single page. Elementor could not set global headers, global footers, design custom archive pages, search results, author pages, 404 pages etc.

The new theme builder functionality changed everything! It has greatly empowered users. They no longer have to rely on pre-designed themes, as they can design their own layouts using simple drag-and-drop functionality without any code.

Despite this development, theme usage did not drop. In fact, themes that adapted to this development saw an increase in overall usage and total downloads.

Every theme developer can make their theme **Elementor compatible** by supporting the **theme locations** functionality. They just need to add a few lines of code wrapping some elements. This will help Elementor replace theme elements with Elementor designs, allowing users to create their own designs.

## Elementor Compatibility

Learn how to develop "Elementor Compatible" themes:

* [Theme Locations](./themes/theme-locations)
* [Registering Locations](./themes/registering-locations)
* [Displaying Locations](./themes/displaying-locations)

## Theme Migration

Check out these examples to see how easy it is to migrate an existing theme and add Elementor support:

* [Migrating Themes](./themes/migrating-themes)
* [Original Theme](./themes/original-theme)
* [Migrating Themes with Functions](./themes/migrating-themes-with-functions)
* [Migrating Themes with Hooks](./themes/migrating-themes-with-hooks)
