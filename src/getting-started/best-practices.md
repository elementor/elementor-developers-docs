# Best Practices

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

This Best Practices guide is a living document for Elementor addon developers, meant to be revised as Elementor makes changes, introduces new features, and provides additional recommendations. We recommend following these best practices.

## Supported PHP Versions

Ensure your addon is compatible with the most used PHP version (v7.4) and the latest PHP versions and (v8.0 and above).

## Compatibility Tag

Elementor has its own [header comments](https://developers.elementor.com/docs/addons/plugin-header/) where you can note the Elementor version that the addon was tested against. This is an optional header, but we recommend using it.

## Compatibility Checks

[Check which Elementor and PHP versions](https://developers.elementor.com/docs/addons/compatibility/) a website uses to make sure your addon supports it. Otherwise, notify the user that the website doesn’t meet the addon’s requirements.

## Scripts & Style Registration

Elementor has its own way to [register scripts and styles](https://developers.elementor.com/docs/scripts-styles/). Using the recommended methods ensures your addon is optimized for performance.

## Internationalization

Use WordPress functions to [internationalize](https://developer.wordpress.org/apis/internationalization/internationalization-functions/) your strings.

## Remove Deprecated Code

Already have an addon? Run it through the [Elementor Deprecated Code Detector](https://github.com/matipojo/elementor-deprecated-code-detector) to see if your addon contains any [deprecated code](https://developers.elementor.com/docs/deprecations). If so, we highly recommend removing it. You can see a list of [recent deprecations here](https://developers.elementor.com/recent-deprecations/)

## Adopt Latest Performance Features

Implement [Element Caching](https://developers.elementor.com/elementor-3-22-developers-update/) to store element output in the cache for more performant websites.

## Elementor Pro Developer License

Test with Elementor Pro by requesting a [Developer License](https://elementor.com/pages/addon-developers-corner/).

## Security

Participate in Patchstack’s free [mVDP Program](https://elemn.to/patchstack-for-plugins) to maintain the security hygiene of your product with a clear vulnerability reporting structure.
