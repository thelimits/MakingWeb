<?php
    session_start();
    include("config.php");
        
if(isset($_POST["usernms"]) && isset($_POST['passlogin']))
{
    $user = $_POST['usernms'];
    $pass_users = $_POST['passlogin'];
    
        $sqlcheckuser = "SELECT * FROM `user_datas` WHERE Username = '$user' AND  Password = '$pass_users' ";
        $resultquery = mysqli_query($conn,$sqlcheckuser);
        $usercheck = mysqli_num_rows($resultquery);

        $varsetrecord = mysqli_fetch_assoc($resultquery);

        if($usercheck == 1)
        {
            echo "already";
            $_SESSION["Username"] = $varsetrecord["Username"];
            $_SESSION["Pass"] = $varsetrecord["Password"];
        }
        else 
        {
            echo "notfound";
        }
   
}



?>