<?php

    $con = mysqli_connect("localhost","root","", "thumb_test") or die('打开失败');

    $countnum = mysqli_fetch_assoc(mysqli_query($con, "SELECT count FROM thumb WHERE id = 0"));

    mysqli_close($con);

    echo json_encode($countnum['count'] + 1);
?>