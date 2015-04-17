# Overview

Tests for run a table in [Sproutcore](http://www.github.com/sproutcore/sproutcore)

My results today, by framework:
- Using gxtable : Only the header
- Using sproutcore-table : The header and the last row

For gxtable, i'm using the following controller:

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

For sproutcore-table, i'm using the following controller

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

You need to add a "frameworks" folder with [gxtable](https://github.com/nicolasbadia/gxtable) and [sproutcore-table](https://github.com/gestixi/sproutcore-table).
