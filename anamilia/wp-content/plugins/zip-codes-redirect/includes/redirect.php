<?php if ( ! defined( 'ABSPATH' ) ) { header( 'HTTP/1.0 403 Forbidden' ); exit;}

				$zipcodes = explode( " ", $zipcodes );// put all zipcodes in an array   
               
                $url = array_shift( $zipcodes );// get the url and remove from array
                
                foreach ( $zipcodes as $value ) {//routine to check values of array
                    
				$length = strlen( $value );// get length of admin zip code
                    
                $userzipcode = substr( $zipcode, 0, $length );// get the zipcode from user input
                    
				if ( $userzipcode === strtolower( $value ) ) { //if they match
					
				$zipcodes =  esc_html(get_option( 'zipcodeswon' ));// get redirected urls and zips
				
				$zipcode = strtoupper($zipcode);// uppercase user zip for aesthetics
				
				$zipcodes = $zipcodes . "\n"  . "Zip Code " . $zipcode . " Was Redirected To " . $url ;//latest zip to be saved
				
				$zipcodes = explode( "\n" ,$zipcodes);// put zips in array
				
				$check = count($zipcodes);// limit zips in admin
					
				if ($check > 20) {$zipcodes = array_slice($zipcodes,-20);}
					
				$zipcodes = implode( "\n" ,$zipcodes);// put zips in string
					
				update_option('zipcodeswon', $zipcodes);
				
				if (!function_exists( 'zcr_fs' ) ) {delete_option( 'zipcodes11' ) ;}
				
				checktime();
				
				esc_html_e( $url ); wp_die();}}?>