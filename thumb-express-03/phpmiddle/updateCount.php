<?php

    $con = mysqli_connect("localhost","root","", "thumb_test") or die('打开失败');

    $countnum = mysqli_fetch_assoc(mysqli_query($con, "SELECT count FROM thumb WHERE id = 0"));
    $countnum = $countnum['count'] + 1 >= 10 ? 0 : $countnum['count'] + 1 ;
    $result = mysqli_query($con, "UPDATE `thumb` SET `count`=".($countnum)." WHERE id = 0");

    mysqli_close($con);

    echo json_encode($result);
?>