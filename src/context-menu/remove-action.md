# Remove Action

To remove existing action from the context menu we simply need to delete a specific action from a group.

## Remove Widget Action

Remove widget "Duplicate" action which is located in the "general" group:

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

Remove "Add new column" action which is located in the "add" group:

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

Remove section "Save as Template" action which is located in the "save" group:

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
