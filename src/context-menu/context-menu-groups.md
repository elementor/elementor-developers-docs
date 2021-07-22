# Context Menu Groups

The context menu popup is organized by groups. Each item in the group is called an action. Elementor context menu has several groups. The groups are displayed only if they have at least one action. For example, "Add" group displayed on empty columns, and allow the user to add new columns.

## Group Object

Elementor context menu is basically a JS array of group objects. Each group object has two properties:

```js
const group = {
	name: '',
	actions: [],
}
```

* **Group Name** - A unique ID used in the code.
* **Group Actions** - An array of action objects.

## Available Groups

Built-in context menu groups:

* **General** (_`general`_) - includes actions that allow to edit the elements, duplicate etc.
* **Add** (_`addNew`_) - includes actions that allow to add new items to the element.
* **Clipboard** (_`clipboard`_) - includes actions that allow to copy, paste, paste style etc.
* **Save** (_`save`_) - includes actions that allow to save as a global or save as template.
* **Tools** (_`tools`_) - includes actions that open tools like the navigator.
* **Delete** (_`delete`_) - an action that allows the user to delete the element.

All the groups are visually divided with a separator.

## Groups By Element Type

Active groups displayed in each element:

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
