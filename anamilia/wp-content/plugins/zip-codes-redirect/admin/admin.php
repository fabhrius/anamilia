<?php

if ( !defined( 'ABSPATH' ) ) {
    // Prevent direct access to this file.
    header( 'HTTP/1.0 403 Forbidden' );
    echo  'This file should not be accessed directly NOW PLEASE GO AWAY!' ;
    exit;
}

// Exit if accessed directly
switch ( $space = esc_html( get_option( 'zipcodes1' ) ) ) {
    //for the numpties in my life
    case "":
        delete_option( 'zipcodes1' );
        add_option( 'zipcodes1', "http://www.example.com 001 002 003 004 005 006 007 008 009 010 011 012" );
    default:
        $space = esc_html( get_option( 'zipcodes1' ) );
        $space = str_replace( "  ", " ", $space );
        update_option( 'zipcodes1', $space );
}
switch ( $space = esc_html( get_option( 'zipcodes2' ) ) ) {
    //for the numpties
    case "":
        delete_option( 'zipcodes2' );
        add_option( 'zipcodes2', "http://www.example.com 001 002 003 004 005 006 007 008 009 010 011 012" );
    default:
        $space = esc_html( get_option( 'zipcodes2' ) );
        $space = str_replace( "  ", " ", $space );
        update_option( 'zipcodes2', $space );
}
$zipcodeswon = explode( "\n", esc_html( get_option( 'zipcodeswon' ) ) );
// put zips in array
$zipcodeswon = array_reverse( $zipcodeswon );
//reverse for viewing
$zipcodeswon = implode( "\n", $zipcodeswon );
// put zips in string
$zipcodeslost = explode( "\n", esc_html( get_option( 'zipcodeslost' ) ) );
// put zips in array
$zipcodeslost = array_reverse( $zipcodeslost );
//reverse for viewing
$zipcodeslost = implode( "\n", $zipcodeslost );
// put zips in string
add_filter( 'upload_dir', 'zipcode_redirect' );
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
textarea {
   resize: none;}}
</style>


<h1><?php 
esc_html_e( get_admin_page_title() );
?></h1>
  
  <form method="post" action="options.php">
  
<?php 
settings_fields( 'zipcode_redirect_settings' );
?>

<div class="w3-container">

					<h3>1.) Select Which  Zip Code System To Use</h3>
					
<h4><input type="radio" id="7digit" name="zipcodescheck" value="7"<?php 
if ( get_option( 'zipcodescheck' ) == '7' ) {
    echo  'checked="checked"' ;
}
?>> 5, 6, Or 7 Digit "UK" Style System.					
&emsp;					
<input type="radio" id="4digit" name="zipcodescheck" value="4"<?php 
if ( get_option( 'zipcodescheck' ) == '4' ) {
    echo  'checked="checked"' ;
}
?>> Four (4) Digit "Swiss" Style System.</h4>

<h4><input type="radio" id="5digit" name="zipcodescheck" value="5"<?php 
if ( get_option( 'zipcodescheck' ) == '5' ) {
    echo  'checked="checked"' ;
}
?>> Five (5) Digit "American" Style System.
&emsp;
<input type="radio" id="6digit" name="zipcodescheck" value="6"<?php 
if ( get_option( 'zipcodescheck' ) == '6' ) {
    echo  'checked="checked"' ;
}
?>> Six (6) Digit "Canadian" Style System.</h4>

</div>
<div class="w3-container">

					<h3>2.) Now Select Whether To Use A Submit Button </h3>
		
 <h4>Use A Submit Button <input type="checkbox" name="zipsubmitcheck" id="zipsubmitcheck" <?php 
if ( get_option( 'zipsubmitcheck' ) == 'on' ) {
    echo  "checked" ;
}
?>></h4>	

</div>

<div class="w3-container">
<h3>3.) Then Create Messages For The Plugin To Use</h3>
<div class="zcr-third zcr-container">

<h4>Message Asking User To Enter</h4>  
<h1><textarea name = "zipcodesask" id = "zipcodesask" rows = "2" cols = "30" maxlength = "100" >
<?php 
esc_html_e( get_option( 'zipcodesask' ) );
?></textarea></h1>
<h4>Their Full Zip code</h4>

</div>

<div class="zcr-third zcr-container">


<h4>Message Asking User To Use The</h4>
<h1><textarea name="zipcodesuse" id = "zipcodesuse" rows="2" cols="30" maxlength="100" ><?php 
esc_html_e( get_option( 'zipcodesuse' ) );
?></textarea></h1>
<h4> Four, Five, Six Or UK Zip Code System</h4>

</div>

<div class="zcr-third zcr-container">

<h4>Message Asking User To Wait</h4>  
<h1><textarea name = "zipcodeswait" id = "zipcodeswait" rows = "2" cols = "30" maxlength = "100" ><?php 
esc_html_e( get_option( 'zipcodeswait' ) );
?></textarea></h1>
<h4>While Their Zip Code Is Checked</h4>

</div> </div> 

<div class="w3-container">

<div class="zcr-half zcr-container">

<h4>Message Saying Zip Code</h4>  
<h1><textarea name = "zipcodeswrong" id = "zipcodeswrong" rows = "2" cols = "40" maxlength = "100" ><?php 
esc_html_e( get_option( 'zipcodeswrong' ) );
?></textarea></h1>
<h4>Is Not The Correct Format</h4>

</div> 

 <div class="zcr-half zcr-container">
 
 
<h4>Message Saying Zip Code Cannot </h4>
<h1><textarea name="zipcodesneg" id = "zipcodesneg" rows="2" cols="40" maxlength="100" ><?php 
esc_html_e( get_option( 'zipcodesneg' ) );
?></textarea></h1>
<h4>Be Redirected Or A Default URL</h4>

