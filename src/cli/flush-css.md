# Flush CSS

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Styles set in Elementor are saved in the database, this information is used to generate CSS files in `/wp-content/uploads/elementor/css/` folder. Elementor CLI `flush-css` command will delete all the cached CSS files and recreate them using the most recent settings stored in the database.

## Command

```bash
wp elementor flush-css [--regenerate] [--network]
```

## Arguments

`[--regenerate]`

_(Optional)_ Re-create the CSS files. Otherwise, updated CSS files will be created by Elementor on the next page visit.

`[--network]`

_(Optional)_ Flush CSS files for all the sites in the network.

## Usage Examples

```bash
wp elementor flush-css
```

This command will flush the CSS files for all Elementor pages. It doesn't create new CSS files, only flush the old files.

```bash
wp elementor flush-css --regenerate
```

This command will flush the CSS files for all Elementor pages and re-create the new CSS files.

```bash
wp elementor flush-css --network
```

This command will flush the CSS files for all Elementor pages in all the sites in the network.
