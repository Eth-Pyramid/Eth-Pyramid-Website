<?php

// current language
$lang = null;

// fallback language for when a translation cannot be found in $lang
$default_lang = loadLanguage('us');

// gets filled with requested strings that can't be found in $lang
$missing = [];

function loadLanguage($code)
{
	global $default_lang;

	if (strlen($code) !== 2)
		return;

	$file = __DIR__ . '/../lang/' . $code . '.php';

	if ($file)
		return include($file);

	return $default_lang;
}

// sets $lang to content of lang/($code).php
function useLanguage($code)
{
	global $lang, $default_lang;

	if (strlen($code) != 2)
	{
		$lang = $default_lang;
		return;
	}

	$lang = loadLanguage($code);
}

function getDefaultCurrency()
{
	global $lang;

	return $lang['default_currency'];
}

function getLangCode()
{
	global $lang;
	return $lang['code'];
}

function getLangIsoCode()
{
	global $lang;
	return $lang['iso_code'];
}

function getLanguages()
{
	$d = opendir('lang');

	$langs = [];

	while ($dir = readdir($d))
	{
		if ($dir == '.' || $dir == '..')
			continue;

		if (is_file('lang/' . $dir))
		{
			$lang = include('lang/' . $dir);

			if (is_array($lang))
			{
				$langs[] = $lang;
			}
		}
	}

	return $langs;
}

// when a language is set, echoes the translation if present or adds the key to $missing if no translation is found
// if no translation is found, tries to echo the default translation, echoes the key itself if even that fails, god forbid
function __($text)
{
	global $lang, $missing, $default_lang;

	if ($lang != null)
	{
		if (isset($lang['text'][$text]))
		{
			echo $lang['text'][$text];
			return;
		}
		else if (!in_array($text, $missing))
			$missing[] = $text;
	}

	if ($default_lang != null and isset($default_lang['text'][$text]))
		echo $default_lang['text'][$text];
	else
		echo $text;
}

if (isset($_GET['lang']))
{
	// set lang based on request
	setcookie('lang', $_GET['lang']);
	useLanguage($_GET['lang']);
}
else if (isset($_COOKIE['lang']))
{
	// set lang based on cookie
	useLanguage($_COOKIE['lang']);
}
else
{
	// set language to default
	$header_lang_string = $_SERVER['HTTP_ACCEPT_LANGUAGE'];

	$langs    = explode(',', $header_lang_string);
	$language_country = $langs[0];
	$language = explode('-', $language_country)[0];

	$found = false;

	// Match on full language-country value first
	foreach (getLanguages() as $value)
	{
		if( $language_country == $value['iso_code'] . '-' . $value['iso_country'] )
		{
			useLanguage( $value['code'] );
			$found = true;
			break;
		}
	}

	// Fallback to just language
	if( !$found )
	{
		foreach (getLanguages() as $value)
		{
			if ($language == $value['iso_code'])
			{
				useLanguage($value['code']);
				$found = true;
				break;
			}
		}
	}

	if (!$found)
	{
		$lang = $default_lang;
	}
}

// output missing translations as pairs of key and default translation
if (isset($_GET['out']))
{
	ob_start(function ($data) {
		global $missing, $default_lang;

		$ret = [];

		foreach ($missing as $text)
		{
			$ret[$text] = $default_lang['text'][$text];
		}

		return var_export($ret, true);
	});
}
