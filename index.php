<html lang="fr">
  <head>
    <title>ZenithOS</title>
    <title>Bureau</title>
      <link rel="stylesheet" href="css/zenith-main.css">
    <?php include 'components/head.php'; ?>
  </head>

  <body>
  <?php include "components/taskbar.php"; ?>
  <?php include "components/shortcuts.php"; ?>
  <?php include "components/home.php"; ?>
  <!-- Applications -->
  <?php include "apps/SNRE/snre.php"; ?>

  <script src="js/basicFunctions.js"></script>
  <script src="js/windows.js"></script>
  <script src="js/apps.js"></script>
  </body>
</html>