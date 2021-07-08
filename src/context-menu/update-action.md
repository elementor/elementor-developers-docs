# Update Action

xxx

```js
// update existing action
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {
   groups.forEach( ( group ) => {
      if ( 'general' === group.name ) {
         group.actions.forEach( ( action ) => {
            if ( 'duplicate' === action.name ) {
               action.icon = 'eicon-alert';
               action.title = 'Hellooo';
               action.callback = () => alert( 'bla bla' );
            }
         } );
      }
   } );
   return groups;
} );
```
