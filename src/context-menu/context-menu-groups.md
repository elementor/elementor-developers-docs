# Context Menu Groups

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Context menu popups contain several groups divided by a separator. Each group contains a number of actions - groups are only displayed if they have at least one action.

## Group Object

An Elementor context menu is basically a JS array of group objects. Each group object has two properties:

```js
const group = {
	name: '',
	actions: [],
}
```

* **Group Name** - A unique ID used in the code.
* **Group Actions** - An array of action objects.

## Available Groups

The built-in context menu groups for elements (section, column and widget) include:

* **General** (_`general`_) - actions to edit the elements (e.g. duplicate).
* **Add** (_`addNew`_) - actions to add new items to the element.
* **Clipboard** (_`clipboard`_) - actions to copy, paste, paste style etc.
* **Save** (_`save`_) - actions to save as a global widget or save as a template.
* **Tools** (_`tools`_) - actions to open tools (e.g. navigator).
* **Delete** (_`delete`_) - actions to delete elements.

::: warning Please Note
Due to a temporary limitation, external developers can only add new actions to 3 groups: `general`, `clipboard` and `delete`.
:::

## Groups By Element Type

Below are the active groups displayed in each element:

### Section

<img src="/assets/img/context-menu-section.png" alt="Section Context Menu" style="float: right; margin-left: 20px;">

* General
* Clipboard
* Save
* Tools
* Delete

<br clear="both">

### Column

<img src="/assets/img/context-menu-column.png" alt="Column Context Menu" style="float: right; margin-left: 20px;">

* General
* Add
* Clipboard
* Tools
* Delete

<br clear="both">

### Widget

<img src="/assets/img/context-menu-widget.png" alt="Widget Context Menu" style="float: right; margin-left: 20px;">

* General
* Clipboard
* Save
* Tools
* Delete
