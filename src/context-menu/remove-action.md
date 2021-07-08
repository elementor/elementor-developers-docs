# Remove Action

xxx

```js
// Remove existing action
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {
   groups.forEach( ( group ) => {
      if ( 'general' === group.name ) {
         const duplicateActionIndex = group.actions.findIndex( ( action ) => 'duplicate' === action.name );
         group.actions.splice( duplicateActionIndex, 1 );
      }
   } );
   return groups;
} );
```
