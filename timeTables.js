// ==UserScript==
// @name WIT timetable automatic selection
// @namespace http://antonkrug.eu
// @version 0.65
// @description It selects your desired course
// @match http://studentssp.wit.ie/Timetables/StudentGroupTT.aspx
// @copyright 2014-2015 Anton Krug
// @require http://code.jquery.com/jquery-latest.js
// @downloadURL https://raw.githubusercontent.com/truhlikfredy/WitTimeTables/master/timeTables.js
// @updateURL https://raw.githubusercontent.com/truhlikfredy/WitTimeTables/master/timeTables.js
// ==/UserScript==

$(document).ready(function() {
  var school='SS';                                    //School of science
  var department='548715F70874B2B1561DDC98FE61E5C0';  //Computing, maths & physics department
  var course='85EA4CF769354ECAD9F18363EC561529';      //Applied Computing Y4
  var group='kcomp_b4-W';                             //Students group
  var weekOffset='37';                                 //For week 38 - 35 will display college week 3
    
  getThisWeekNumber = function(){
    var d = new Date();
    d.setHours(0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    var ret = Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);

    //if sunday or saturday skip to next week.
    var now=new Date();
    if (now.getDay()===0 || now.getDay()==6) ret++;
    return ret;
  };
    
  //alert(getThisWeekNumber()-weekOffset);

  if ($("#CboPOS").val()=="%" ||  $("#CboPOS").val()=="E202D2DBD75D2CBF9E167CD46A2B0B68" ) {
    $("#cboSchool").val(school);
    $("#CboDep").val(department);
    $("#CboPOS").val(course);
    $("#CboStudParentGrp").val(group);
    $("#CboWeeks").val(getThisWeekNumber()-weekOffset);
    $("#BtnRetrieve").click();
  } else {
    //Re-select some missing selections just for visuals.
    //And if somebody wants select something else (different week) so he will not be confused
    $("#CboStudParentGrp").val(group);
    //alter presentation of the time tables
    $('#divTT table').first().remove();         //remove logo
    $('#divTT *').each(function() {             //alter fonts
      xsize= parseInt($(this).css('font-size')) + 1;    
      $(this).css('font-size', '9px');
    });
  }
});
