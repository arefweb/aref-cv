<?php
/**
 * @function Sender
 * This is used to send email via react contact from component
 */

  function Sender($sendTo, $sendFrom , $sendMessage, $fullname){
      $to = $sendTo;
      $subject = $fullname;
      $message = "From: ".$fullname." \n "
      ."Email: ".$sendFrom." \n\n "
      ."/**** Message ****/". " \n "
      .$sendMessage;
      $headers = "From: ArefWeb";

      if(mail($to, $subject, $message, $headers)){
        echo json_encode(array("sent" => true ));
      } else {
        echo json_encode(array("sent" => false));
      }
  }
