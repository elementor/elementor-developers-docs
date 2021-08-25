# User Preferences Panel

<img src="/assets/img/user-preferences-panel.png" alt="Elementor User Preferences Panel" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

The **User Preferences** is a panel in [The Editor](/editor/) where you can control the look and feel of the Elementor Editor. You can choose whether to display a light or a dart theme, set the default panel width, whether to show/hide editing buttons etc.

## Structure and Functionality

Currently the panel has only section:

* **Preferences** - managing the look and feel of the Elementor Editor.

## Extending the Panel

Developers can extend the user preferences by [injecting new controls](/hooks/injecting-controls) to the panel. Make sure you add only controls that manage how your addon is displayed in the Editor.

## Adding New Preferences 

Developers can add new controls to this panel. This is done by [injecting controls](/hooks/injecting-controls).

Let’s see an example how we can add a new control:

```php
function add_elementor_editor_preferences_controls( \Elementor\PageSettings\Page $page ) {
	$this->add_control(
		'something',
			[
				'label' => esc_html__( 'Enable Something', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
	);
}
add_action( 'elementor/element/editorPreferences-settings/preferences/before_section_end', 'add_elementor_editor_preferences_controls' );
```

## Retrieving Saved Data

The data in the preferences panel is saved in the user meta. The user meta contains all the settings that are related to Editor Preferences.

Let’s see an example how we can retrieve this data:

```php
$something = get_user_meta( get_current_user_id(), 'something', true );
```
