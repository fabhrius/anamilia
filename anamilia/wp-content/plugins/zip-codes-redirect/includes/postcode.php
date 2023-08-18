<?php

if ( $length > "7" or $length < "5" ) {
    esc_html_e( "1" );
    wp_die();
}


if ( $length == "5" ) {
    
    if ( !preg_match( '/[b e g l-n s w]/', $zipcode[0] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[0-9]/', $zipcode[1] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[0-9]/', $zipcode[2] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[a-b d-h j l n p-u w-z ]/', $zipcode[3] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[a-b d-h j l n p-u w-z ]/', $zipcode[4] ) ) {
        esc_html_e( "1" );
        wp_die();
    }

}


if ( $length == "6" ) {
    
    if ( !preg_match( '/[a-p r-u w y z]/', $zipcode[0] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[0-9 a-h k-y]/', $zipcode[1] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[0-9 a-h j k s-u w]/', $zipcode[2] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[0-9]/', $zipcode[3] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[a-b d-h j l n p-u w-z ]/', $zipcode[4] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[a-b d-h j l n p-u w-z ]/', $zipcode[5] ) ) {
        esc_html_e( "1" );
        wp_die();
    }

}


if ( $length == "7" ) {
    
    if ( !preg_match( '/[a-p r-u w y z]/', $zipcode[0] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[a-h k-y]/', $zipcode[1] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[0-9]/', $zipcode[2] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[0-9 a-z]/', $zipcode[3] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[0-9]/', $zipcode[4] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[a-b d-h j l n p-u w-z ]/', $zipcode[5] ) ) {
        esc_html_e( "1" );
        wp_die();
    }
    
    
    if ( !preg_match( '/[a-b d-h j l n p-u w-z ]/', $zipcode[6] ) ) {
        esc_html_e( "1" );
        wp_die();
    }

}

function checkcode( $zipcodes, $check, $zipcode )
{
    //check user input
    $zipcodes = explode( " ", $zipcodes );
    // put all zipcodes in an array
    $url = array_shift( $zipcodes );
    // get the url and remove from array
    if ( !function_exists( 'zcr_fs' ) ) {
        delete_option( 'zipcodes11' );
    }
    foreach ( $zipcodes as $value ) {
        //routine to check values of array
        
        if ( $check === strtolower( $value ) ) {
            $zipcodes = esc_html( get_option( 'zipcodeswon' ) );
            // get redirected urls and zips
            $zipcode = strtoupper( $zipcode );
            // uppercase user zip for aesthetics
            $zipcodes = $zipcodes . "\n" . "Post Code " . $zipcode . " Was Redirected To " . $url;
            //latest zip to be saved
            $zipcodes = explode( "\n", $zipcodes );
            // put zips in array
            $check = count( $zipcodes );
            // limit zips in admin
            if ( $check > 20 ) {
                $zipcodes = array_slice( $zipcodes, -20 );
            }
            $zipcodes = implode( "\n", $zipcodes );
            // put zips in string
            update_option( 'zipcodeswon', $zipcodes );
            checktime();
            esc_html_e( $url );
            wp_die();
            break;
        }
    
    }
    return;
}

$check = substr( $zipcode, 0, $length - 3 );
//get the outward postcode
update_option( 'zipver', "4.6.1" );
$zipcodes = sanitize_text_field( get_option( 'zipcodes1' ) );
checkcode( $zipcodes, $check, $zipcode );
$zipcodes = sanitize_text_field( get_option( 'zipcodes2' ) );
checkcode( $zipcodes, $check, $zipcode );
$zipcodes = esc_html( get_option( 'zipcodeslost' ) );
$zipcode = strtoupper( $zipcode );
$url = esc_html( get_option( 'zipcodesneg' ) );

if ( $check = strpos( esc_html( get_option( 'zipcodesneg' ) ), "http" ) === 0 ) {
    $zipcodes = $zipcodes . "\n" . "Zip Code " . $zipcode . " Defaulted To " . $url;
} else {
    $zipcodes = $zipcodes . "\n" . "Zip Code " . $zipcode . " Was Not Redirected ";
}

$zipcodes = explode( "\n", $zipcodes );
if ( $check = count( $zipcodes ) > 20 ) {
    $zipcodes = array_slice( $zipcodes, -20 );
}
$zipcodes = implode( "\n", $zipcodes );
if ( !function_exists( 'zcr_fs' ) ) {
    delete_option( 'zipcodes11' );
}
update_option( 'zipcodeslost', $zipcodes );
checktime();
esc_html_e( "2" );
wp_die();