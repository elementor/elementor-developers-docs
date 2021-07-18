# Add New Action

To add a new action to the context menu we need to define several fields like the name, the icon, the callback, etc. All the fields are grouped together in an object and injected to the relevant context menu group.

## Add New Widget Action

When we add new actions we need to set an object that provides the relevant information, and then assign the action object to the relevant group.

As an example we will add to the "general" group a new "alert" action which activates a callback function that alerts the widget name.

```js {1}
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {

	const newAction = {
		name: 'alert',
		icon: 'eicon-alert',
		title: __( 'Widgets name', 'plugin-name' ),
		isEnabled: () => true,
		callback: () => {
			alert( view.model.get( 'widgetType' ) );
		},
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

```js {1}
elementor.hooks.addFilter( 'elements/column/contextMenuGroups', ( groups, view ) => {

} );
```

## Add New Section Action

```js {1}
elementor.hooks.addFilter( 'elements/section/contextMenuGroups', ( groups, view ) => {

} );
```
