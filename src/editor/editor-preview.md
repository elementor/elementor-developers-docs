# Editor Work Flow - WordPress Preview

Elementor allows the user to preview the un-saved changes in the front-end to see the final result. When the user click the preview icon, a new tab is oppened and the folowing proccesses occures:

## Work Flow

* **Autosave** - A new autosave is triggered to store the unsaved data in the revision database. If there are un-saved changes.

* **Open New Tab** - A new browser tab is oppened that displayes the revision from the previous step. The new browser tab is linked to the Editor tab, this way all the changes the in the Editor reflect in the Preview tab. The tab is linked to the editor and on any save on Elementor Editor, the WordPress preview tab is reloaded.
