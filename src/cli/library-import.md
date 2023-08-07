# Library Import

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Users can import Elementor templates from the library by uploading a single template JSON file or a ZIP file with multiple JSON files. The Elementor CLI `library import` command will import the template using the command line.

## Command

```bash
wp elementor library import <file-path> [--returnType]
```

## Arguments

`<file-path>`

_(Required)_ A path to the template file.

`[--returnType]`

_(Optional)_ The output format. Available values are `ids` and `info`. Default is `info`.

## Usage Examples

```bash
wp elementor library import path/to/elementor-12345-2022-03-04.json
```

This command will import the `path/to/elementor-12345-2022-03-04.json` template to the library.

```bash
wp elementor library import path/to/elementor-12345-2022-03-04.json --returnType=ids
```

This command will import the `path/to/elementor-12345-2022-03-04.json` template to the library and return the imported items ids.
