# Elementor Finder

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

The finder component opens a popup search bar offering easy access to many pages and settings on the site. It can be used to create new posts, edit other pages, navigate to different setting pages, and more.

![Elementor finder](/assets/img/elementor-finder.png)

## Finder Structure

The finder contains an array of [categories](./finder-categories). Each category contains a number of **items**. Each item includes a label, a link and a set of keywords. When a user enters a search term, the finder filters the list of items based on the relevant keywords.

Learn more about the [finder structure](./finder-structure), its main class and the available methods.

## Extending the Finder

External developers can register their own custom finder categories with their own custom links. Learn more:

* [Add new finder items](./add-new-finder-items)
* [Add items to an existing category](./add-items-to-existing-category)
* [Remove finder categories](./remove-finder-categories)
* [Remove finder items](./remove-finder-items)

## Code Examples

Check out how easy it is to extend the finder:

* [Simple example](./simple-example)
* [Advanced example](./advanced-example)
