<?php
    $to = "webvedant@gmail.com"; // replace with your mail address

	$name = $_REQUEST['name'];

    $phone = $_REQUEST['phone'];

    $email = $_REQUEST['email'];

    $message = $_REQUEST['message'];

    $subject = "Enquiry received";

    $body = "Enquiry details:";

    $body .= "\n---------------------------\n\n";

    $body .="Name: ".$name." \n";

	$body .="Phone: ".$phone." \n";

	$body .="E-Mail ID: $email \n";

	$body .="Message: $message \n";

    $header = "From: $name <$email>\n";

    $header .= "Reply-To: $name <$email>\n";

    $header .= "X-Mailer: PHP/" . phpversion() . "\n";

    $header .= "X-Priority: 1";

	//mail("sanjitgreat@gmail.com", "Enquiry received", $body);

    if(@mail($to, $subject, $body, $header))

    {

        echo "sent";

    } else {

       echo "error";

    }

?>
