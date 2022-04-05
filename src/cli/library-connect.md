# Library Connect

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Connect a site to Elementor library from the command line, simply provide a WordPress user and a connection token.

## Command

```bash
wp elementor library connect [--user] [--token]
```

## Arguments

`[--user]`

_(Optional)_ The user to connect. Accepts user id, user login name or an email.

`[--token]`

_(Optional)_ A connect token from Elementor account dashboard.

## Usage Examples

```bash
wp elementor library connect --user=admin --token=xxx
```

This command will connect to Elementor library the WordPress `admin` user.
