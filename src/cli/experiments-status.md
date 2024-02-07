# Experiment Status

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor experimental features can be used before they're officially released. To check from the command line whether an experimental feature is active or inactive, use the `experiments status` command.

## Command

```bash
wp elementor experiments status <experiment-name>
```

## Arguments

`<experiment-name>`

_(Required)_ The name of the experiment.

## Usage Examples

```bash
wp elementor experiments status container
```

This command will check whether the `container` experiment is `active` or `inactive`.
