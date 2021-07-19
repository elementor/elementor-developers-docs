# Elementor Context Menu

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

A context menu is a control menu that appears when users select an element on [Elementor Preview](/editor/elementor-preview) area and right-click the mouse. The popup menu offers a set of available actions based on the context, or the selected element. This is why it refers as contextual menu.

![Elementor Context Menu](/assets/img/elementor-context-menu.png)

## Context Menu Structure

Elementor has [3 types of context menus](./context-menu-types) based on the area where the user open it or the Element which was clicked. Developers can hook to any element type and modify its actions.

Each menu is divided into [several groups](./context-menu-groups) and each group has its own actions. When you add new actions, you need to choose to which group to assign the action.

## Extending Context Menus

External developers can register their own custom actions and modify existing ones. Learn more how to do exactly that:

* [Add New Context Menu Action](./add-new-action)
* [Remove Context Menu Action](./remove-action)
* [Update Context Menu Action](./update-action)

## Code Examples

Learn by examples. See how easy it is to create new controls:

* [Simple Example](./simple-example)
* [Advanced Example](./advanced-example)
