# Kit Export
 
<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Exporting multiple individual templates is not an easy task. Elementor can export all the content, the templates and site settings at once as a kit. A kit can be exported from the admin panel or from the command line using the `kit export` command.

## Command

```bash
wp elementor kit export <file-path> [--include]
```

## Arguments

`<file-path>`

_(Required)_ A path to the kit file.

`[--include]`

_(Optional)_ Data types to include in the export. Possible values are `content`, `templates`, `site-settings`. If this parameter won't be specified, all data types will be included.

## Usage Examples

```bash
wp elementor kit export path/to/export-file-name.zip
```

This command will export all site data to a specified file name.

```bash
wp elementor kit export path/to/export-file-name.zip --include=site-settings,content
```

This command will export only site settings and content.
