
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='style/asset/Omen_artwork.svg' rel='shortcut icon'>
    <!-- link for font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
     <!-- link css -->
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/maps.css">
    <link rel="stylesheet" href="style/style2.css">
    <link rel="stylesheet" href="style/res-maps.css">
    <!-- link jquery script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>maps</title>
</head>
<body>
    <!-- header -->
    <?php 
        include_once("header.php") 
    ?>
    <!-- section maps -->
    <section class="maps-wappers">
        <div class="select-type maps">
            <!-- upper -->
            <div class="tittle">
                <h2> DISCOVER THE MAPS OF THE LAFORANT GAMES </h2>
            </div>
            <!-- middle -->
            <div class="sentence">
                <h4>Blind, Ice. You’ve fought there, you’ve died there, but do you know why they were chosen? 
                    Magic jar and the Mercenary Tops and Pants seem to have a hand in everything that shapes the destiny of the Outspaces...
                    Learn more about the maps that host the Laforant Games.
                </h4>
            </div>
            <!-- button -->
            <div class="button-wraps">
                <div class="capsulated-button">
                    <a class="mapsss" href="#1"><span>Maps Area</span></a>
                </div>
                <div class="capsulated-button">
                    <a class="mapsss" href="#2"><span>Maps Battle</span></a>
                </div>
            </div>
        </div>

        <!-- choose -->
        <div class="choose-type maps mps1"  id="1">
            <!-- upper -->
            <div class="tittle">
                <h2> Maps Area </h2>
            </div>
            <!-- middle -->
            <div class="sentence">
                <h4>
                    Sharpen your skills where there's nowhere to hide. 
                    Unlike the grand scale of the Laforant Games, Arenas maps are specially designed for frenetic 7v7 action.
                </h4>
            </div>
            <!-- bottom -->
            <div class="container-choose">
                <div class="choose-maps">
                    <h5 class="blind">BLIND</h5>
                </div>
                <div class="choose-maps">
                    <h5 class="Ice">PIRATE</h5>
                </div>
                <div class="choose-maps">
                    <h5 class="temple">TEMPLE</h5>
                </div>
                <div class="choose-maps">
                    <h5 class="Town">TOWNS</h5>
                </div>
                <div class="choose-maps">
                    <h5 class="Sky">SKY'S</h5>
                </div>
            </div>
        </div>
        <!-- gambar -->
        <div class="img-wrap">
            <div class="image1 img"></div>
            <div class="image2 img"></div>
            <div class="image3 img"></div>
            <div class="image4 img"></div>
            <div class="image5 img"></div>
        </div>
        <!-- tulisan -->
        <div class="readmaps">
            <!-- blind -->
            <div class=" blind-mps">
                <!-- tittle -->
                <div class="tittle">
                    <h2>BLIND</h2>
                </div>
                <!-- description -->
                <div class="sentence">
                    <h4>
                        These maps are designed for winners, blind maps with lots of grains of sand will make it difficult for you to find enemies, 
                        show your skill skills on this map using an agent you trust to win rounds on this map, disclaimer be careful on this map 
                        because you can makes you blind if you are hit by a sandstorm, therefore this map is called a blind map
                    </h4>
                </div>
            </div>
            <!-- pirate -->
            <div class=" pirate">
                <!-- tittle -->
                <div class="tittle">
                    <h2>PIRATE</h2>
                </div>
                <!-- description -->
                <div class="sentence">
                    <h4>
                        This map is designed for winners in sea contests, a water map with lots of sharks in it will make
                        you afraid to dive, show your skills on this map using agents you trust to win rounds in this map, 
                        disclaimer be careful on this map because many sharks are hungry who can pounce on you at any time.
                    </h4>
                </div>
            </div>
            <!-- temple -->
            <div class="temple">
                <!-- tittle -->
                <div class="tittle">
                    <h2>TEMPLE</h2>
                </div>
                <!-- description -->
                <div class="sentence">
                    <h4>
                        This map is designed for the winner in a heritage contest, a natural map with lots of mummies in it 
                        will create you are impressed, show your skills on this map using agents you trust to win rounds on this map,
                        Be careful disclaimer on this map because of the many mummy and traps you didn't expect that make you lose the game.
                    </h4>
                </div>
            </div>
            <!-- Towns -->
            <div class="Towns">
                <!-- tittle -->
                <div class="tittle">
                    <h2>TOWNS</h2>
                </div>
                <!-- description -->
                <div class="sentence">
                    <h4>
                        This map, designed for the winner of the city kids, is a map of a building with lots of hiding places in it
                        will make it very difficult for you to find the enemy, show your skills on this map using agents you trust to win rounds on this map,
                        Be careful of many criminals in the city because of the lack of jobs.
                    </h4>
                </div>
            </div>
            <!-- skys -->
            <div class="skys">
                <!-- tittle -->
                <div class="tittle">
                    <h2>SKYS</h2>
                </div>
                <!-- description -->
                <div class="sentence">
                    <h4>
                        This map is designed for the gods, is a map of a hidden place known only to the descendants of Zeus with 
                        the power of lightning, show your skills on this map using agents you trust to win rounds and become descendants 
                        of Zeus. On this map, be aware of the amount of electric current that sometimes strikes and also the transparent 
                        expanse of holes that make you fall.
                    </h4>
                </div>
            </div>
        </div>

        <!-- bottom choose -->
        <div class="choose-type maps mps2"  id="2">
            <!-- upper -->
            <div class="tittle">
                <h2> Battle Spot Maps</h2>
            </div>
            <!-- middle -->
            <div class="sentence">
                <h4>
                    Located on planets across the PlandsLands, these massive landscapes host the massive Laforant Games.
                </h4>
            </div>
            <div class="container-choose">
                <div class="choose-maps">
                    <h5 class="Magic">MAGIC</h5>
                </div>
                <div class="choose-maps">
                    <h5 class="cast">CASTLE</h5>
                </div>
            </div>
        </div>   
        <div class="img-wrap2">
            <div class="Magic-img img"></div>
            <div class="castle img"></div>
        </div> 
        <div class="readmaps">
            <div class="Magics">
                <!-- tittle -->
                <div class="tittle">
                    <h2>MAGIC</h2>
                </div>
                <!-- description -->
                <div class="sentence">
                    <h4>
                        This map, designed for magicians, is a map of hidden places known only to the descendants of wizards with
                        magic power, show your skills on this map using agents you trust to win rounds and become a winner "chicken Lunch". On this map, a disclaimer
                        Be careful if you meet a barbagon, he can turn you into a frog in 1 minute.
                    </h4>
                </div>
            </div>
            <div class="calstle">
                <!-- tittle -->
                <div class="tittle">
                    <h2>CASTLE</h2>
                </div>
                <!-- description -->
                <div class="sentence">
                    <h4>
                        This map, designed for kings, is a map of the brazen places of war knights, show your skills on 
                        this map using agents you trust to win rounds and become the winner of "Chicken Lunch". On this map, a disclaimer
                        Be careful if you meet Kings Mamunt, he can overwhelm you to face him apart from other agents.
                    </h4>
                </div>
            </div>
        </div>
    </section>

    <!-- footer -->
    <?php 
        include_once("footers.php")
    ?>




<script src="manage-system/responsive.js"></script>
<script src="manage-system/slidemaps.js"></script>
<script src="manage-system/smoot_scrool.js"></script>
</body>
</html>