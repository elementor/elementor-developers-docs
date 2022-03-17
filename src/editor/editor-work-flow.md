# Editor Work Flow

What happens behind the scene when the user creates a new Elementor page? The work flow lifecycle has four stages: **Loading**, **Editing**, **Preview** and **Saving**.

<img :src="$withBase('/assets/img/elementor-editor-work-flow.png')" alt="Elementor Editor Work Flow">

## Loading

The loading stage has two seperate proceses, one loads the Editor and the other loads the document.

### Load the Editor

* **Create a Document** - 

* **Create a Revision** - 

* **Load Widgets Data** - 

* **Heartbeat** - (lock from editing by other users)

### Load the Document

* **Load post-meta Data** - Check if there is (called `elementor-data`)

* **Set Document Type** - 

## Editing

When editing an Elementor page, behind the scene several processes occur.

* **Autosave** - Each change triggers an autosave, this way Elementor can list all user actions in the [History Panel](./history-panel/) to track changes and restore previous versions. ... *In addition Elementor triggers the [WordPress Heartbeat API](https://developer.wordpress.org/plugins/javascript/heartbeat-api/) to create new autosaves* ...

* **Re-render Widgets** - each time the user finish editing a widget (on blur), Elementor re-renders the widget PHP to display an updated view in the [Preview](./elementor-preview/).

## Preview

Elementor allows the user to preview the un-saved changes in the front-end to see the final result. When the user click the preview icon, a new tab is oppened and the folowing proccesses occure:

* **Autosave** - A new autosave is triggered to store the unsaved data in the revision database.

* **Open New Tab** - A new browser tab is oppened that displayes the revision from the previous step. The new browser tab is linked to the Editor tab, this way all the changes the in the Editor reflect in the Preview tab.

* **TBD** - ... *theme builder data* ...

## Saving

When saving the data by either publishing the post or saving as a draft, Elementor needs to store all the data from the editor in the database.

* **Editor Data** - The data entered by the user into the Editor is pulled in a JSON format. To make it smaller, all the default values are stripped.

* **Save to post meta** - The entire JSON is saved in post meta (`elementor-data`).

* **Regenerate CSS** - When saving data Elementor triggers a CSS regenerate to take into account new changes.

* **More** - *... (talk to mati) ...*
