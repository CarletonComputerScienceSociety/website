---
id: "email-timetable"
order: 9
title: "12. Send Email On Timetable Create"
points: 8
difficulty: Intermediate
category: Backend
date: 2023-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/email-timetable"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

When a student creates a timetable, an email should be sent to the student's email address containing details of their newly created timetable.

You can use any library to achieve this. If you're unsure where to start, this [guide](https://medium.com/@y.mehnati_49486/how-to-send-an-email-from-your-gmail-account-with-nodemailer-837bf09a7628) demonstrates how to send emails using `nodemailer` with the Gmail SMTP server.

Timetable creation is handled in the Timetable Service ([service/src/services/Timetable.ts](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/main/service/src/services/Timetable.ts)) inside the `createTimetable` method.

<br/>

## Acceptance Criteria:

- When a student creates a timetable, an email containing the timetable details is sent to the student's email.