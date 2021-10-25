<?php
require 'modules/projects.php';
$projects = getAllProjects();
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="UTF-8">
    <meta http-equiv="language" content="nl">
    <meta name="description" content="Projects">
    <meta name="keywords" content="Projects">
    <meta name="author" content="Shane Jaggan">
    <title>My Projects</title>
    <script src="https://kit.fontawesome.com/f4cc39589e.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/aboutstyle.css">
    <link rel="stylesheet" href="css/indexstyle.css">
    <link rel="stylesheet" href="css/colorMode.css">
</head>
<body>
    <div class="container bg-dark">
        <nav class="navbar navbar-expand-md bg-dark navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="projects.php">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="skills.php">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="workplace.php">Workplace assignment</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.php">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.php">About Me</a>
                </li>
              </ul>
            </div>
          </nav>
        <div class="row">
            <div class="col">
                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle" type="button" data-toggle="dropdown">Switch Color Theme
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#" class="noLink themeDark">Dark theme </a></li>
                      <li><a href="#" class="noLink themeLight">Light theme</a></li>
                      <li><a href="#" class="noLink themeRed">Red theme</a></li>
                      <li><a href="#" class="noLink themeBlue">Blue theme</a></li>
                      <li><a href="#" class="noLink themePurple">Purple theme</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card-deck">
            <?php foreach($projects as $project): ?>
            <div class="card bg-primary">
                <div class="card-body">
                    <h3><?php echo $project->name; ?></h3>
                    <p><?php echo $project->description; ?></p>
                    <a href="<?php echo $project->link; ?>" class="btn btn-dark btn-large" target="_blank">Zie meer</a>
                </div>
                <img src="<?php echo $project->image; ?>" class="card-image-bottom img-fluid">
            </div>
            <?php endforeach; ?>
        </div>
        <div class="row">
            <div class="col bg-secondary">
                <h3 class="text-center text-white">
                    You can find me at:
                    <a href="https://github.com/ShaneJaggan" class="text-white" target="_blank"><i class="fa fa-github"></i></a>
                    <a href="https://www.youtube.com/channel/UCF80Lf0tn1P5ZdVZq5zlOnQ" class="text-white" target="_blank"><i class="fa fa-youtube"></i></a>
                    <a href="https://www.twitch.tv/slyjggn" class="text-white" target="_blank"><i class="fa fa-twitch"></i></a>
                </h3>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="js/main.js" type="module"></script>
</body>
</html>