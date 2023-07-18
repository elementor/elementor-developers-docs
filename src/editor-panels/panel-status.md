# Panel Status

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When registering a new panel, you get a React hook for the panel status:

**panel.js**

```js
import { createPanel, registerPanel } from '@elementor/editor-panels';
import MyPanel from './components/my-panel';

export const { usePanelStatus } = createPanel( {
	id: 'my-panel',
	component: MyPanel,
} );
```

**components/my-app.jsx**

```jsx
import { usePanelStatus } from '../panel';

export default function MyApp() {
    const { isOpen, isBlocked } = usePanelStatus();

    return (
        <>
            <p>Panel is { isOpen ? 'open' : 'closed' }</p>
            <p>Panel is { isBlocked ? 'blocked' : 'not blocked' }</p>
        </>
    );
}
```

This hook will return the following values:

- `isOpen` - `true` if the panel is open, `false` otherwise.
- `isBlocked` - `true` if the panel can be interacted with, `false` otherwise.
