<?php if ( ! defined( 'ABSPATH' ) ) { header( 'HTTP/1.0 403 Forbidden' ); exit;}
$option = get_option( 'dataredirect' );//get textarea messages

?>
<div class = "zipcodetext" id="dataask"><?php esc_html_e( $option["redirectask"]); ?></div>
<form id = "dataform" >
<input type="text" size="30" name="datainput" onkeyup="dataresult(this.value)">
</form>
<div class = "zipcodetext" id="dataneg"><?php //esc_html_e( $option["redirectneg"]); ?></div>