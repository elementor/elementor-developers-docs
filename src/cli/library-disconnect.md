# Library Disconnect

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Disconnect a site from Elementor library using the command line, by simply providing the WordPress user.

## Command

```bash
wp elementor library disconnect [--user]
```

## Arguments

`[--user]`

_(Optional)_ The user to disconnect. Accepts user id, user login name or an email.

## Usage Examples

```bash
wp elementor library disconnect --user=admin
```

This command will disconnect from Elementor library the WordPress `admin` user.
