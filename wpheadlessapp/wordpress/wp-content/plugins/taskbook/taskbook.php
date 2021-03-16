<?php
/*
    Plugin Name: Task Book
    Plugin URI: http://linkedin.com/learning
    Description: Track stress levels around task
    Author: Lenny winner
    Version: 1.0.0
    Author URI: 
    Text Domain: taskbook
    Domain Path: /languages
    License: GPL3

    Task book is a free software: CC0 Licance
*/

/*
    Register Task post type
*/
require_once plugin_dir_path(__FILE__).'includes/posttypes.php';
register_activation_hook( __FILE__, 'taskbook_rewrite_flush' );

/*
    Register Task logger role
*/
require_once plugin_dir_path(__FILE__).'includes/roles.php';

/*
    Register Task logger role
*/
require_once plugin_dir_path(__FILE__).'includes/status.php';




    