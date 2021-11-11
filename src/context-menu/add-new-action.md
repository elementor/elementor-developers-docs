# Add New Action

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

To add a new action to the context menu, we need to define a new action object and insert the object into the relevant context menu group.

## Add New Widget Action

In the example below, we'll add a new action to an existing `custom-widget-actions` group. This action will add an external link to Elementor website.

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newAction = {
		name: 'elementor-link',
		icon: 'eicon-alert',
		title: 'Elementor Link',
		isEnabled: () => true,
		callback: () => window.open( 'https://elementor.com/', '_blank' ).focus(),
	};

	if ( 'widget' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-widget-actions' === group.name ) {
				group.actions.push( newAction );
			}
		} );
	}

	return customGroups;

} );
```

## Add New Column Action

Now we'll add a new action to an existing `custom-column-actions` group. This action will log some text in the browser console.

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newAction = {
		name: 'log',
		icon: 'eicon-code',
		title: 'Some Console Log',
		isEnabled: () => true,
		callback: () => console.log( 'some text...' ),
	};

	if ( 'column' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-column-actions' === group.name ) {
				group.actions.push( newAction );
			}
		} );
	}

	return customGroups;

} );
```

## Add New Section Action

Next we'll add a new action to an existing `custom-section-actions` group. This action will open the page settings panel.

```js
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newAction = {
		name: 'page-settings',
		icon: 'eicon-cog',
		title: 'Page Settings',
		isEnabled: () => true,
		callback: () => $e.run( 'panel/page-settings/settings' ),
	};

	if ( 'section' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-section-actions' === group.name ) {
				group.actions.push( newAction );
			}
		} );
	}

	return customGroups;

} );
```
