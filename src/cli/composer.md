# Composer

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Developers can install Elementor and Elementor Pro via [Composer](https://getcomposer.org/) instead of using a web browser. It can be done using a few simple CLI commands.

## What is Composer?

Composer is a PHP dependency management tool. It simplifies the process of installing dependent libraries in PHP projects.

However, Composer doesn't contain WordPress plugins and themes. For that developers use [wpackagist.org](https://wpackagist.org/) which is an open source service that mirrors WordPress plugins and themes as Composer repositories.

## Install Elementor

Register WordPress Packagist repository on your `composer.json` file:

```json
{
	"repositories": [
		{
			"type": "composer",
			"url": "https://wpackagist.org"
		}
	]
}
```

Install the latest Elementor version:

```bash
composer require wpackagist-plugin/elementor
```

Or choose a specific version:

```bash
composer require wpackagist-plugin/elementor:3.13.0
```

## Install Elementor Pro

Register Elementor repository on your `composer.json` file:

```json
"repositories": {
	"elementor": {
		"type": "composer",
		"url": "https://composer.elementor.com",
		"only": [
			"elementor/elementor-pro"
		]
	}
}
```

Configure composer to use a Elementor Pro license key:

```bash
composer config --global --auth http-basic.composer.elementor.com token <license-key>
```

To install Elementor Pro on `wp-content/plugins` folder instead of `vendor` folder, use composer custom installers:

```bash
composer config --no-plugins allow-plugins.composer/installers true
composer require composer/installers
```

Install the latest Elementor Pro version:

```bash
composer require elementor/elementor-pro
```

Or choose a specific version:

```bash
composer require elementor/elementor-pro:3.13.0
```

## Activation

To activate Elementor & Elementor Pro, use the folowing WP-CLI and [Elementor CLI](./) commands.

Activate Elementor plugin:

```bash
wp plugin activate elementor
```

Activate Elementor Pro plugin:

```bash
wp plugin activate elementor-pro
```

Activate Elementor Pro license:

```bash
wp elementor-pro license activate <license-key>
```

Optionaly, you can activate Elementor & Elementor Pro on multisite network:

```bash
wp plugin activate elementor --network
wp plugin activate elementor-pro --network
wp site list --field=url | xargs -n1 -I % wp --url=% elementor-pro license activate <license-key>
```
