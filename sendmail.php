<?php

 error_reporting(E_ALL);
    ini_set('display_errors', '1');
    
   if(isset($_FILES['upload'])){
      $errors= array();
      $file_name = $_FILES['upload']['name'];
      $file_size = $_FILES['upload']['size'];
      $file_tmp = $_FILES['upload']['tmp_name'];
      $file_type = $_FILES['upload']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['upload']['name'])));
      
      $expensions= array("jpeg","jpg","png","pdf");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a PDF, JPEG or PNG file.";
      }
      
      if($file_size > 2097152) {
         $errors[]='File size must be excately 2 MB';
      }
      
      if(empty($errors)==true) {
         move_uploaded_file($file_tmp,"uploads/".$file_name); //The folder where you would like your file to be saved
         echo "Success";
      }else{
         print_r($errors);
      }
   }

// PHPMailer script below
/*
$email = $_REQUEST['email'] ;
$name = $_REQUEST['name'] ;
$phone = $_REQUEST['phone'] ;


*/
$message = $_REQUEST['Message'] ;

require("PHPMailerAutoload.php");
require ("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->Host = "brainstormsolution.com";
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Port = 587;
$mail->Username = "contact@outofbest.com";
$mail->Password = "temp1234";
$mail->ClearReplyTos();
$mail->SetFrom('contact@outofbest.com', 'First Last');

$mail->AddReplyTo("contact@outofbest.com","First Last");

//$mail->From = "contact@outofbest.com";
//$mail->FromName = "Test from Info";
$mail->AddAddress("bhuvaneshnick@gmail.com");
//$mail->AddReplyTo("mail@mail.com");

$mail->IsHTML(true);

$mail->Subject = "Test message from server";
$mail->Body = "Test Mail<b>in bold!</b>";
$mail->AltBody = "This is the body in plain text for non-HTML mail clients";

if(!$mail->Send())
{
echo "Message could not be sent. <p>";
echo "Mailer Error: " . $mail->ErrorInfo;
exit;
}

echo "Message has been sent";
?>


