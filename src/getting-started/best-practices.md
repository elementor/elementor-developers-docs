# Best Practices

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

This Best Practices guide is a living document for Elementor addon developers, meant to be revised as Elementor makes changes, introduces new features, and provides additional recommendations. We recommend following these best practices.

## Beta Testing

We recommend testing each beta version with your addon to ensure compatibility and report any bugs you find in our plugin. 

* [How to become a Beta Tester](https://elementor.com/help/how-to-become-a-beta-tester/)
* [Report bugs](https://github.com/elementor/elementor/issues/new?assignees=&labels=status/awaiting_triage&projects=&template=bug.yml)

## Elementor Pro Developer License

Test with Elementor Pro by requesting a [Developer License here](https://elementor.com/pages/addon-developers-corner/)

## Support Latest PHP Versions

Support PHP 7.4 and 8.0+ to ensure compatibility with the latest PHP versions

## Adopt Latest Performance Features

Implement [Element Caching](https://developers.elementor.com/elementor-3-22-developers-update/) to store element output in the cache for more performant websites.

## Update any Deprecated Code

Already have an addon? Run it through the [Elementor Deprecated Code Detector](https://github.com/matipojo/elementor-deprecated-code-detector) to see if your addon contains any deprecated code. If so, we highly recommend removing it. 

## Security

Participate in Patchstack’s free [mVDP Program](https://elemn.to/patchstack-for-plugins) to maintain the security hygiene of your product with a clear vulnerability reporting structure.
