# History Panel

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/history-panel.png')" alt="Elementor History Panel" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

**History** is a panel in [the editor](./editor/) that allows users to see their latest actions and revisions. This panel let's the user undo / redo actions and restore previous versions of the page.

## Structure and Functionality

The panel has two tabs:

* **Revisions** - Page versions saved in the database.
* **Actions** - Page changes made since the page was last saved.

Revisions are a WordPress functionality, Elementor only makes it easier to restore different revisions already saved in the WordPress database.

Actions, on the other hand, are changes made by the user inside Elementor. The panel makes it easy to display the changes and undo / redo those changes.
