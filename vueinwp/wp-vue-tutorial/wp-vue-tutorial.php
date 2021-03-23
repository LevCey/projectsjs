<?php
/**
 * Plugin Name: Vue and WordPress Tutorial
 * Description: How to use Vue in WordPress.
 */

//Register Scripts to use 
function func_load_vuescripts() {
    wp_register_script( 'wpvue_vuejs', 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js');
}
add_action('wp_enqueue_scripts', 'func_load_vuescripts');
   
//Add shortscode
function func_wp_vue(){
    //Add Vue.js
    wp_enqueue_script('wpvue_vuejs');

    //Build String
     $str= "<div id='divWpVue'>"
     ."Vue code here: "
     ."</div>";
   
     //Return
     return $str;
} // end function
   
//Add shortcode to WordPress
add_shortcode( 'wpvue', 'func_wp_vue' );


?>