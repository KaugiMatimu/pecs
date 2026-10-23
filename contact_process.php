<?php

$to = 'info@procuraedgeconsulting.com';

function pecs_post_value($key)
{
    return isset($_POST[$key]) && is_string($_POST[$key]) ? trim($_POST[$key]) : '';
}

$name = pecs_post_value('name');
$from = pecs_post_value('email');
$subject = pecs_post_value('subject');
$number = pecs_post_value('number');
$message = pecs_post_value('message');

if (!isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] !== 'POST' || $name === '' || $subject === '' || $message === '' || !filter_var($from, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'Please provide your name, a valid email address, a subject, and a message.';
    exit;
}

function pecs_escape($value)
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$emailSubject = 'PECS website enquiry: ' . preg_replace('/[\r\n]+/', ' ', $subject);
$headers = [
    'From: ' . $to,
    'Reply-To: ' . $from,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
];
$body = '<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>PECS website enquiry</title></head><body>';
$body .= '<table><tbody>';
$body .= '<tr><th align="left">Name</th><td>' . pecs_escape($name) . '</td></tr>';
$body .= '<tr><th align="left">Email</th><td>' . pecs_escape($from) . '</td></tr>';
$body .= '<tr><th align="left">Phone</th><td>' . pecs_escape($number) . '</td></tr>';
$body .= '<tr><th align="left">Subject</th><td>' . pecs_escape($subject) . '</td></tr>';
$body .= '<tr><th align="left">Message</th><td>' . nl2br(pecs_escape($message)) . '</td></tr>';
$body .= '</tbody></table></body></html>';

if (mail($to, $emailSubject, $body, implode("\r\n", $headers))) {
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'Your message has been sent.';
    exit;
}

http_response_code(500);
header('Content-Type: text/plain; charset=UTF-8');
echo 'Your message could not be sent. Please email info@procuraedgeconsulting.com.';
