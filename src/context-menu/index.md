# Elementor Context Menu

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

A context menu is a popup menu that appears when users right click an element in the [Elementor preview](./../editor/elementor-preview/) area. This popup menu offers a set of available actions based on location or the selected element. That is why it is called a context menu.

<img :src="$withBase('/assets/img/elementor-context-menu.png')" alt="Elementor Context Menu">

## Context Menu Structure

Elementor has several [types](./context-menu-types/) of context menus based on the selected element or its location. Developers can hook to any element type and modify its actions.

Each menu is divided into several [groups](./context-menu-groups/), each containing several items. Context menu groups are visually divided with separators.

Each menu item is called an [action](./context-menu-actions/). Actions are JS callback functions applied to selected elements (section, column, widget).

## Extending Context Menus

External developers can register their own custom actions and modify existing ones.

Learn to manage groups:

* [Add New Context Menu Group](./add-new-group/)
* [Remove Context Menu Group](./remove-group/)
* [Update Context Menu Group](./update-group/)

Learn to manage actions:

* [Add New Context Menu Action](./add-new-action/)
* [Remove Context Menu Action](./remove-action/)
* [Update Context Menu Action](./update-action/)

## Code Examples

Check out these examples to see context menu creation in action:

* [Simple Example](./simple-example/)
* [Advanced Example](./advanced-example/)
