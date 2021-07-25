# Elementor Finder

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

The Finder component enables quick access to a search bar that pops up, giving you easy access to many pages and settings on the site. Users can create new posts from Elementor, edit other pages, navigate to different setting pages etc.

![Elementor Finder](/assets/img/elementor-finder.png)

## Finder Structure

Elementor Finder is an array of [Categories](./finder-categories). Each category has an array of **Items**. Each item includes a label, a link and a set of keywords. When a user enters a search term, the Finder filters the list of items based on the relevant keywords.

Learn more about the [Finder Structure](./finder-structure), its main class and the available methods.

## Extending the Finder

External developers can register their own custom Finder categories with their own custom links. Learn more how to do exactly that:

* [Add New Finder items](./add-new-finder-items)
* [Add Items to Existing Category](./add-items-to-existing-category)
* [Remove Finder Categories](./remove-finder-categories)
* [Remove Finder Items](./remove-finder-items)

## Code Examples

Learn by examples. See how easy it is to extend the Finder:

* [Simple Example](./simple-example)
* [Advanced Example](./advanced-example)
