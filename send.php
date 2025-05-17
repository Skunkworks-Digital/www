<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    $phone   = $_POST['phone'] ?? '';
    $company = $_POST['company'] ?? '';
    $service = $_POST['service'] ?? '';
    $mail = new PHPMailer(true);

    try {
        // SMTP config
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'cliftonmolele@gmail.com';
        $mail->Password   = 'sgkhbkwvislncepw'; // App password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;


        $mail->setFrom('cliftonmolele@gmail.com', 'no-reply@SKUNK.CO.ZA'); // Users see "No-Reply"
        // $mail->addReplyTo('no-reply@SKUNK.CO.ZA', 'Do Not Reply'); // Reply goes nowhere


        // From & reply-to
        $mail->setFrom('cliftonmolele@gmail.com', $name);
        $mail->addReplyTo($email, $name);

        $mail->setFrom('no-reply@skunk.co.za', 'SkunkWorks.africa');
        $mail->addAddress('cliftinteboho@gmail.com', 'SkunkWorks Team');
        $mail->addAddress('skunkwks@digital.co.za', 'SkunkWorks Team');
        $mail->addReplyTo($email, $name);  // so replies go to the user

      // Message content
                // Message content
                $mail->isHTML(true);
                $mail->Subject = "SkunkWork Digital";
                $mail->Body    = "
                    <h2>Contact Form Submission</h2>
                    <p><strong>Name:</strong> {$name}</p>
                    <p><strong>Email:</strong> {$email}</p>
                    <p><strong>Phone:</strong> " . ($phone ?: 'N/A') . "</p>
                    <p><strong>Company:</strong> {$company}</p>
                    <p><strong>Service of Interest:</strong> {$service}</p>
                    <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
                ";

                $mail->AltBody = 
                    "Contact Form Submission\n\n"
                . "Name: {$name}\n"
                . "Email: {$email}\n"
                . "Phone: " . ($phone ?: 'N/A') . "\n"
                . "Company: {$company}\n"
                . "Service of Interest: {$service}\n"
                . "Message:\n{$message}\n\n"
                . "Reply to: {$email}";

                $mail->send();


        // ✅ AUTO REPLY TO USER
        $autoReply = new PHPMailer(true);
        $autoReply->isSMTP();
        $autoReply->Host       = 'smtp.gmail.com';
        $autoReply->SMTPAuth   = true;
        $autoReply->Username   = 'cliftonmolele@gmail.com';
        $autoReply->Password   = 'sgkhbkwvislncepw'; 
        $autoReply->SMTPSecure = 'tls';
        $autoReply->Port       = 587;

        $autoReply->setFrom('cliftonmolele@gmail.com', 'SkunkWorksDigital');
        $autoReply->addAddress($email, $name);
        $autoReply->isHTML(true);
        $autoReply->Subject = "We've received your message!";
        $autoReply->Body = "
            <p>Hi $name,</p>
            <p>Thanks for getting in touch! We’ve received your message and will respond shortly.</p>
            <p><strong>Your message:</strong></p>
            <blockquote>" . nl2br(htmlspecialchars($message)) . "</blockquote>
            <p>Best regards,<br>SkunkWorks Digital Team</p>
        ";

        $autoReply->send();

        header("Location: index.php?sent=1");
        exit();   
     } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
