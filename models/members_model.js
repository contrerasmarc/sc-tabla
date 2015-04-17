// ==========================================================================
// Project:   Tabla.Members
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals Tabla */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Tabla.Members = SC.Record.extend(
/** @scope Tabla.Members.prototype */ {

	dateF: SC.Record.attr(String),
	number: SC.Record.attr(Number),
	member: SC.Record.attr(String),
	memberName: SC.Record.attr(String),
	name: SC.Record.attr(String)
	
});
