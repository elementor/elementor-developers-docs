# Elementor Context Menu

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

A context menu is a control menu that appears when users select an element on [Elementor Preview](/editor/elementor-preview) area and right-click the mouse. The popup menu offers a set of actions that are available based on the context, or the selected element. This is why it refers as contextual menu.

![Elementor Context Menu](/assets/img/elementor-context-menu.png)

## Context Menu Types

Elementor has 3 types of context menu based on the area where the user open it.

1. Right click on the **Element / Widget**.
1. Right click on "**Add new section / Add template**" area.
1. Right click on an **Empty Column**.

**Note:** The common Context Menu is the **Element** context menu. The other two types are specific use-cases displaying only actions relevant to those areas. We won't be covering them.

## Menu Structure

The Context Menu popup is organized by groups. Each item in the group is called an action. By default, Elementor context menus have 5 groups:

* **General** - includes actions that allow to edit the elements, duplicate etc.
* **Clipboard** - includes actions that allow to copy, paste, paste style etc.
* **Save** - includes actions that allow to save as a global or save as template.
* **Tools** - includes actions that open tools like the navigator.
* **Delete** - an action that allows the user to delete the element.

## Extending Context Menus

External developers can register their own custom actions and modify existing ones. Learn more how to do exactly that:

* [Add New Context Menu Action](./add-new-action)
* [Remove Context Menu Action](./remove-action)
* [Update Context Menu Action](./update-action)
