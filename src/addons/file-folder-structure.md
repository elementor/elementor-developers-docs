# File & Folder Structure

All [WordPress plugins guidelines](https://developer.wordpress.org/plugins/plugin-basics/best-practices/#file-organization) applied on Elementor addons. You should keep your folder structure simple and organize similar files together.

## Files

The root level of your addon directory `/elementor-test-addon/` should contain a `elementor-test-addon.php` file. It's recommended to use the same name for the main file as the folder name.

``` {3}
elementor-test-addon/
|
└─ elementor-test-addon.php
```

Other files are optional. If the addon has other files, they all should be organized into sub-folders whenever possible.

## Folders

It's recommended to keep similar files together. For example, you should group together CSS files and JS files. This rule applied on file types and functionality - "widgets" should be grouped together, as well as "controls" and all the other components.

### Single Component Addon

When creating a single component addon, you can use a simpler folder structure:

```
elementor-test-addon/
|
├─ assets/
|
├─ widgets/
|
└─ elementor-test-addon.php
```

### Multi Component Addon

As your addon becomes larger and more complex, it's recomended to organize the files in folders. Recommended folder structure:

```
elementor-test-addon/
|
├─ assets/
|  ├─ images/
|  ├─ css/
|  └─ js/
|
├─ includes/
|  ├─ controls/
|  ├─ dynamic-tags/
|  ├─ finder/
|  └─ widgets/
|
└─ elementor-test-addon.php
```
