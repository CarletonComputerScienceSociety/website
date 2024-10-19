---
id: "course-recommendation-feature"
order: 18
title: "19. Course Recommendation"
points: 8
difficulty: Intermediate
category: Fullstack
date: 2023-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/course-recommendation-feature"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Add a way on the "BuildTimetable" page for a student to request a course recommedntation based on a time and day specified by the student.

When a user requests a recommendation, the system should return a list of available courses that fit within that time frame.

To query the backend, you can either add new [query parameters](https://www.branch.io/glossary/query-parameters/#:~:text=Query%20parameters%20are%20a%20defined,web%20server%20when%20making%20requests.) to the `/scheduledEvents` endpoint or create a new endpoint.

Both of these would involve modifications to the [scheduleEventsRouter](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/8a57926575f6d4c35565d84971337e505cab96a9/service/src/api/routes/scheduledEvents.ts).

In terms of how this is presented to users, you are welcome to have it be as simple or as complex as you want. (It can just be a couple input boxes).

<br/>

## Acceptance Criteria:

1. The feature successfully accepts a time input from the user.
2. The system returns a list of recommended courses that fit the specified time and days.
3. The recommendation logic handles potential scheduling conflicts appropriately.
