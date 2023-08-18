<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'anamilia' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fc_>lm!A1b<{o_tawok${8T}o#]TYgG|6WJ~H[Crx0/#oXlhRw`?mWK35@R/dK(V' );
define( 'SECURE_AUTH_KEY',  '!aQpBuux}SZv?2D_QoS>WHuUOgL3FXatvMkCesf|uxBc`^dZy0D${<E]|CY[*W*S' );
define( 'LOGGED_IN_KEY',    '`!!1frg=3,OY?U:jpr&RmpDBUEL)ZiN)Xs$zZn^IR,lipf&b8WWGLPKP}1p,i;ow' );
define( 'NONCE_KEY',        'MH?Yl[&g6$4T613@Ye %S:x@$>d!~7_P])D^?9{V.(}J62<DZp)7yoqVh<AwK4c/' );
define( 'AUTH_SALT',        ',=3P(;E~:wa5mD66*IWabSOCdkq D+1$m5!<|Lc2,_pGK|;!;/,j |5fd*:t[Hp%' );
define( 'SECURE_AUTH_SALT', '*T1Lq~.D-E`5CjKM@%1{a#gDE-WV2QcHC^-wcx`+O&x:uWbd5{e)ud>V??i-XsWk' );
define( 'LOGGED_IN_SALT',   ']ca!UImQ 7<|h$Zixl_$+uNGyo)i{{>9tE-q=WN~yO`odW%8,1YoN0ko cGS-d_9' );
define( 'NONCE_SALT',       '>GTP19wZP8NWC~0$2h%y3]YCfJj_p8Sm?/%%kqNvP^.ar6keTiIr8z;xsfWuZ5:4' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
