<?php
include_once('config.php');
include_once('sendmail.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

$rest_json = file_get_contents("php://input");
$form_data = json_decode($rest_json, true);

if( empty($form_data['fullName']) && empty($form_data['email']) ) {
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

if ($form_data){
  $fullname = test_input($form_data["fullName"]);
  $message = test_input($form_data['message']); 
  $from = test_input($form_data['email']);
 
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
