// ==========================================================================
// Project:   Tabla - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals Tabla */

// This page describes the main user interface for your application.
Tabla.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['lblgxtable', 'tblMembers', 'lblsproutcoretable', 'tblMembers2' ],

// ..........................................................
// Using GXTABLE
// 
		
    lblgxtable: SC.LabelView.design({
      classNames: ['welcome-label'],
      layout: { top: 8, left: 8 , width: 300, height: 24 },
      tagName: "h1",
      value: "gxtable"
    }),

		tblMembers: SC.TableView.design({
		  layout: {
				top: 32,
				height: 304,
		    left: 12,
		    right: 8
		  },

			contentBinding: 'Tabla.myController.arrangedObjects',
			selectionBinding: 'Tabla.myController.selection',
			columnsBinding: 'Tabla.myController.columns',

		  headerHeight:22,
		  rowHeight:20,
		  canReorderContent: NO,
		  allowDeselectAll: NO,
		  canDeleteContent: YES,
			showAlternatingRows: YES,
			delegate: SC.TableDelegate,
			exampleView: SC.TableRowView

		}),

// ..........................................................
// Using SPROUTCORE-TABLE
// 
				
    lblsproutcoretable: SC.LabelView.design({
      classNames: ['welcome-label'],
      layout: { top: 344, left: 8 , width: 300, height: 24 },
      tagName: "h1",
      value: "sproutcore-table"
    }),

		
		tblMembers2: SC.TableView.design({
		  layout: {
				top: 376,
				height: 304,
		    left: 12,
		    right: 8
		  },

			contentBinding: 'Tabla.myController2.arrangedObjects',
			selectionBinding: 'Tabla.myController2.selection',  
			columnsBinding: 'Tabla.myController2.columns'
	
		})
		
  })

});
