# Flush CSS

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Styles set in Elementor are saved in the database, this information is used to generate CSS files in the `uploads` folder. Elementor CLI `flush CSS` command will flush all the CSS files in cache and recreate them using the most recent settings stored in the database.

## Command

```bash
wp elementor flush-css [--network]
```

## Arguments

`[--network]`

_(Optional)_ Flush CSS files for all the sites in the network.

## Usage Examples

```bash
wp elementor flush-css
```

This command will flush the CSS files for all Elementor pages.

```bash
wp elementor flush-css --network
```

This command will flush the CSS files for all Elementor pages in all the sites in the network.
