# Finder Categories

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

The finder returns a set of links organized by categories. Each category includes links to different sections on the site. For each search term entered by the user, the finder filters the list of links based on the relevant "keywords."

## Available Categories

By default, the finder provides quick access to the following groups of links:

* **Create** (_`create`_) – Provides links related to creating new posts/pages/templates etc.
* **Edit** (_`edit`_) – Provides links related to editing posts/pages/templates etc.
* **General** (_`general`_) – Provides general links related to Elementor.
* **Settings** (_`settings`_) – Provides links related to Elementor’s settings.
* **Tools** (_`tools`_) – Provides links related to Elementor’s tools.
* **Site** (_`site`_) – Provides links related to the site.

## Finder Hooks

Finder categories have two hooks developers can use:

* `elementor/finder/register` action - Used to register new finder categories.
* `elementor/finder/categories` filter - Used to modify the finder categories array.
