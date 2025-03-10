# Panel Structure

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor Editor panels are built with components. You can import these panel components from the `@elementor/editor-panels` at build time or use the `window.elementor-v2.editor-panels` global object at run time.

## Panel Components

Elementor uses the folowing panel components:

- `<Panel>` - wrapper component for editor panels.
- `<PanelHeader>` - wrapper component for editor panel header.
- `<PanelHeaderTitle>` - wrapper component for the panel header text.
- `<PanelBody>` - wrapper component for the pael content.

::: tip Note
You don't _have_ to use Elementor's components, but we _highly_ recommend using them in order to keep consistency across all the Editor panels and have better UX for the users.
:::

## Usage

### Build Time

```jsx
import { Panel, PanelHeader, PanelHeaderTitle, PanelBody } from '@elementor/editor-panels';

export default function MyPanel() {
	return (
		<Panel>
			<PanelHeader>
				<PanelHeaderTitle>
					{/* Panel title */}
				</PanelHeaderTitle>
			</PanelHeader>

			<PanelBody>
				{/* Panel content */}
			</PanelBody>
		</Panel>
	);
}
```

### Run Time

```jsx
const { Panel, PanelHeader, PanelHeaderTitle, PanelBody } = window.elementor-v2.editorPanels;

export default function MyPanel() {
	return (
		<Panel>
			<PanelHeader>
				<PanelHeaderTitle>
					{/* Panel title */}
				</PanelHeaderTitle>
			</PanelHeader>

			<PanelBody>
				{/* Panel content */}
			</PanelBody>
		</Panel>
	);
}
```
