---
id: "webhooks"
order: 14
title: "15. Send Discord Webhook"
points: 6
difficulty: Beginner Friendly
category: Backend
date: 2024-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/webhooks"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Set up a system that triggers a [Discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) when a specific event happens (e.g., when a new timetable is created or a course is added). 

Your task is to configure the backend so that, upon the occurrence of {x} event, a message is sent to a Discord channel via a webhook.

You can use any library or method to send the HTTP request to the Discord webhook URL.

<br/>

## Acceptance Criteria:

1. A Discord webhook is triggered when {x} event happens in the system.
2. The participant successfully sends a message to a Discord channel when the event occurs.
3. The webhook message contains relevant information about the event.
