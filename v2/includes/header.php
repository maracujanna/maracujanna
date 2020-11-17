<?php 
define("ROOT_PATH", $_SERVER["DOCUMENT_ROOT"] . "/");
include_once(ROOT_PATH . "includes/config.php");?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	
	<title><?php if (isset($pageTitle)) {echo $pageTitle . ' – Janna Brilyantova';} else {echo "Janna Brilyantova";}?></title>
	<link rel="shortcut icon" href="https://brilyantova.com/images/favicon.png" />
	<!-- Fontawesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
	<!-- Stylesheet -->
	<link rel="stylesheet" href="<?php echo BASE_URL; ?>css/style.css">
</head>

<body>
	<div id="cortina"></div>
	<header class="header">
		<a href="/" class="header-brand"><img src="<?php echo BASE_URL;?>images/logo.png" alt="logo-brilyantova"></a>
		<div class="icon">
				<div class="hamburger"></div> 
		</div>
		<button class="btn-projs">Projetos</button>
		<a href="<?php echo BASE_URL;?>about.php" class="btn-sobre">Sobre</a>
	</header>

	<nav class="main-nav">
		<?php include(ROOT_PATH .'includes/projnav.php'); ?>
		<ul class="extra-menu">
			<li><a href="<?php echo BASE_URL ?>about.php"><b>Sobre</b></a></li>
		</ul>
	</nav>