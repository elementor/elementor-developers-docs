# Context Menu Actions

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

The context menu popup contains groups, and within these groups are items called actions. Actions are applied to a selected element (section, column, widget). Behind the scenes, these actions are JS callback functions.

## Action Object

An action is a JS object containing the following properties and methods:

```js
const action = {
	name: 'action-id',
	icon: 'eicon-code',
	title: 'Action Label',
	shortcut: '',
	isEnabled: () => true,
	callback: () => {},
};
```

* **Action Name** - Unique ID used in the code.
* **Action Icon** - Action icon, found at either [Elementor Icons](https://elementor.github.io/elementor-icons/) or [FontAwesome Icons](https://fontawesome.com/).
* **Action Title** - Label displayed to the user.
* **Action Shortcut** - Keyboard shortcut that triggers the action.
* **Is Enabled** - Defines whether the action enabled or disabled.
* **Action Callback** - JS callback functions which apply to the selected element.

::: warning Please Note
Action keyboard shortcuts won't be covered in the documentation as it requires additional JS components configuration.
:::

## Manage Actions

By hooking to the JS `elements/context-menu/groups` filter hook, you can add, modify, or delete action items.

* [Add New Action](/context-menu/add-new-action)
* [Remove Action](/context-menu/remove-action)
* [Update Action](/context-menu/update-action)
