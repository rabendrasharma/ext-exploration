// Ext.define('AM.controller.MainController', {
//   extend: 'Ext.app.Controller',

//   // Define the views and stores that this controller uses
//   views: [
//     'Viewport'
//   ],

//   init: function () {
//     this.control({
//       'treepanel': {
//         itemclick: this.onTreePanelItemClick
//       }
//     });
//   },

//   onTreePanelItemClick: function (tree, record) {
//     // Check if the clicked item has an itemId of 'home'
//     if (record.get('itemId') === 'home') {
//       // Display the home content in the center region
//       var centerPanel = Ext.ComponentQuery.query('tabpanel')[0];
//       centerPanel.removeAll(); // Clear existing items
//       centerPanel.add({
//         title: 'Home Content',
//         html: 'This is the home content.'
//       });
//     }
//   }
// });
