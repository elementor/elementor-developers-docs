# Widget Skins

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor has a hook that lets developers apply custom skins to widgets. It runs after the widget constructor and registers custom skins for a specific widget types that support skins.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `elementor/widget/{$widget_name}/skins_init`
* **Notes:** The dynamic portion of the hook name, `$widget_name`, refers to the widget name.
* **Affects:** Init

## Hook Arguments

| Argument  | Type                       | Description          |
|-----------|----------------------------|----------------------|
| `widget`  | _`\Elementor\Widget_Base`_ | The widget instance. |

#### Example

Let's add a custom skin for the Google Maps widget.

```php
/**
 * Add dark skin for "Google Maps" widget.
 *
 * @since 1.0.0
 * @param \Elementor\Widget_Base $widget The widget instance.
 */
function dark_skin_for_google_maps_widget( $widget ) {

	$widget->add_skin( new \MySkins\Skin_Dark_Map( $widget ) );

}
add_action( 'elementor/widget/google_maps/skins_init', 'dark_skin_for_google_maps_widget' );
```
