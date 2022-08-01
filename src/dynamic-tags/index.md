# Dynamic Tags

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

<img :src="$withBase('/assets/img/dynamic-tag-switcher.png')" alt="Dynamic Tag Switcher" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

Dynamic Tags are used to insert customized data based on various sources.

For example, Elementor Pro allows you to add dynamic data based on the page and site parameters, this includes data such as; *Post Title*, *Post Excerpt*, *Author Info*, *Site Name*, *Site Logo*, and much more.

Addon developers can create a wide range of dynamic tags, and can even use external APIs to pull data to Elementor. 

## How it Works

Dynamic tags interact with [controls](./../controls/) by extending the control functionality. They turn static controls into smart components. With dynamic tags, users can leverage dynamically generated data on their sites.

You could say that dynamic tags are like functions, the user can define custom parameters to change the output based on different factors.

## Elementor Pro

The dynamic tags functionality is defined in Elementor's core, but the basic version of Elementor does not support active dynamic tags. They are a feature of Elementor Pro, which includes dozens of dynamic tags to choose from.

## Managing Dynamic Tags

External developers can register new dynamic tags and unregister existing ones. Learn more how to do that:

* [Remove Dynamic Tags](./remove-fields/)
* [Add New Dynamic Tag](./add-new-field/)

## Creating Dynamic Tags

Learn more about the anatomy of dynamic tags and how to create your own:

* [Dynamic Tags Structure](./dynamic-tags-structure/)
* [Dynamic Tags Data](./dynamic-tags-data/)
* [Dynamic Tags Groups](./dynamic-tags-groups/)
* [Dynamic Tags Categories](./dynamic-tags-categories/)
* [Dynamic Tags Controls](./dynamic-tags-controls/)
* [Dynamic Tags Rendering](./dynamic-tags-rendering/)

## Code Examples

Check out how easy it is to create new dynamic tags:

* [Simple Example](./simple-example/)
* [Advanced Example](./advanced-example/)
* [Complex Example](./complex-example/)
