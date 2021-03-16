<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'BnBd_~/N)MtG,bMbh#llQSkG&obr}_r{:@p}a-Z0F#xV,bVY`&n_ZtU!*WC.G0EM' );
define( 'SECURE_AUTH_KEY',  '0>cb !:tnc3;Nf*uPVg1<+?z;Ke1;LUa=I.$|wFvs4&a>h>}4*Q:lynr5*Y4]obe' );
define( 'LOGGED_IN_KEY',    'e4|W4p0*yFr5-c>[;W:AE(1&b@/Px3lfKX+&iPKakj?ZMUXozuIsTJEX6q7Cb[>1' );
define( 'NONCE_KEY',        '6FIfBd86^]lFHe+~aGv[.dA<486wk1DgCVI+WV.tm;13OI^<WBNG :`bn3n=.M,)' );
define( 'AUTH_SALT',        'k_#^L?Uki5CUAEQ=ad.!=jip*PBZRQbar!e`UG(a~;]%S>+mPS@nTPht4/9Yo.>W' );
define( 'SECURE_AUTH_SALT', 'et$|IL>?T/7Dj{D)4&_X|ek<g6Z]!mHb<xvyke4{56-Nq8u;z_ilq(wj,zyQUWSG' );
define( 'LOGGED_IN_SALT',   'fH6a9c3r&{G3M#wlbi`4KP*$`1NiWvUaJ1Zq(bYU]rk_@_oSfgPpR{H5sjL<G7z%' );
define( 'NONCE_SALT',       'Ko}rr:gJ: ny0i8JSfDTIMl[^PnCae!&2X]m_2&Bq&k|EIG:o[@).VQ[SiU;2>;o' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
