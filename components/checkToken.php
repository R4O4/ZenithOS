<?php
require "configMaster.php";
$token = md5(time() . mt_rand());
$tokenExists = false;
$cookieToken = $_COOKIE['LOGGED_USER'];

// Connect to database

try {
	$mysqlConnection = new PDO(
		"mysql:host={$dbWeb['host']};dbname={$dbWeb['base']}};charset=utf8",
		"{$dbWeb['user']}",
		"{$dbWeb['password']}"
	);
} catch (PDOException $e) {
	$_SESSION['error'] = 'Erreur de connection à la base de données : ' . $e->getMessage();
	header("Location: /error.php");
	exit();
}
// Check if token already exists

$selectToken = $mysqlConnection->prepare('SELECT * FROM usersTokens WHERE token = :token');
$selectToken->execute(['token' => $cookieToken,]);
$selectTokenResult = $selectToken->fetchAll();

if ($tokenExists) {
	// Récupération du SteamUID de l'utilisateur
	if (!headers_sent()) {
		header("Location: /ALF_Intranet/src/ZenithOS/dektop.php");
		exit();
	} else { ?>
      <script type="text/javascript">window.location.href = "/ALF_Intranet/src/ZenithOS/desktop.php";</script><?php
		exit();
	}
} else {
    // Redirect to steam login page



}