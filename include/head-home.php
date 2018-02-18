<!DOCTYPE html>
<html lang="<?php echo getLangIsoCode(); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <meta name="title" content="<?php __('meta.title'); ?>">
    <meta name="description" content="<?php __('meta.description') ?>">
    <meta name="author" content="">
    <link rel="shortcut icon" href="favicon.ico">
    <title><?php __('meta.title'); ?></title>

    <!-- Font Awesome -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

    <!-- Semantic UI -->
    <link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
    <script
            src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
    <script src="/semantic/dist/semantic.min.js"></script>
    <script src="/js/common.js"></script>

    <!-- Custom Styles -->
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/token_sale.css">

    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({
          'gtm.start':
            new Date().getTime(), event: 'gtm.js'
        })
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''
        j.async = true
        j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl
        f.parentNode.insertBefore(j, f)
      })(window, document, 'script', 'dataLayer', 'GTM-P2FJV5S')</script>
    <!-- End Google Tag Manager -->
</head>

<body class="lang_<?php echo getLangCode(); ?> home">
<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2FJV5S"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- Sidebar Menu -->
<div class="ui vertical inverted sidebar menu">
    <a class="item" href="index.html"><?php __('menu.home'); ?></a>
    <a class="item" href="coins.html"><?php __('menu.coins'); ?></a>
    <a class="item" href="https://ethpyramid.wordpress.com"><?php __('menu.blog'); ?></a>
    <a class="item" href="stats.html"><?php __('menu.stats'); ?></a>
    <a class="item" href="whitepaper.html"><?php __('menu.whitepaper'); ?></a>
    <a class="item" href="https://etherscan.io/address/0x2fa0ac498d01632f959d3c18e38f4390b005e200"><?php __('index.header.contract'); ?></a>
</div>

<!-- Following Menu -->
<div class="ui large top fixed hidden menu inverted">
    <div class="ui container">
        <a class="toc item">
            <i class="sidebar icon"></i>
        </a>
        <a href="index.html" class="logo header item">
            <img src="images/minilogo.png">
        </a>
        <a class="item" href="coins.html"><?php __('menu.coins'); ?></a>
        <a class="item" href="https://ethpyramid.wordpress.com"><?php __('menu.blog'); ?></a>
        <a class="item" href="stats.html"><?php __('menu.stats'); ?></a>
        <a class="item" href="whitepaper.html"><?php __('menu.whitepaper'); ?></a>
        <div class="right menu">
            <div class="social-bits">
                <a href="https://twitter.com/ethpyramid" target="_blank">
                    <i class="fab fa-twitter-square"
                       style="margin-right:10px; color:white;"></i></a>
                <a href="https://www.reddit.com/r/ethpyramid/" target="_blank">
                    <i class="fab fa-reddit-square"
                       style="margin-right:10px; color:white;"></i></a>
                <a href="https://discord.gg/FmKsvBe" target="_blank">
                    <i class="fab fa-discord"
                       style="color:white"></i></a>
            </div>
        </div>
    </div>
</div>

<!-- Page Contents -->
<div class="pusher">
    <div class="ui masthead vertical center aligned segment">
        <div class="ui container main-menu">
            <div class="ui large secondary top inverted menu">
                <a class="toc item">
                    <i class="sidebar icon"></i>
                </a>
                <a class="item" href="coins.html"><?php __('menu.coins'); ?></a>
                <a class="item" href="https://ethpyramid.wordpress.com"><?php __('menu.blog'); ?></a>
                <a class="item" href="stats.html"><?php __('menu.stats'); ?></a>
                <a class="item" href="whitepaper.html"><?php __('menu.whitepaper'); ?></a>

                <div class="right item">
                    <!-- Social Icons -->
                    <div class="social-bits">
                        <a href="https://twitter.com/ethpyramid" target="_blank">
                            <i class="fab fa-twitter-square"
                               style="margin-right:10px; color:white;"></i></a>
                        <a href="https://www.reddit.com/r/ethpyramid/" target="_blank">
                            <i class="fab fa-reddit-square"
                               style="margin-right:10px; color:white;"></i></a>
                        <a href="https://discord.gg/FmKsvBe" target="_blank">
                            <i class="fab fa-discord"
                               style="color:white"></i></a>
                    </div>

                    <!-- Language Selector -->
                    <div class="ui inline dropdown lang-selector">
                        <a href="#" class="text">
                            <i class="<?php echo getLangCode(); ?> flag"></i>
                        </a>
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <a href="?lang=us" class="item text"><i class="us flag"></i> English (US)</a>
                            <a href="?lang=au" class="item text"><i class="au flag"></i> English (AU)</a>
                            <a href="?lang=sa" class="item text"><i class="sa flag"></i> Arabic</a>
                            <a href="?lang=cn" class="item text"><i class="cn flag"></i> Chinese</a>
                            <a href="?lang=fr" class="item text"><i class="fr flag"></i> French</a>
                            <a href="?lang=de" class="item text"><i class="de flag"></i> German</a>
                            <a href="?lang=us" class="item text"><i class="in flag"></i> Hindi [soon!]</a>
                            <a href="?lang=kr" class="item text"><i class="kr flag"></i> Korean</a>
                            <a href="?lang=es" class="item text"><i class="es flag"></i> Spanish</a>
                            <a href="?lang=ru" class="item text"><i class="ru flag"></i> Russian</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Jumbotron -->
        <div class="ui text container jumbotron">
            <img width="350" height="350" class="logo" src="images/BannerLogo.png" alt="EthPyramid Logo">
            <h2><?php __('index.header.title'); ?></h2>
            <a href="coins.html" class="ui huge primary button"><?php __('index.header.buy-in'); ?><i class="right arrow icon"></i></a>
            <a href="https://etherscan.io/address/0x2fa0ac498d01632f959d3c18e38f4390b005e200"
               class="ui huge default button"><?php __('index.header.contract'); ?></a>
        </div>

    </div>
