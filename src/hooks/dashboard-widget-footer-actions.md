# Dashboard Widget Footer Actions

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

WordPress dashboard has a list dashboard widgets. Elementor adds its own "Elementor Overview" dashboard widget displaying information about Elementor. At the bottom of that dashboard widget, you will find the footer action links. Addon developers can add new action links.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor/admin/dashboard_overview_widget/footer_actions`
* **Affects:** Admin

## Hook Arguments

| Argument            | Type      | Description                                     |
|---------------------|-----------|-------------------------------------------------|
| `additions_actions` | _`array`_ | Elementor dashboard widget footer action links. |

## Check Whether or Not to Display the Content
