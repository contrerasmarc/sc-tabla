// ==========================================================================
// Project:   Tabla.tableController
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals Tabla */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/


// ..........................................................
// Using SPROUTCORE-TABLE
// 
Tabla.myController2 = SC.ArrayController.create(SC.TableDelegate,
/** @scope Tabla.myController.prototype */ {
	
	columns: [
		SC.TableColumn.create({ key: "dateF", label: "Date", width: 80 }),
		SC.TableColumn.create({ key: "number", label: "Number", width: 70 }),
		SC.TableColumn.create({ key: "member", label: "Member", width: 150 }),
		SC.TableColumn.create({ key: "memberName", label: "Real Membre Name", width: 120 }),
		SC.TableColumn.create({ key: "name", label: "Name", width: 150 })
	]

});

// ..........................................................
// Using GXTABLE
// 
Tabla.myController = SC.ArrayController.create(SC.TableUsersDefaultMixin,
/** @scope Tabla.myController.prototype */ {

	NAME: 'myController',

	columnsList: [
		SC.TableColumn.create({ key: "dateF", label: "Date", width: 80}),
		SC.TableColumn.create({ key: "number", label: "Number", width: 70}),
		SC.TableColumn.create({ key: "member", label: "Member", width: 150}),
		SC.TableColumn.create({ key: "memberName", label: "Real Membre Name", width: 120}),
		SC.TableColumn.create({ key: "name", label: "Name", width: 150})
	],
	columnsDefault: ["Date", "Number", "Member", "Name"],

	radioColumnItems: ["Date", "Number", "Member", "Name"],

	init: function() {
		sc_super();
		this.invokeLast('initUsersDefaultMixin');
	}

});
