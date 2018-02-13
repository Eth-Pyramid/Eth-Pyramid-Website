<?php
// Let's you run PHP built-in server for this site

$uri = substr(strtok($_SERVER['REQUEST_URI'], '?'), 1);

if (file_exists(__DIR__ . '/' . $uri))
	return false;

if (substr($uri, -5) == '.html'){
	$php_uri = substr($uri, 0, -5) . '.php';

	if (file_exists(__DIR__ . '/' . $php_uri)){
		include $php_uri;
		return true;
	}
}

echo 'File not found';


