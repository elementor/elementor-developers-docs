# Themes

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Intermediate" />

**Elementor Pro 2.0** introduced the **Theme Builder**. This feature transformed Elementor from a regular *page-builder* to a full *site-builder*.

## Overview

Previously, Elementor was a regular page-builder working only with areas inside [the_content()](https://developer.wordpress.org/reference/functions/the_content/) of a single page. You couldn’t really use Elementor to set global headers, global footers, design custom archive pages, search results, author pages, 404 pages etc.

The new "Theme Builder" functionality changed everything! The weight has shifted from theme developers to the users. Users no longer need to rely on pre-designed themes, the can design their own layouts using simple drag-and-drop functionality without any code.

You would expect a decline in theme usage but surprisingly themes that adopted the change saw an increase in overall usage and total downloads.

Every theme developer can make his theme **Elementor Compatible** by supporting the **Theme Locations** functionality. You just need to add a few lines of code that wrap some elements. It will help Elementor replace theme elements with Elementor designs in case the user prefers to create his own designs.

## Elementor Compatibility

Learn how to develop "Elementor Compatible" themes:

* [Theme Locations](./theme-locations)
* [Registering Locations](./registering-locations)
* [Displaying Locations](./displaying-locations)

## Theme Migration

Learn by examples. See how easy it is to migrate an existing theme and add Elementor support:

* [Migrating Themes](./migrating-themes)
* [Original Theme](./original-theme)
* [Migrating Themes with Functions](./migrating-themes-with-functions)
* [Migrating Themes with Hooks](./migrating-themes-with-hooks)
