# Replace URLs

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Sites that change the URL, whether migrating to different domain or simple transtering from HTTP to HTTPs, need to update URLs in the database. Elementor has a tool that replaces old URLs with new URLs in all Elementor pages. The Elementor CLI `replace-urls` command will do exactly that.

## Command

```bash
wp elementor replace-urls <old> <new> [--force]
```

## Arguments

`<old>`

_(Required)_ The old URL.

`<new>`

_(Required)_ The new URL.

`[--force]`

_(Optional)_ Suppress error messages.

## Usage Examples

```bash
wp elementor replace-urls http://elementor.com https://elementor.com
```

This command will replace all `http://elementor.com` HTTP URLs with `https://elementor.com` HTTPS URLs.

```bash
wp elementor replace-urls http://elementor.com https://elementor.com --force
```

This command will replace all `http://elementor.com` HTTP URLs with `https://elementor.com` HTTPS URLs, without throwing errors.
