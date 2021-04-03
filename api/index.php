<?php
include_once('config.php');
include_once('sendmail.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['fullName']) && empty($_POST['email']) ) {
  echo json_encode(
      [
         "sent" => false,
         "message" => $SendMailEmptyerrorMessage
      ]
  ); 
  exit();
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if ($_POST){
  //@important: Please change this before using
  http_response_code(200);
  $fullname = test_input($_POST["fullName"]);
  $message = test_input($_POST['message']); 
  $from = test_input($_POST['email']);
 
  //Actual sending email
  Sender($adminEmail, $from, $message, $fullname);
} else {
// tell the user about error
echo json_encode(
   [
      "sent" => false,
      "message" => $SendMailFailederrorMessage
   ]
);
}
