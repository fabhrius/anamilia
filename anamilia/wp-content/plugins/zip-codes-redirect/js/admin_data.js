		function admindata(str) {
			
			if (this.timer) {window.clearTimeout(this.timer);}// timer for user typing
			this.timer = window.setTimeout(function() {
			if (str.length===0) {
			document.getElementById("adminsearch").innerHTML="To see what happens";
			return;}
			var data = {
				'action'   : 'admin_datasearch_ajax_call', // the name of the PHP function we are calling!
				'datavalue' : document.forms.adminform.admininput.value }; //value to send to function
				jQuery.post(datalisten_vars.ajaxurl, data, function(response) { // send data and respond
			document.getElementById("adminsearch").style.overflow = "auto";
            document.getElementById("adminsearch").style.height = "230px";
			document.getElementById("adminsearch").innerHTML = (response); 
			})}, 500);}