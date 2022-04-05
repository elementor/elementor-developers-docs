# Kit Import
 
<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor kits are a bundle of templates, pages, popups, etc. Rather than importing each template individually you can import all the content at once. A kit can be imported from the admin panel or from the command line using the `kit import` command.

## Command

```bash
wp elementor kit import <file-path> [--include] [--overrideConditions] [--sourceType]
```

## Arguments

`<file-path>`

_(Required)_ A path to the kit file.

`[--include]`

_(Optional)_ Data types to include in the import. Possible values are `content`, `templates`, `site-settings`. If this parameter won't be specified, all data types will be included.

`[--overrideConditions]`

_(Optional)_ Templates ids to override conditions for.

`[--sourceType]`

_(Optional)_ Which source type is used in the current session. Available values are `local`, `remote`, `library`. Default value is `local`.

## Usage Examples

```bash
wp elementor kit import path/to/elementor-kit.zip
```

This command will import the whole kit file content.

```bash
wp elementor kit import path/to/elementor-kit.zip --include=site-settings,content
```

This command will import only site settings and content.

```bash
wp elementor kit import path/to/elementor-kit.zip --overrideConditions=3478,4520
```

This command will import all content and will override conditions for the given template ids.

```bash
wp elementor kit import path/to/elementor-kit.zip --unfilteredFilesUpload=enable
```

This command will allow the import process to import unfiltered files.
