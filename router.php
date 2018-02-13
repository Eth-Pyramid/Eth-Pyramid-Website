<?php
	// Let's you run PHP built-in server for this site

	$uri = substr( $_SERVER['REQUEST_URI'], 1 );

	if( file_exists( __DIR__ . '/' . $uri ) )
		return false;

	if( substr( $uri, -5 ) == '.html' )
		include substr( $uri, 0, -5 ) . '.php';

	echo 'File not found';
