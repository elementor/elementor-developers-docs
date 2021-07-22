# Context Menu Types

Elementor has several types of context menu based on the area where the user opens it. To open a context menu the user need to select an element and right click it. As different elements have different functionality, each menu has different action items. When modifying an action, developers must indicate which element the action should be applied to.

## Available Types

Elementor has 3 main context menu types:

1. Right click on an **Element**.
   * Right click on a **Section** element.
   * Right click on a **Column** element.
   * Right click on a **Widget** element.
2. Right click on an **Empty Column Element**.
3. Right click on an "**Add new section / template**" area.

**Note:** The common Context Menu is the **Element** context menu (section, column and widget) covers vast majority of developers needs. The other two types are specific use-cases displaying only actions relevant to those areas. We won't be covering them as they are internal use-cases.

## JS Filter Hooks

To add, modify, or delete action items, you must first choose which element type to apply the action to. This is done by hooking to the `elements/${elementType}/contextMenuGroups` filter hook.

As a result, we have three choices:

* **Section** - `elements/section/contextMenuGroups`
* **Column** - `elements/column/contextMenuGroups`
* **Widget** - `elements/widget/contextMenuGroups`

**Note:** as mentioned in the previous paragraph, we will be focusing only on **Element** context menu.

## Different Context Menus

Each element has its own actions as seen in the following screenshots:

### Section

![Section Context Menu](/assets/img/context-menu-section.png)

### Column

![Column Context Menu](/assets/img/context-menu-column.png)

### Widget

![Widget Context Menu](/assets/img/context-menu-widget.png)

### Add new section / template

![Context Menu for add new section / template](/assets/img/context-menu-add-new-section-template.png)
