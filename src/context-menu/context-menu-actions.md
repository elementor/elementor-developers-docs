# Context Menu Actions

The context menu popup has several items, each menu item called an Action. An action applied on the selected element (section, column, widget). Behind the scene, actions are JS callback functions.

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

* **Action Name** - A unique ID used in the code.
* **Action Icon** - The action icon.
* **Action Title** - The label displayed to the user.
* **Action Shortcut** - Keyboard shortcut that activate the action.
* **Is Enabled** - Whether the action enabled or disabled.
* **Action Callback** - JS callback functions to apply on the selected element.

## Manage Actions

By hooking to the `elements/${elementType}/contextMenuGroups` JS filter hook you can add, modify, or delete action items.

* [Add New Action](./add-new-action)
* [Remove Action](./remove-action)
* [Update Action](./update-action)
