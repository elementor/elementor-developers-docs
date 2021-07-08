# Add New Action

xxx

```js
// Add new action
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', ( groups, view ) => {
   const newAction = {
      name: 'alert',
      icon: 'eicon-alert',
      title: __( 'Click Me :)' ),
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
