# Update DB

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

In some cases new Elementor versions perform changes in the database (e.g. migrate to kits, replace schemes with globals etc.). Elementor CLI `update db` command will trigger the database update functionality using the command line.

## Command

```bash
wp elementor update db [--force] [--network]
```

and

```bash
wp elementor-pro update db [--force] [--network]
```

## Arguments

`[--force]`

_(Optional)_ Force database update even if it looks like an update is in progress.

`[--network]`

_(Optional)_ Update the database for each site in the network.

## Usage Examples

```bash
wp elementor update db
```

This command will update the database, if an update is needed.

```bash
wp elementor-pro update db
```

This command will update the Elementor Pro database, if an update is needed.

```bash
wp elementor update db --force
```

This command will update the database even if another process is running.

```bash
wp elementor update db --network
```

This command will update the database for each site in the network.
