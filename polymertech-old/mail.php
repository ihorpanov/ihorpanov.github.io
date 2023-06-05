<?php
    if (isset($_POST["send"])) {
        $to = "polymertech.ua@gmail.com";
        $subject = "Заявка на звонок";
        $charset = "utf-8";
        $headerss ="Content-type: text/html; charset=$charset\r\n";
        $headerss.="MIME-Version: 1.0\r\n";
        $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
        $msg = "Имя: ".$_POST["name"]."\nТелефон: ".$_POST["phone"]."\nКомментарий: ".$_POST["comment"]."\n";

        mail($to, $subject, $msg, $headerss);
        print "<script>alert(\"Спасибо за заявку! С Вами свяжутся в ближайшее время.\");window.location = window.location.href = \"http://localhost/Polymer%20technology\"</script>";
    }
?>
