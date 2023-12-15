/**
 *= require_self
 */

// create a new instance of Application class
Ext.application({
  // the global namespace
  name: 'AM',

  appFolder: '/assets/app',

  controllers: ['Users'],

  // controllers: [
  //   'MainController'
  // ],
  // launch: function () {
  //   Ext.create('AM.view.Viewport');
  // }

  autoCreateViewport: true
  // launch: function() {
  //       Ext.create('Ext.container.Viewport', {
  //           layout: 'fit',
  //           items: [
  //               {
  //                   xtype: 'panel',
  //                   title: 'Account',
  //                   html : 'List of users will go here'
  //               }
  //           ]
  //       });
  //   }
});

