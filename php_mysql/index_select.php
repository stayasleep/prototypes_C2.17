<?php
    require("mysql_connect.php");
    $query = "SELECT * FROM todo_items";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)){
            $output[]=$row;
        }
    }
    echo'<pre>';
    print_r($output);
    echo'</pre>'
?>