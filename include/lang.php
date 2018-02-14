<?php

$lang = null;
$texts = [];

function useLanguage($code)
{
	global $lang;

	$file = __DIR__ . '/../lang/' . $code . '.php';

	if ($file)
		$lang = include($file);
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

function __($text)
{
	global $lang, $texts;

	if ($lang == null)
	{
		echo $text;
	}
	else if (isset($lang['text'][$text]))
	{
		echo $lang['text'][$text];
	}
	else
	{
		if (!in_array($text, $texts))
			$texts[] = $text;

		echo $text;
	}
}

// Set lang based on request
if (isset($_GET['lang']))
{
	setcookie('lang', $_GET['lang']);
	useLanguage($_GET['lang']);
}
else if (isset($_COOKIE['lang']))
{
	useLanguage($_COOKIE['lang']);
}
else
{
	useLanguage('us');
}

if (isset($_GET['out']))
{
	ob_start(function ($data) {
		global $texts;

		$ret = [];

		foreach ($texts as $text)
		{
			$ret[$text] = $text;
		}

		return var_export($ret, true);
	});
}
