<?php

if ( !defined( 'ABSPATH' ) ) {
    // Prevent direct access to this file.
    header( 'HTTP/1.0 403 Forbidden' );
    echo  'This file should not be accessed directly NOW PLEASE GO AWAY!' ;
    exit;
}

// Exit if accessed directly
add_filter( 'upload_mimes', 'custom_upload_xml' );
add_filter( 'upload_dir', 'zipcode_redirect' );
function custom_upload_xml( $mimes )
{
    $mimes['xml'] = "text/xml";
    return $mimes;
}

// allow xml to be uploaded
$option = get_option( 'dataredirect' );
//get textarea messages

if ( isset( $_POST['update'] ) ) {
    esc_html__( $option["redirectask"] = $redirectask = $_POST['redirectask'] );
    esc_html__( $option["redirectneg"] = $redirectneg = $_POST['redirectneg'] );
    esc_html__( $option["redirectsize"] = $datasize = $_POST['datasize'] );
    update_option( 'dataredirect', $option );
}

?>
	   
<style>

html{box-sizing:border-box}:before:after{box-sizing:inherit}
html,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}
h1,h2,h3,h4 {text-align: center;}
h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}
.pr-serif{font-family:serif}
h1,h2,h3,h4,h5,h6{font-family:"Segoe UI",Arial,sans-serif;font-weight:400;margin:10px 0}
.pr-col,.pr-half,.pr-third,.pr-twothird,.pr-threequarter,.pr-quarter{float:left;width:100%}
.pr-col.s1{width:8.33333%}.pr-col.s2{width:16.66666%}.pr-col.s3{width:24.99999%}.pr-col.s4{width:33.33333%}
.pr-col.s5{width:41.66666%}.pr-col.s6{width:49.99999%}.pr-col.s7{width:58.33333%}.pr-col.s8{width:66.66666%}
.pr-col.s9{width:74.99999%}.pr-col.s10{width:83.33333%}.pr-col.s11{width:91.66666%}.pr-col.s12{width:99.99999%}
@media (min-width:601px){.pr-col.m1{width:8.33333%}.pr-col.m2{width:16.66666%}.pr-col.m3,.pr-quarter{width:24.99999%}.pr-col.m4,.pr-third{width:33.33333%}
.pr-col.m5{width:41.66666%}.pr-col.m6,.pr-half{width:49.99999%}.pr-col.m7{width:58.33333%}.pr-col.m8,.pr-twothird{width:66.66666%}
textarea {resize: none;}
.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}
.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}
.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}
.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}
.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}
.w3-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%)}
.w3-aqua,.w3-hover-aqua:hover{color:#000;background-color:#00ffff}
.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}
.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}	
.w3-hide-small{display:none}.w3-mobile{display:block;width:100%}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}
.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}
@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}
@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none}.w3-sidebar.w3-collapse{display:block}}
.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}
.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,
.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:"";display:table;clear:both}
.zcr-col,.zcr-half,.zcr-third,.zcr-twothird,.zcr-threequarter,.zcr-quarter{float:left;width:100%}
.zcr-col.s1{width:8.33333%}.zcr-col.s2{width:16.66666%}.zcr-col.s3{width:24.99999%}.zcr-col.s4{width:33.33333%}
.zcr-col.s5{width:41.66666%}.zcr-col.s6{width:49.99999%}.zcr-col.s7{width:58.33333%}.zcr-col.s8{width:66.66666%}
.zcr-col.s9{width:74.99999%}.zcr-col.s10{width:83.33333%}.zcr-col.s11{width:91.66666%}.zcr-col.s12{width:99.99999%}
@media (min-width:601px){.zcr-col.m1{width:8.33333%}.zcr-col.m2{width:16.66666%}.zcr-col.m3,.zcr-quarter{width:24.99999%}.zcr-col.m4,.zcr-third{width:33.33333%}
.zcr-col.m5{width:41.66666%}.zcr-col.m6,.zcr-half{width:49.99999%}.zcr-col.m7{width:58.33333%}.zcr-col.m8,.zcr-twothird{width:66.66666%}
textarea {resize: none;}


</style>

<h1><?php 
label1:
esc_html_e( get_admin_page_title() );
?></h1>

<div class="w3-container">

<div class="zcr-half zcr-container">

	<h3>What Is Data Redirect.</h3> 
	<h5>First and foremost, it is a live search of text data stored in a XML file.<br>
	Results are shown as you type.<br>
	Results narrow as you continue typing.<br>
	The text data can be anything you want, towns, counties, goods you are selling, services you offer etc.<br>
	Based on the text data, the user can be redirected to any URL you want.<br>
	This could and will help your customers find what they want on your website very quickly.<br>
	In our example on the right, we will use the counties of the USA including Puerto Rico.<br>
	There Are 3235 counties in the data.<br> 
	Each county has the URL http://www.example.com with its respective state attached to it.<br>
	As you can see, this is a powerful search tool. <br>
	Your very own search engine for your site.<br></h5>
	
</div>

<div class="zcr-half zcr-container">

	<h3>The XML File Contents Are Shown Below </h3>
	<h3><textarea id= "textarea" rows = "5" cols = "60" readonly>
	<?php 
$xmlDoc = new DOMDocument();
$xmlDoc->load( plugin_dir_url( __FILE__ ) . "../includes/redirects.xml" );
print $xmlDoc->saveXML();
?></textarea></h3>

	<div class = "zipcodetext" style="text-align:center">Start typing any county in the USA.</div>
	<form id = "adminform" style="text-align:center;">
	<input type="text" style="text-align:center;" id="xml" size="20" name="admininput" onkeyup="admindata(this.value)">
	</form>
	<div class = "zipcodetext" id="adminsearch" style="text-align:center">And see what happens</div>
	
	</div></div> 

<h3>Live search is an essential feature for user experience on your website.</h3>
<h3>Unlimited text data can be redirected to unlimited URLs.</h3>
<h3>Available With The Unlimited Plan</h3>
<h3>How Does Data Redirect Work.</h3> 
	<h5>First of all, Data Redirect creates an input box on your webpage, populated with messages you have set.<br>
	When a user inputs data a JavaScript function is triggered, sending the data to your server via AJAX.<br>
	Data Redirect then checks the user input, compares it to the text data stored in the redirects.xml file and returns the result.<br>
	If the user input matches the text data stored in the redirects.xml file, the text data and URL are displayed as a html link.<br>
	If the user input does not match the text data, a default message is displayed.<br>
	Results are shown as the user types.<br>
	Results narrow as the user continues to type.<br>
	A 500 millisecond delay is implemented to allow for user typing, and to avoid to many requests to the server.<br>
	It helps to put your data alphabetically in the redirects.xml file.<br>
	We recommend you put the Data Redirect in a sidebar or maybe a banner.<br>
	Only put one instance of the shortcode [dataredirect] on a webpage.<br>
	You can use multiple instances of the shortcode across your website.<br>
	Be aware of webpage content movement when the Data Redirect is used and place the shortcode accordingly.<br>
	Want to add your CSS. Just open plugins/zipcode-redirect/css/style.css in your favorite editor. Add your CSS and save.<br>
	</h5>
