# Elementor Tabs

<img src="/assets/img/elementor-tabs.jpg" alt="Elementor Tabs" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

In some panels, Elementor uses tab navigation to display controls. When extending Elementor, you can use any tab you need or create new ones.

## Built-in Tabs

Elementor has 6 pre-defined tabs used in different panels:

| Name/ID      | Label      | Constant                                       |
|--------------|------------|------------------------------------------------|
| `content`    | Content    | `\Elementor\Controls_Manager::TAB_CONTENT`     |
| `style`      | Style      | `\Elementor\Controls_Manager::TAB_ADVANCED`    |
| `advanced`   | Advanced   | `\Elementor\Controls_Manager::TAB_RESPONSIVE`  |
| `responsive` | Responsive | `\Elementor\Controls_Manager::TAB_LAYOUT`      |
| `layout`     | Layout     | `\Elementor\Controls_Manager::TAB_LAYOUT`      |
| `settings`   | Settings   | `\Elementor\Controls_Manager::TAB_SETTINGS`    |

The tabs set in `\Elementor\Controls_Manager` class. They are defined as constants and registered using in the `init_tabs()` method, each constant containing the tab name and tab label.

## Usage Examples

[Widgets Panel](./widgets-panel), for example, display controls in a **Content Tab** to allow the user to set the widget content, and a **Style Tab** to design the content. In addition, Elementor adds an **Advanced Tab** to all the widgets.

[Page Settings Panel](./page-settings-panel), on the other hand, display controls in the **Settings Tab**, the **Style Tab**, the **Layout Tab** and others – depending on the setting screen.

## Using Tabs

When we add a new control to the element panel we use the inherited `add_control()` method. Before adding new control, we need to create a new section using the `start_controls_section()` method. In this method we define the tab:

```php {5}
$this->start_controls_section(
	'style_section',
	[
		'label' => __( 'Style Section', 'plugin-name' ),
		'tab' => \Elementor\Controls_Manager::TAB_STYLE,
	]
);
```

## Add New Tabs

To create custom tabs use the `add_tab()` method.

```php
\Elementor\Controls_Manager::add_tab(
	'new-tab',
	__( 'New Tab', 'plugin-name' )
);
```

To add custom icon above the tab label you will need to add custom CSS:

```css
.elementor-panel .elementor-tab-control-new-tab a:before {
	font-family: eicons;
	content: '\e942';
}
```

## Best Practices

::: warning Official Guidelines
Please note that the official Elementor guidelines regarding to **Tabs** is to use one of the default tabs.
:::

Saying that, we did document this feature as some plugin authors use code workarounds that slow the Editor and in some edge cases break it.
