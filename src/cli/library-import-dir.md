# Library Import Dir

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Importing templates one by one is time consuming. You can import all the templates in a directory at once. Elementor CLI `library import-dir` command will import all the template JSON files using the command line.

## Command

```bash
wp elementor library import-dir <dir-path>
```

## Arguments

`<dir-path>`

_(Required)_ A path to the directory.

## Usage Examples

```bash
wp elementor library import-dir path/to/custom-templates/
```

This command will import to the library all template JSON files in the `path/to/custom-templates/` directory.
