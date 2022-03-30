# Elementor Deprecations

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor is an evolving product. Over time, some code is removed or replaced. The deprecated code is announced over verious channels. The deprecation process is gradual, deprecated code is removed after at least 8 major versions.

## Deprecation Process

To avoide regression errors cause by an external addon developers still using deprecated code, the deprecated code is not immediately removed from the codebase. Deprecated code removed over a period covered by a number of released versions.

Developers are informed of the code change through several channels, including the [developers blog](https://developers.elementor.com/category/deprecations/), major versions release notes, and debug tools.

Elementor's deprecation process has 3 steps:

<img :src="$withBase('/assets/img/elementor-deprecation-process.png')" alt="Elementor Deprecation Process">

### Soft Deprecation

This step lasts 4 major Elementor versions. Using deprecated code in this phase will shows a JS warnings in the browser console. In addition, if the `ELEMENTOR_DEBUG` constant is defined as `true`, the site log will have PHP notices/warnings. This grace period won't break sites as both the deprecated code and the new code work as expected.

### Hard Deprecation

This step lasts additional 4 major Elementor versions. Using deprecated code in this phase will throw a PHP error. This grace period won't break sites as both the deprecated code and the new code work as expected.

### Deletion

After 8 major versions, the deprecated code is deleted from the codebase. At this point, using deprecated code will breake sites as this code is no longer exist. In some cases the deletion process can be postponed to the next major release.

## Deprecation Period

If we deprecated a method in Elementor 3.2.0, it will start throwing PHP errors in Elementor 3.6.0, and will likely be deleted in Elementor 4.0.0.

## How Elementor Deprecats Code

Elementor 3.1 introduced the `Deprecation` PHP class to deal with the deprecation process described above. The class handles all the notices for developers and (if needed) all the backwards compatibility requirements.

The main methods Elementor uses to deprecate PHP code:

* `deprecated_function()` - Handles the [deprecation process for functions and methods](./deprecated-function/).
* `deprecated_argument()` - Handles the [deprecation process for arguments](./deprecated-argument/).
* `do_deprecated_action()` - Handles the [deprecation process for action hooks](./deprecated-action-hook/).
* `apply_deprecated_filter()` - Handles the [deprecation process for filter hooks](./deprecated-filter-hook/).
