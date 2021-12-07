# Context Menu Types

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor has several types of context menus based on the selected location or element. To open a context menu the user needs to right click an element or location. As different elements have different functionalities, each menu lists different action items. When modifying an action, developers must indicate which element the action should be applied to.

## Available Types

Elementor has 3 main context menu types:

1. **Element**, consisting of:
   * **Section** elements
   * **Column** elements
   * **Widget** elements
2. **Empty column elements**
3. "**Add new section / template**" 

**Element** context menus (section, column and widget) are the most common. They cover the vast majority of users' and developers' needs. The other two types are specific use-cases, displaying only actions relevant to those cases. We won't be covering them as they are internal use-cases and have no filter hooks allowing you to modify them.

## JS Filter Hooks

To add, modify, or delete action items, you must first choose which element type to apply the action to. This is done by hooking to the `elements/${elementType}/contextMenuGroups` filter hook.

This gives us three elements to choose from:

* **Section** - `elements/section/contextMenuGroups`
* **Column** - `elements/column/contextMenuGroups`
* **Widget** - `elements/widget/contextMenuGroups`

**Note:** as mentioned above, we will only be focusing on **element** context menus.

## Different Context Menus

Each element has its own set of actions as seen below:

### Section

<img :src="$withBase('/assets/img/context-menu-section.png')" alt="Section Context Menu">

### Column

<img :src="$withBase('/assets/img/context-menu-column.png')" alt="Column Context Menu">

### Widget

<img :src="$withBase('/assets/img/context-menu-widget.png')" alt="Widget Context Menu">

### Add new section / template

<img :src="$withBase('/assets/img/context-menu-add-new-section-template.png')" alt="Context menu for add new section / template">
