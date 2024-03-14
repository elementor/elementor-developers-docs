# Panel Actions

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When registering a new panel, you get a React hook for panel-related actions:

**panel.js**

```js
import { createPanel, registerPanel } from '@elementor/editor-panels';
import MyPanel from './components/my-panel';

export const { usePanelActions } = createPanel( {
	id: 'my-panel',
	component: MyPanel,
} );
```

**components/my-app.jsx**

```jsx
import { usePanelActions } from '../panel';

export default function MyApp() {
    const { open, close } = usePanelActions();

    return (
        <>
            <button onClick={ open }>Open Panel</button>
            <button onClick={ close }>Close Panel</button>
        </>
    );
}
```

The above buttons will open and close the specific panel that we created in `panel.js`.
