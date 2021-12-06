# User Preferences Panel

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/user-preferences-panel.png')" alt="Elementor User Preferences Panel" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

**User Preferences** is a panel in [the editor](/editor/) where the user can control the editor's look and feel. Users can choose whether to display a light or a dark theme, set the default panel width, decide to show/hide editing buttons, etc.

These preferences are user-based, meaning that different users can set different preferences for themselves. This data is saved in the `wp_users` table in the database.

## Structure and Functionality

Currently, the panel has only section:

* **Preferences** - manages the look and feel of the editor.

## Extending the Panel

Developers can extend the user preferences panel by [injecting new controls](/hooks/injecting-controls) to the panel. Make sure to only add controls that manage how your addon is displayed in the Editor.

## Adding New Preferences 

Developers can add new controls to this panel. This is done by [injecting controls](/hooks/injecting-controls).

In the example below, we'll add a new control:

```php
/**
 * @param \Elementor\Core\Settings\EditorPreferences\Model $preferences The editor preferences model.
 */
function add_preferences_controls( \Elementor\PageSettings\Page $page ) {
	$this->add_control(
		'something',
		[
			'label' => esc_html__( 'Enable Something', 'plugin-name' ),
			'type' => \Elementor\Controls_Manager::SWITCHER,
			'default' => 'yes',
		]
	);
}
add_action( 'elementor/element/editor-preferences/preferences/before_section_end', 'add_preferences_controls' );
```

## Retrieving Saved Data

The data in the preferences panel is saved in the user's metadata. The user's metadata contains all the settings related to their editor preferences.

Below is an example of how we can retrieve this data:

```php
$something = get_user_meta( get_current_user_id(), 'something', true );
```
