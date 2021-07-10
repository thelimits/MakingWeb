
<?php
    include("manage-system/API/valid.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/header.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.16/require.js"></script>
    <!-- link jquery script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>headers</title>
</head>
<body>
<header>
        <div id="Laforant-bar-warapper">
            <div id="Laforant-Bar">
                <!-- menu bagian kiri -->
                <div id="LaforantBar-left-menu" class="LaforantBar-left-menu">
                    <div id="LaforantBar-left-menu-logo">
                        <span style="display: inline-block;">
                            <a class="Laforant-logo" href="index.php">
                                <span class="Logo">
                                    <img class="imgs" src="style/asset/logo_army-2_1fix.png">
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
                <!-- pembatas -->
                <span class="LaforantBar-left-menu-separator"></span>
                <!-- content nav bar -->
                <div id="Nav-Bar" class="Nav-Bar">
                    <div id="Laforant-Nav-Bar">

                        <!-- untuk widh 1024 atau diperkecil -->
                        <a href="#" class="logos">Laforant</a>
                        <!-- --------------- -->

                        <div id="nav-menu" class="nav-menu">
                            <a class="main" href="index.php" style="cursor: pointer;">Home</a>
                        </div>

                        <div id="nav-menu" class="nav-menu">
                            <a class="main" href="maps.php" class="Maps">Maps</a>
                        </div>

                        <div id="nav-menu" class="nav-menu">
                            <a class="main" href="agents.php" class="Agents">Agents</a>
                        </div>

                        <div id="nav-menu" class="nav-menu">
                            <a class="main" href="system_req.php" class="System-Requirements">System Requirements</a>
                        </div>

                        <div id="nav-menu" class="nav-menu">
                            <a class="main" href="login.php" class="Pre-Register">Pre-Register</a>
                        </div>

                        <div id="nav-menu" class="nav-menu">
                            <a class="main" href="score.php" class="score-board">score board</a>
                        </div>
                    </div>
                </div>
                <!--Laforant-Bar submenu -->
                <div class="submenu" id="submenu">
                    <a href="#content" class="sb-menu">Home</a>
                    <a href="#second-content" class="sb-menu">About Games</a>
                </div> 

                <!-- pembatas-->
                <span class="LaforantBar-left-menu-separator-2"></span>
                <!-- menu bagian kiri -->
                <div id="LaforantBar-right-menu" class="LaforantBar-right-menu">
                    <div id="download-game">
                    <?php
                            if(isset($_SESSION["Username"]))
                            {
                        ?>
                            <a class="game button" id="online"  href="logout.php" ><?php  echo $_SESSION["Username"]; ?></a>
                        <?php
                            }
                            else
                            {
                        ?>
                           <a class="game button" id="online"  href="#" >Download Now</a>
                        <?php
                            }
                        ?>
                    </div>
                </div>
                <div id="menu-checkbar-hamburger" class="menu-checkbar-hamburger">
                    <div class="line line-1"></div>
                    <div class="line line-2"></div>
                    <div class="line line-3"></div>
                </div>
            </div>
        </div>
        <!-- responsive hidden menu -->
        <div id="hidden-box" class="hidden-box" >
            <div id="nav-menu" class="nav-menu">
                <a href="index.php" class="Home">Home</a>
            </div>

            <div id="nav-menu" class="nav-menu">
                <a href="maps.php" class="Maps">Maps</a>
            </div>

            <div id="nav-menu" class="nav-menu">
                <a href="agents.php" class="Agents">Agents</a>
            </div>

            <div id="nav-menu" class="nav-menu">
                <a href="system_req.php" class="System-Requirements">System Requirements</a>
            </div>

            <div id="nav-menu" class="nav-menu">
                <a href="login.php" class="Pre-Register">Pre-Register</a>
            </div>

            <div id="nav-menu" class="nav-menu">
                <a href="score.php" class="score-board">score board</a>
            </div>
        </div>
    </header>

    <script src="manage-system/validation.js"></script>
</body>
</html>