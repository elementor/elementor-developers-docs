# Elementor CLI

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor integrates with [WP-CLI](https://wp-cli.org/), enabling you to run certain Elementor tasks via the command line interface, without using a web browser.

## What is WordPress CLI?

WP-CLI is a command line interface for [WordPress](https://wordpress.org/). It offers an alternative to the WordPress admin. Command line makes it easy for developers, agencies and hosting providers to run actions with fewer clicks, run them remotely and event perform complex scripts based on certain conditions.

## What is Elementor CLI?

Elementor CLI is a set of commands integrated into WP-CLI to allow developers to run certain Elementor tasks in a command line.

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

* [Flush CSS](./flush-css/)
* [System Info](./system-info/)
* [Replace URLs](./replace-urls/)
* [Update DB](./update-db/)
* [Library Sync](./library-sync/)
* [Library Import](./library-import/)
* [Library Import Dir](./library-import-dir/)
* [Library Connect](./library-connect/)
* [Library Disconnect](./library-disconnect/)
* [Kit Import](./kit-import/)
* [Kit Export](./kit-export/)
* [Experiment Activation](./experiments-activate/)
* [Experiment Deactivation](./experiments-deactivate/)

## Help

To view a list of all available Elementor commands via the command line, use `wp help` command.

For information about an individual command, use the following format:

```bash
wp help elementor <command>
```

or

```bash
wp help elementor-pro <command>
```
