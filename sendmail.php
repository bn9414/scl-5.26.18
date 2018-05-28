<?php


$mobile = $_REQUEST['mobile'] ;
$email = $_REQUEST['email'] ;
$name = $_REQUEST['name'] ;

$organistaionname = $_REQUEST['organistaionname'] ;

$comment = $_REQUEST['comment'] ;

require("PHPMailerAutoload.php");
require ("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->Host = "md-in-71.webhostbox.net";
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Port = 587;

$mail->Username = "smartchampionsleague@outofbest.com";
$mail->Password = "temp@1234";
$mail->ClearReplyTos();



$mail->From = "smartchampionsleague@outofbest.com";
//$mail->FromName = "Test from Info";
$mail->AddAddress("saravanakumarj27@gmail.com");  
//$mail->AddReplyTo("mail@mail.com");

$mail->IsHTML(true);

$mail->Subject = "Test message from server";
$mail->Body = "Test Mail<b>in bold!</b>
                Name: $name 
                Email: $email
                Mobile: $mobile
                Organistaion Name: $organistaionname
                Message: $comment";
$mail->AltBody = "This is the body in plain text for non-HTML mail clients";

if(!$mail->Send())
{
echo "Message could not be sent. <p>";
echo "Mailer Error: " . $mail->ErrorInfo;
exit;
}

include 'cform.html';
//echo "Message has been sent";
?>


