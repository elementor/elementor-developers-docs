# Context Menu Types

Elementor has several types of context menus based on the selected location or element. To open a context menu the user needs to right click an element or location. As different elements have different functionalities, each menu lists different action items. When modifying an action, developers must indicate which element the action should be applied to.

## Available Types

Elementor has 3 main context menu types:

1. **Element**, consisting of:
   * **Section** elements
   * **Column** elements
   * **Widget** elements
2. **Empty column elements**
3. "**Add new section / template**" 

The **Element** context menu (section, column and widget) is the most common context menu. It covers the vast majority of users' and developers' needs. The other two types are specific use-cases displaying only actions relevant to those cases. We won't be covering them as they are internal use-cases and have no filter hooks allowing you to modify them.

## JS Filter Hooks

To add, modify, or delete action items, you must first choose which element type to apply the action to. This is done by hooking to the `elements/${elementType}/contextMenuGroups` filter hook.

This gives us three elements to choose from:

* **Section** - `elements/section/contextMenuGroups`
* **Column** - `elements/column/contextMenuGroups`
* **Widget** - `elements/widget/contextMenuGroups`

**Note:** as mentioned above, we will only be focusing on the **Element** context menu.

## Different Context Menus

Each element has its own set of actions as seen below:

### Section

![Section Context Menu](/assets/img/context-menu-section.png)

### Column

![Column Context Menu](/assets/img/context-menu-column.png)

### Widget

![Widget Context Menu](/assets/img/context-menu-widget.png)

### Add new section / template

![Context Menu for add new section / template](/assets/img/context-menu-add-new-section-template.png)
