<?php 
					
					check_ajax_referer('data-security-nonce', 'security', true );//nonce security
					add_filter( 'upload_dir', 'zipcode_redirect' );
					$xmlDoc=new DOMDocument();
					
					$xmlDoc->load(wp_upload_dir()['path'] . "/redirects.xml");//load xml doc
					
					$data=$xmlDoc->getElementsByTagName('data');
							
					if (strlen($town = sanitize_text_field( $_POST['datavalue'] ))> 0) {
						
					$hint="";//zero the hint
						
					for($count=0; $count<($data->length); $count++) {
						
					$text=$data->item($count)->getElementsByTagName('text'); //get the text
					
					$url=$data->item($count)->getElementsByTagName('url'); // get the url
					
					if ($text ->item(0)) {// if everything is sweet
  
					if (stripos($text->item(0)->childNodes->item(0)->nodeValue,$town) === 0) {//find user input
						
					if ($hint=="") {// build string and url to return if hint is empty
						
					$hint="<a href='" . $url->item(0)->childNodes->item(0)->nodeValue . "' target='_blank'>" .
					
					$text->item(0)->childNodes->item(0)->nodeValue . "</a>";
					
					} else {// build string to return if hint has a value
						
					$hint=$hint . "<br /><a href='" . $url->item(0)->childNodes->item(0)->nodeValue . "' target='_blank'>" .
					
					$text->item(0)->childNodes->item(0)->nodeValue . "</a>";
					
					}}}}}					
					
					if ($hint=="") {
						
					$option = get_option( 'dataredirect' );//get textarea messages
					$response = esc_html__($option["redirectneg"]);
	
					} else {$response=$hint;}

					echo $response ;//output the response
					
					wp_die();				
							
?>