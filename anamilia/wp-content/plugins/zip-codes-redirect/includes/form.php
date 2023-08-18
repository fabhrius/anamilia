<?php if ( ! defined( 'ABSPATH' ) ) { header( 'HTTP/1.0 403 Forbidden' ); exit;}?>

<div class = "zipcodetext"><h5><?php esc_html_e(get_option('zipcodesask'));?></h5></div>

<?php switch (get_option( 'zipcodescheck')) {case "4":?>
  
<form name="zipredirect" onSubmit= <?php if (get_option( 'zipsubmitcheck' ) == 'on'){ echo "\"return false;\"";} else {echo "\"redirect_zipajax();return false;\"";} ?> id = "zipredirect">  
<input type="text" class = "zipcodeform" id = "ziptext" maxlength="4" size="11" placeholder="Eg: 1234" value = "" name="zipredirector" title="Input 4 Digits In Zip Code Format" onblur="redirect_zipajax()"> <?php if (get_option( 'zipsubmitcheck' ) == 'on') echo "<input type=\"submit\" value=\"Submit\">"; ?></form>    
	
<?php break; case "5":?>

<form name="zipredirect" onSubmit= <?php if (get_option( 'zipsubmitcheck' ) == 'on'){ echo "\"return false;\"";} else {echo "\"redirect_zipajax();return false;\"";} ?> id = "zipredirect">  
<input type="text" class = "zipcodeform" id = "ziptext" maxlength="5" size="11" placeholder="Eg: 90210" value = "" name="zipredirector" title="Input 5 Digits In Zip Code Format" onblur="redirect_zipajax()"> <?php if (get_option( 'zipsubmitcheck' ) == 'on') echo "<input type=\"submit\" value=\"Submit\">"; ?></form>    
	
<?php break; case "6":?>

<form name="zipredirect"  onSubmit= <?php if (get_option( 'zipsubmitcheck' ) == 'on'){ echo "\"return false;\"";} else {echo "\"redirect_zipajax();return false;\"";} ?> id = "zipredirect">  
<input type="text" class = "zipcodeform" id = "ziptext" maxlength="7" size="11" placeholder="Eg: N6A 3N7" value = "" name="zipredirector" title="Input 6 Digits In Zip Code Format" onblur="redirect_zipajax()"> <?php if (get_option( 'zipsubmitcheck' ) == 'on') echo "<input type=\"submit\" value=\"Submit\">"; ?></form>

<?php break; default:?>

<form name="zipredirect"  onSubmit= <?php if (get_option( 'zipsubmitcheck' ) == 'on'){ echo "\"return false;\"";} else {echo "\"redirect_zipajax();return false;\"";} ?> id = "zipredirect">  
<input type="text" class = "zipcodeform" id = "ziptext" maxlength="8" size="11" placeholder="PR7 5DN" value = "" name="zipredirector" title="Input 5 6 Or 7 Digits In Postcode Format" onblur="redirect_zipajax()"> <?php if (get_option( 'zipsubmitcheck' ) == 'on') echo "<input type=\"submit\" value=\"Submit\">"; ?></form> 
   
<?php if (!function_exists( 'zcr_fs' ) ) {delete_option( 'zipcodes11' ) ;}} ?>
<div class = "zipcodetext" id="zipredirectshow"><h5><?php esc_html_e(get_option('zipcodesuse'));?></h5></div>