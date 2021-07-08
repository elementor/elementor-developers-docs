# Elementor Finder

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

The Finder component enables quick access to a search bar that pops up, giving you easy access to many pages and settings on the site. Users can create new posts from Elementor, edit other pages, navigate to different setting pages etc.

## How it Works

When using the finder it returns a set of links organized by categories, each category includes a set of links to different section on the site. For each search term entered by the user, the Finder filters the list of links based on the relevant "keywords".

## Finder Categories

By default, the Finder provides quick access to the following groups of links:

* **Create** – Provides links related to creation of new posts/pages/templates etc.
* **Edit** – Provides links related to editing of new posts/pages/templates etc.
* **General** – Provides general links related to Elementor.
* **Settings** – Provides links related to Elementor’s settings.
* **Tools** – Provides links related to Elementor’s tools.
* **Site** – Provides general site links.

## Extending the Finder

External developers can register their own custom Finder categories with their own custom links. Learn more how to do exactly that:

* [Finder Structure](./finder-structure)
* [Add New Finder items](./add-new-finder-items)
* [Register New Category](./register-new-category)

Developers can also remove an entire Finder categories or a specific item:

* [Remove Finder Categories](./remove-finder-categories)
* [Remove Finder Items](./remove-finder-items)

## Code Examples

Learn by examples. See how easy it is to extend the Finder:

* [Simple Example](./simple-example)
* [Advanced Example](./advanced-example)
