<?php
    require("mysql_connect.php");
    $title = $_POST['title'];
    $stamp = $_POST['timestamp'];
    $detail = $_POST['details'];
    $myId = $_POST['user_id'];
    $query = "INSERT INTO `todo_items` SET `user_id`='$myId', `timestamp`='$stamp' , `details`= '$detail', `id`=NULL, `title`= '$title'";




    mysqli_query($conn, $query);
    print_r(mysqli_affected_rows($conn));
?>