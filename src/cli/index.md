# Elementor CLI

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor integrates with [WP-CLI](https://wp-cli.org/), enabling you to run certain Elementor tasks via the command line interface, without using a web browser.

## What is WordPress CLI?

WP-CLI is a command line interface for [WordPress](https://wordpress.org/). It offers an alternative to the WordPress admin bar. Using the command line makes it easier for developers, agencies and hosting providers to run actions with fewer clicks, run them remotely, and even perform complex scripts based on certain conditions.

## What is Elementor CLI?

Elementor CLI is a set of commands integrated into WP-CLI to allow developers to run certain Elementor tasks from the command line.

## Syntax

CLI commands syntax:

```bash
wp elementor <command> [--argument]
```

or

```bash
wp elementor-pro <command> [--argument]
```

## Available Commands

Currently, the following Elementor commands are available:

* [System Info](./system-info/)
* [Flush CSS](./flush-css/)
* [Replace URLs](./replace-urls/)
* [Update DB](./update-db/)
* [Library Sync](./library-sync/)
* [Library Connect](./library-connect/)
* [Library Disconnect](./library-disconnect/)
* [Library Import](./library-import/)
* [Library Import Dir](./library-import-dir/)
* [Clear Theme Builder Conditions](./theme-builder-clear-conditions/)
* [Kit Import](./kit-import/)
* [Kit Export](./kit-export/)
* [Experiment Status](./experiments-status/)
* [Experiment Activation](./experiments-activate/)
* [Experiment Deactivation](./experiments-deactivate/)
* [License Activate](./license-activate/)
* [License Deactivate](./license-deactivate/)

## Help

To view a list of all available Elementor commands via the command line, use the `wp help` command.

For information about an individual command, use the following format:

```bash
wp help elementor <command>
```

or

```bash
wp help elementor-pro <command>
```
