# Elementor Deprecations

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor is an evolving product. Over time, code is removed or replaced. These deprecations are announced over various channels. The deprecation process is gradual and deprecated code is only removed after at least 8 major versions.

## Deprecation Process

The reason for this gradual process is to avoid regression errors caused by external addon developers still using deprecated code. 

As a first step, developers are informed of the code change through several channels, including the [developers blog](https://developers.elementor.com/category/deprecations/), major versions' release notes, and debug tools.

Elementor's deprecation process has 3 steps:

<img :src="$withBase('/assets/img/elementor-deprecation-process.png')" alt="Elementor Deprecation Process">

### Soft Deprecation

This step lasts through four major Elementor versions. Using deprecated code in this phase will display a JS warning in the browser console. In addition, if the `ELEMENTOR_DEBUG` constant is defined as `true`, the site log will have PHP notices/warnings. During this grace period, deprecated code won't break sites, as both the deprecated code and the new code will work as expected.

### Hard Deprecation

This step lasts through four additional major Elementor versions. Using deprecated code in this phase will throw a PHP error. This grace period won't break sites as both the deprecated code and the new code will work as expected.

### Deletion

After eight major versions, the deprecated code is deleted from the codebase. At this point, using deprecated code will break sites as this code will no longer work. In some cases the deletion process can be postponed until the next major release.

## Deprecation Period Example

As an example, if code is deprecated in Elementor 3.2.0, it will start throwing PHP errors in Elementor 3.6.0, and will likely be deleted in Elementor 4.0.0.

## How Elementor Deprecates Code

Elementor 3.1 introduced the `Deprecation` PHP class to deal with the deprecation process described above. This class handles all the notices for developers and (if needed) all the backwards compatibility requirements.

The main methods Elementor uses to deprecate PHP code:

* `deprecated_function()` - Handles the [deprecation process for functions and methods](./deprecated-function/).
* `deprecated_argument()` - Handles the [deprecation process for arguments](./deprecated-argument/).
* `do_deprecated_action()` - Handles the [deprecation process for action hooks](./deprecated-action-hook/).
* `apply_deprecated_filter()` - Handles the [deprecation process for filter hooks](./deprecated-filter-hook/).
