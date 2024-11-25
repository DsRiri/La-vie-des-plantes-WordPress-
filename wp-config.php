<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'la vie des plantes' );

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
define( 'AUTH_KEY',         '3:5lGiTPc!.fFGE-.)@}t%6*,TVeMj%O.6nU[Fh-CXZuxa3UCkm0xU6D[{%x2R_]' );
define( 'SECURE_AUTH_KEY',  'jkm0l1CS&`bmBeQ 61uv6B%K>?GE;:V& 3}J*<E=zPo.o:h/8EZi7n:A4TP`Uh4H' );
define( 'LOGGED_IN_KEY',    'Fhh.s!LS8fS&Q$v`CJ@2UVGMMY,]V?wk+^kn0|.Mg3(u<|<fz C40rY@FB.aPlZp' );
define( 'NONCE_KEY',        ':%CoVaq_Zi_eKrpjI%%n:GDb+q^g,LJ`l/$hn]h40_9AN.#X01tdZ:Oq5VU:<+}6' );
define( 'AUTH_SALT',        ' LjgBA-.-Z!{BctcdKk[A{uJMQtn%>J*JA+TQHq$bmBpm#-d9qA5lhk{h?v*sqQ@' );
define( 'SECURE_AUTH_SALT', '~e7J]qKebu5~9bu@hFV.56kA4fOz2qT<B0^AVMa<DVNa6!$tvq[PBA[21nIp+FW8' );
define( 'LOGGED_IN_SALT',   '@qbb54Px8LOHx8nsu3%}x?<oX%$%K-||=]GGfi(4QX]pOXE8[J6TD`N*A| FH+|3' );
define( 'NONCE_SALT',       'zm&)D~h}}6rz)Qb|BXKNyvSPy9Uno9XPB^WBlT;~@2ypIu[qqCkwIi,U[8a*fXOK' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
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
