# Context Menu Types

Elementor has 3 types of context menu based on the area where the user opens it.

1. Right click on an **Element** (section, column, widget).
1. Right click on an **Empty Column**.
1. Right click on an "**Add new section / Add template**" area.

**Note:** The common Context Menu is the **Element** context menu covers vast majority of developers needs. The other two types are specific use-cases displaying only actions relevant to those areas. We won't be covering them.

## JS Filter Hooks

To add, modify, or delete action items, you must first choose which element type to apply the action to. This is done by hooking to the `elements/${elementType}/contextMenuGroups` filter hook.

As a result, we have three choices:

* **Widget** - `elements/widget/contextMenuGroups`
* **Column** - `elements/column/contextMenuGroups`
* **Section** - `elements/section/contextMenuGroups`

**Note:** as mentioned in the previous paragraph, we will be focusing only on **Element** context menu.
