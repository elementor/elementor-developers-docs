# Site Settings Panel

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/site-settings-panel.png')" alt="Elementor Site Settings Panel" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

**Site Settings** is a panel in [the editor](./editor/) where the user can globally define site settings. This includes global colors, typography, site identity, and more.

## Structure and Functionality

The panel has three sections:

* **Design System** - defines global colors and fonts for consistent design.
* **Theme Style** - a global design layer handled by the theme.
* **Settings**

Design system allows users to create custom color schemes and typographies to be used in different widgets. It allows the user to create uniform designs and easily change schemes throughout their site. 

Theme styles are the general theme settings, creating set fallback styles for various HTML elements. If no definitions are set for specific widgets, the theme styles are used.

The settings sections allow you to set site identity, layout, breakpoints, custom CSS, etc.
