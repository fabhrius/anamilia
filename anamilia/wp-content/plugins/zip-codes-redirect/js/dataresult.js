function dataresult(str) {
if (this.timer) {window.clearTimeout(this.timer);}// timer for user typing
this.timer = window.setTimeout(function() {
if (str.length===0) {
document.getElementById("dataneg").innerHTML="";
return;}
let datasize = dataresult_vars.datasize ;
var data = {
'action'   : 'datasearch_ajax_call', // the name of the PHP function we are calling!
'datavalue' : document.forms.dataform.datainput.value,//value to send to function
'security' : dataresult_vars.security};
jQuery.post(dataresult_vars.ajaxurl, data, function(response) { // send data and respond
document.getElementById("dataneg").style.overflow = "auto";
document.getElementById("dataneg").style.height = datasize;
document.getElementById("dataneg").innerHTML = (response); 
})},500);}