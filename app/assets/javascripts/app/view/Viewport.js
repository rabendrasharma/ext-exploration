Ext.define('AM.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'border', 
  items: [{
    region: 'north', 
    xtype: 'panel',
    html: '<h1>Header Content</h1>',
    height: 50,
    split: false,
    cls: 'header-panel' 
  }, 
  {
    region: 'west',
    xtype: 'panel',
    title: 'Sidebar',
    width: 400,
    split: true,
    collapsible: true,
    cls: 'sidebar-panel', 
    items: [{
      xtype: 'treepanel', 
      title: 'Navigation',
      rootVisible: false,
      store: Ext.create('Ext.data.TreeStore', {
        root: {
          expanded: true,
          children: [{
            text: 'Home',
            leaf: true
          }, {
            text: 'Users',
            leaf: true
          },
          {
            text: 'About',
            leaf: true
          }]
        }
      })
    }]
  }, {
    region: 'center',
    xtype: 'tabpanel',
    cls: 'tabpanel-panel', 
    items: [{
      xtype: 'userlist',
      title: 'Users',
      html: 'List of users will go here'
    }]
  }]
});
