# File & Folder Structure

All [WordPress plugins guidelines](https://developer.wordpress.org/plugins/plugin-basics/best-practices/#file-organization) applied on Elementor addons. You should keep your folder structure simple. And organize files 

## Files

The root level of your plugin directory should contain your `plugin-name.php` file. Other files are optional. If the plugin has other files, they all should be organized into sub-folders whenever possible.

## Folders

It's recommended to keep similar files together. For example, you should group together CSS files and JS files. This rule applied on file types and functionality - "widgets" should be grouped together.

Here is a reference for a recommended addon folder structure:

```
plugin-name/
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
└─ plugin-name.php
```

When creating a single component addon, you can use a simpler folder structure:

```
plugin-name/
|
├─ assets/
|  ├─ images/
|  ├─ css/
|  └─ js/
|
├─ widgets/
|
└─ plugin-name.php
```