</div>



</div>	

<h3>4.) Finally Input Your URL And Zip Code Data </h3>
<div class="w3-container">

<div class="zcr-half zcr-container">

<h4>Redirect URL & Zip Codes.</h4>
<h1><textarea name = "zipcodes1" id = "zipcodes1" rows = "3" cols = "72"><?php 
esc_html_e( get_option( 'zipcodes1' ) );
?></textarea></h1>
<h4>Separate Each Entry With A Space.</h4>
</div>

<div class="zcr-half zcr-container">

<h4>Redirect URL & Zip Codes.</h4>
<h1><textarea name = "zipcodes2" id = "zipcodes2" rows = "3" cols = "72"><?php 
esc_html_e( get_option( 'zipcodes2' ) );
?></textarea></h1>
<h4>Separate Each Entry With A Space.</h4>
</div>

</div>


<?php 
?>



 <h2><input type="submit" value = "Save Settings"></h2>
 
  </form>
  
  <div class="w3-container">

<div class="zcr-half zcr-container">

<h4>Last Twenty Re-directed Zip Codes </h4>
<h1><textarea rows = "5" cols = "64" readonly><?php 
esc_html_e( $zipcodeswon );
?></textarea></h1>

</div>

<div class="zcr-half zcr-container">

<h4>Last Twenty Non Re-directed Zip Codes </h4>
<h1><textarea rows = "5" cols = "64" readonly><?php 
esc_html_e( $zipcodeslost );
?></textarea></h1>

</div>

</div>
<h4>The Last Zip Code Query Took <?php 
esc_html_e( get_option( 'zipcodestime' ) );
?> Seconds To Execute</h4>
	<h3>Instructions For Use.</h3> 
	<h5>First and foremost, select which zip code system to use, the UK system or a 4, 5, 6 digit system.<br>
	Next, select whether to use a submit button.<br>
	Now, you set your user messages, leave the message blank if you dont want to use it.<br>
	Want to use your user's zip code in your "please wait", "correct format", or "cannot be redirected" messages.<br> 
	Insert "user input" where you want the zip code to appear, in the appropriate message.<br>
	Now, input your URLs and zip codes.<br>
	Put a redirect URL, initially, in the first text box, followed by the zip codes you want to associate with that URL, separated by a space.<br> 
	Fill each textbox with data as needed. You can put unlimited zip codes in each text box.<br>
	In the unlimited version, put each redirected URL and associated zip codes, on a separate individual line.<br>
	Now, Put the shortcode [zipcoderedirect] where you want on your webpage including sidebars.</h5>
	<h3>How Does The Plugin Work.</h3> 
	<h5>First of all the plugin creates an input box on your webpage, populated with messages you have set.<br>
	When a user inputs a zip code and then presses the enter key, submit button (if activated) or the zip code input box loses focus, a JavaScript function is triggered, sending the user zip code to your server via AJAX.<br>
	The plugin then checks the user's zip code, to ensure the zipcode has the correct number of digits.<br> 
	Then the user zip code is checked to see if it is alpha-numeric.<br>
	If the user zip code does not match these criteria the "try again" message is displayed.<br>
	If the user's zip code passes these checks, the user's zip code is then checked with the zip codes you entered.<br>
	Starting with zip codes in the first text box, onto the second text box, then third, then fourth, through to the unlimited text box in that order.<br>
	It helps to put your most redirected URLs in the first text boxes etc.<br>
	If the zip codes match the user is automatically redirected.<br>
	We have put a timer in the software to give you the heads up on how fast your server is dealing with the zipcode querys.<br>
	The timer starts when the AJAX request is fired and ends when the server returns a response.<br>
	The last zip code query took <?php 
esc_html_e( get_option( 'zipcodestime' ) );
?> seconds to execute.<br>
	If you want to use a default URL for users, not matching any of your zip codes, just put the URL only, in the "cannot be redirected" text box.<br>
	We recommend you put the Zip Code Redirect in a sidebar or maybe a banner.<br>
	Only put one instance of the shortcode [zipcoderedirect] on a webpage.<br>
	You can use multiple instances of the shortcode [zipcoderedirect] across your website.<br>
	Be aware of webpage content movement when the Zip Code Redirect is used and place the shortcode accordingly.<br>
	Want to add your CSS. Just open plugins/zipcode-redirect/css/style.css in your favorite editor. Add your CSS and save.<br>
	Alternatively copy the code below and save it to your themes additional CSS settings.<br>
	Get creative, jazz up those input boxes, you can now alter and play with the plugin CSS from there.<br>
	<br>
	.zipcodetext {<br>
		/* Css for message text */<br>
		font-size: 18px;<br>
	}<br>
	input[type=text]{<br>
		/* Css for the form text box*/<br>
		background-color: silver;<br>
	}<br>
	input[type=text]:focus {<br>
		/* Css for the input when form text box gets focus*/<br>
		background-color: silver;<br>
	}<br>
	input[type=submit] {<br>
		/* Css for the submit button */<br>
		font-size: 18px;<br>
	}<br>
	<br>
	
	
	Unlimited zip codes can be redirected to Unlimited Urls using this plugin.
	</h5>

	<h3><a href="<?php 
echo  wp_upload_dir()['url'] . '/ZipCodes.docx' ;
?>"> Download All 1000 Outward Zipcodes </a> </h3>
	<h3><a href="<?php 
echo  wp_upload_dir()['url'] . '/PostCodes.docx' ;
?>"> Download All 2981 UK Outward Postcodes </a> </h3>
<?php 
remove_filter( 'upload_dir', 'zipcode_redirect' );