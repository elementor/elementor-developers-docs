# Add New Action

To add a new action to the context menu, we need to define a new action object and insert the object into the relevant context menu group.

## Add New Widget Action

In the example below, we'll add a new "alert" action to the general group. This action will activate a callback function alerting the widget name.

```js {1}
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {

	const newAction = {
		name: 'alert',
		icon: 'eicon-alert',
		title: 'Widget Type',
		isEnabled: () => true,
		callback: () => alert( view.model.get( 'widgetType' ) ),
	};

	groups.forEach( ( group ) => {
		if ( 'general' === group.name ) {
			group.actions.push( newAction );
		}
	} );

	return groups;

} );
```

## Add New Column Action

Now we'll add a new action to the "tools" group which will console log some text.

```js {1}
elementor.hooks.addFilter( 'elements/column/contextMenuGroups', ( groups, view ) => {

	const newAction = {
		name: 'log',
		icon: 'eicon-code',
		title: 'Some Console Log',
		isEnabled: () => true,
		callback: () => console.log( 'some text...' ),
	};

	groups.forEach( ( group ) => {
		if ( 'tools' === group.name ) {
			group.actions.push( newAction );
		}
	} );

	return groups;

} );
```

## Add New Section Action

Now we'll add a new action to the "tools" group which will open the page settings panel.

```js {1}
elementor.hooks.addFilter( 'elements/section/contextMenuGroups', ( groups, view ) => {

	const newAction = {
		name: 'page-settings',
		icon: 'eicon-cog',
		title: 'Page Settings',
		isEnabled: () => true,
		callback: () => $e.run( 'panel/page-settings/settings' ),
	};

	groups.forEach( ( group ) => {
		if ( 'tools' === group.name ) {
			group.actions.push( newAction );
		}
	} );

	return groups;

} );
```
