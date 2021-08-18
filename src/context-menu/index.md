# Elementor Context Menu

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

A context menu is a popup menu that appears when users select an element on [Elementor Preview](/editor/elementor-preview) area and right-click the mouse. The popup menu offers a set of available actions based on the context, or the selected element. This is why it refers as contextual menu.

![Elementor Context Menu](/assets/img/elementor-context-menu.png)

## Context Menu Structure

Elementor has several [Types](./context-menu-types) of context menus based on the area where the user open it, or the Element which was clicked. Developers can hook to any element type and modify its actions.

Each menu is divided into several [Groups](./context-menu-groups) containing several items. All context menu groups are visually divided with separators.

Each menu item called an [Action](./context-menu-actions). In simple words, Actions are JS callback functions applied on selected elements (section, column, widget).

## Extending Context Menus

External developers can register their own custom actions and modify existing ones. Learn more how to do exactly that:

* [Add New Context Menu Action](./add-new-action)
* [Remove Context Menu Action](./remove-action)
* [Update Context Menu Action](./update-action)

## Code Examples

Learn by examples. See how easy it is to create new context menu:

* [Simple Example](./simple-example)
* [Advanced Example](./advanced-example)
