# Remove Action

To remove an existing action from the context menu, we need to delete that action from a group.

## Remove Widget Action

In the example below, we'll remove "duplicate", a widget action located in the "general" group:

```js {1}
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {

	groups.forEach( ( group ) => {
		if ( 'general' === group.name ) {
			const actionIndex = group.actions.findIndex( ( action ) => 'duplicate' === action.name );
			group.actions.splice( actionIndex, 1 );
		}
	} );

	return groups;

} );
```

## Remove Column Action

Now we'll remove "add new column", a column action located in the "add" group:

```js {1}
elementor.hooks.addFilter( 'elements/column/contextMenuGroups', ( groups, view ) => {

	groups.forEach( ( group ) => {
		if ( 'addNew' === group.name ) {
			const actionIndex = group.actions.findIndex( ( action ) => 'addNew' === action.name );
			group.actions.splice( actionIndex, 1 );
		}
	} );

	return groups;

} );
```

## Remove Section Action

Now we'll remove "Save as Template", a section action located in the "save" group:

```js {1}
elementor.hooks.addFilter( 'elements/section/contextMenuGroups', ( groups, view ) => {

	groups.forEach( ( group ) => {
		if ( 'save' === group.name ) {
			const actionIndex = group.actions.findIndex( ( action ) => 'save' === action.name );
			group.actions.splice( actionIndex, 1 );
		}
	} );

	return groups;

} );
```
