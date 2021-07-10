<?php
    include("config.php");
        
if(isset($_POST["firstname"]) && isset($_POST['iduser']) && isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['date'])
&& isset($_POST['nationality']))
{
    $id_user = $_POST['iduser'];
    $usenames_user = $_POST['username'];
    $firstname_user = $_POST['firstname'];
    $lastname_user = $_POST['lastname'];
    $email_user = $_POST['email'];
    $password_user = $_POST['password'];
    $date_user = $_POST['date'];
    $nationality_user = $_POST['nationality'];

        $sqlcheckuser = "SELECT * FROM `user_datas` WHERE Username = '$usenames_user'";
        $resultquery = mysqli_query($conn,$sqlcheckuser);
        $usercheck = mysqli_num_rows($resultquery);

        if($usercheck == 1)
        {
            echo "already";
        }
        else 
        {
            // $qry = "INSERT INTO `user_datas`(`ID`, `Username`, `First Name`, `Last Name`, `Email`, `Password`, `Date`, `Nationality`) VALUES ('".addslashes($_POST['iduser'])."', 
            // '".addslashes($_POST['username'])."', '".addslashes($_POST['firstname'])."', '".addslashes($_POST['lastname'])."', '".addslashes($_POST['email'])."', '".addslashes($_POST['password'])."',
            // '".addslashes($_POST['date'])."', '".addslashes($_POST['nationality'])."')";
            // mysqli_query($conn,$qry);

            $qry = "INSERT INTO `user_datas`(`ID`, `Username`, `First Name`, `Last Name`, `Email`, `Password`, `Date`, `Nationality`) VALUES ('$id_user' , '$usenames_user' , '$firstname_user' ,
            '$lastname_user' , '$email_user' , '$password_user' , '$date_user' , '$nationality_user' )";
            $results = mysqli_query($conn,$qry);
           
            if(!$results)
            {
                echo "fail";
            }
            else 
            {
                echo "success";
            }
        }
   
}



?>