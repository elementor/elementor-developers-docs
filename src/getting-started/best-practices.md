# Best Practices

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

This Best Practices guide is a living document for Elementor addon developers, meant to be revised as Elementor makes changes, introduces new features, and provides additional recommendations. We recommend following these best practices.

## Supported PHP Versions

Support PHP 7.4 and 8.0+ to ensure compatibility with the latest PHP versions and the most used PHP versions.

## Compatibility Tag

Elementor has its own [header comments](https://developers.elementor.com/docs/addons/plugin-header/) where you can note the Elementor version that the addon was tested against. This is an optional header, but we recommend using it.

## Compatibility Checks

[Check which versions](https://developers.elementor.com/docs/addons/compatibility/) a website uses to make sure your addon supports it. 

## Scripts & Style Registration

Elementor has its own way to [register scripts and styles](https://developers.elementor.com/docs/scripts-styles/).

## Internationalization

Use WordPress functions to [internationalize](https://developer.wordpress.org/apis/internationalization/internationalization-functions/) your strings.

## Remove Deprecated Code

Already have an addon? Run it through the [Elementor Deprecated Code Detector](https://github.com/matipojo/elementor-deprecated-code-detector) to see if your addon contains any [deprecated code](https://developers.elementor.com/docs/deprecations). If so, we highly recommend removing it.

## Adopt Latest Performance Features

Implement [Element Caching](https://developers.elementor.com/elementor-3-22-developers-update/) to store element output in the cache for more performant websites.

## Elementor Pro Developer License

Test with Elementor Pro by requesting a [Developer License](https://elementor.com/pages/addon-developers-corner/).
