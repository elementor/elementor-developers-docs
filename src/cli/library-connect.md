# Library Connect

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Connect a site to the Elementor library from the command line by simply providing a WordPress user and a connection token.

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

This command will connect the WordPress `admin` user to the Elementor library .

## Notes

::: warning Notes
This command is used by Elementor team to connect with Elementor servers in order to update the library using CLI for testing and debugging. For the moment, external developers cannot obtain the `token`.
:::
