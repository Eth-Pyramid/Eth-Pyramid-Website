<!DOCTYPE html>
<html lang="<?php echo getLangIsoCode(); ?>">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
	<meta name="title" content="<?php __('EthPyramid'); ?>">
	<meta name="description" content="<?php __('A self-sustaining, secure and transparent pyramid scheme.') ?>">
	<meta name="author" content="">
	<link rel="shortcut icon" href="favicon.ico">
	<title><?php __('EthPyramid'); ?></title>

	<link rel="stylesheet" href="css/jquery.modal.min.css">
	<link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700" rel="stylesheet">
	<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
	<script src="js/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery.countdown.js" type="text/javascript"></script>
	<script src="js/moment.min.js" type="text/javascript"></script>
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/main_ie.css">
	<script src="js/jquery.bxslider.min.js"></script>
	<link rel="icon" type="image/png" href="favicon.ico">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P2FJV5S');</script>
    <!-- End Google Tag Manager -->
</head>

<body class="lang_<?php echo getLangCode(); ?>">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2FJV5S"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div class="main-outer text-center <?php echo isset( $main_class ) ? $main_class : ''; ?>">
	<!-- Homepage Banner -->
	<div class="introduction-banner">
		<div class="header sticky-header">
			<div class="flagBits">
				<a href="?lang=us"><img src="images/UK.jpg"></a>
				<a href="?lang=au"><img src="images/AU.jpg"></a>
		<!--		<a href="https://imgur.com/a/s7W4o"><img src="images/SA.jpg"></a> -->
				<a href="?lang=cn"><img src="images/CN.jpg"></a>
				<a href="?lang=fr"><img src="images/FR.jpg"></a>
				<a href="?lang=de"><img src="images/DE.jpg"></a>
				<a href="?lang=sp"><img src="images/SP.jpg"></a>
				<a href="?lang=kr"><img src="images/KR.jpg"></a>
		<!--		<a href="https://imgur.com/a/zcm3f"><img src="images/RU.jpg"></a> -->
			</div>
			<div class="socialBits">
				<a href="https://twitter.com/ethpyramid" target="_blank"><i class="fab fa-twitter-square"
				                                                            style="margin-right:10px; color:white;"></i></a>
				<a href="https://www.reddit.com/r/ethpyramid/" target="_blank"><i class="fab fa-reddit-square"
				                                                                  style="margin-right:10px; color:white;"></i></a>
				<a href="https://discord.gg/FmKsvBe" target="_blank"><i class="fab fa-discord" style="color:white"></i></a>
			</div>
			<div class="align-center header-inner">
				<div class="container clearfix">
					<div class="logo">
						<a href="index.html">
							<img src="images/minilogo.png" alt="">
						</a>
					</div>
					<div id="nav-icon">
						<span></span> <span></span>
						<span></span>
					</div>
					<div class="navigation">
						<ul>
							<li><a href="https://etherscan.io/address/0x2fa0ac498d01632f959d3c18e38f4390b005e200"
							       target="_blank"><?php __('Smart Contract'); ?></a></li>
							<li><a href="coins.html"><?php __('My Coins'); ?></a></li>
							<li><a href="stats.html"><?php __('Stats'); ?></a></li>
							<li><a href="whitepaper.html"><?php __('Whitepaper'); ?></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="middle-content">
			<div class="container">
				<div class="main-logo-wrapper">
					<img src="images/BannerLogo.png" alt="" class="visible-xs">
					<img src="images/BannerLogo.png" alt="" class="hidden-xs">
				</div>
				<div class="message">
					<?php __('A <b>self-sustaining</b>, <b>secure</b> and <b>transparent</b> pyramid scheme.'); ?>
				</div>
				<div class="cta-group">
					<a href="coins.html" class="cta" style="background: #d69361;"><?php __('Buy In'); ?></a>
					<a href="https://etherscan.io/address/0x2fa0ac498d01632f959d3c18e38f4390b005e200" class="cta"
					   target="_blank"><?php __('Smart Contract'); ?></a>
				</div>
				<div class="banner-title hidden-xs">
					<h2><?php __('Strong Hands Only'); ?></h2>
				</div>
			</div>
		</div>
	</div>
