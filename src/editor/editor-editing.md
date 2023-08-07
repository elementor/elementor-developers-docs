# Editor Work Flow - Editing

When editing an Elementor page, behind the scene several processes occur. Some changes in the editor trigger prossess, other do not.

## Work Flow

* **Re-render Widgets** - Each time the user finish editing a widget, Elementor re-renders the widget PHP to display an updated view in the [Preview](./elementor-preview/).

* **Autosave** - Each change triggers an autosave, this way Elementor can list all user actions in the [History Panel](./history-panel/) to track changes and restore previous versions. ... *In addition Elementor triggers the [WordPress Heartbeat API](https://developer.wordpress.org/plugins/javascript/heartbeat-api/) to create new autosaves* ...
