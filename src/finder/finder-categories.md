# Finder Categories

When using the finder it returns a set of links organized by categories, each category includes a set of links to different section on the site. For each search term entered by the user, the finder filters the list of links based on the relevant "keywords"

## Available Categories

By default, the Finder provides quick access to the following groups of links:

* **Create** (_`create`_) – Provides links related to creation of new posts/pages/templates etc.
* **Edit** (_`edit`_) – Provides links related to editing of new posts/pages/templates etc.
* **General** (_`general`_) – Provides general links related to Elementor.
* **Settings** (_`settings`_) – Provides links related to Elementor’s settings.
* **Tools** (_`tools`_) – Provides links related to Elementor’s tools.
* **Site** (_`site`_) – Provides general site links.

## Finder Hooks

Finder categories has two hooks developers can use:

* `elementor/finder/categories/init` action - Used to register new finder categories when the finder is initiated.
* `elementor/finder/categories` filter - Used to modify the finder categories array.
