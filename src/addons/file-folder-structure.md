# File & Folder Structure

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

All [WordPress plugin guidelines](https://developer.wordpress.org/plugins/plugin-basics/best-practices/#file-organization) should be applied to Elementor addons. You should keep your folder structure simple and place similar files together.

## Files

The root level of your addon directory `/elementor-test-addon/` should contain an `elementor-test-addon.php` file. Best practice is to give the folder and main file the same name.

``` {3}
elementor-test-addon/
|
└─ elementor-test-addon.php
```

Other files are optional. If the addon has other files, they all should be organized into sub-folders whenever possible.

## Folders

Best practice is to keep similar files together. For example, you should group CSS files together and JS files together. This rule also applies to  file types and functionality - e.g. "widgets" should be grouped together, controls should be grouped together etc. 

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

As your addon becomes larger and more complex, you should organize the files in folders. We recommend this folder structure:
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
