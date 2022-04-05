# Library Sync
 
<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor holds locally a list of available templates that can be downloaded from the Elementor template library. A transient is scheduled to synch the available templates every 12 hours. Elementor CLI `library sync` command triggers the sync from the cloud using the command line.

## Command

```bash
wp elementor library sync [--force] [--network]
```

## Arguments

`[--force]`

_(Optional)_ Force library sync even if it looks like the library is already up to date.

`[--network]`

_(Optional)_ Sync library for each site in the network.

## Usage Examples

```bash
wp elementor library sync
```

This command will sync the library with Elementor cloud library.

```bash
wp elementor library sync --force
```

This command will sync the library with Elementor cloud library even if it looks like that the library is already up to date.

```bash
wp elementor library sync --network
```

This command will sync the library with Elementor cloud library for each site in the network.
