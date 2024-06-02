<html lang="fr">
<head>
    <title>ZenithOS</title>
    <title>Erreur - Intranet</title>
    <link rel="stylesheet" href="../css/zenith-main.css">
	<?php include 'components/head.php'; ?>
</head>

<body>

<?php
$errorFile = "error-codes.json";
$fileContent = file_get_contents($errorFile);
$obj = json_decode($fileContent);
$errorName = $_GET["error"];
$error = $obj->errors->$errorName;

if ($error->http_error === true) {
    $errorTitle = "Erreur {$error->error_code}";
} else {
	$errorTitle = $error->error_code;
}
?>

<section class="mobile-error-page">
    <div class="mobile-error-container">
        <img src="../icons/<?php echo $error->logo ?>.svg" alt="warning" class="mobile-error-warning-icon">
        <h1 class="mobile-error-title"><?php echo $errorTitle ?></h1>
        <p class="mobile-error-text"><?php echo $error->description ?></p>
        <h4 class="mobile-error-text2"><?php echo $error->footer ?></h4>
    </div>
</section>

</body>

</html>