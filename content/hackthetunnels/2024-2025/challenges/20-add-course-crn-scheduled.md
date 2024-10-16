---
id: "add-course-crn-scheduled"
order: 20
title: "20. Search Course by CRN"
points: 5
difficulty: Intermediate
category: Fullstack
date: 2024-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/add-course-crn-scheduled"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Implement a feature on the BuildTimetable page that allows users to search for a course using the course's **CRN (Course Reference Number)**. The user should be able to input a CRN, and upon validation, added to the "worksheet" section of the BuildTimetable page.

The feature should include validation to ensure the CRN is valid and exists in the course database.

To query the backend, you can either add new CRN [query parameter](https://www.branch.io/glossary/query-parameters/#:~:text=Query%20parameters%20are%20a%20defined,web%20server%20when%20making%20requests.) to the `/scheduledEvents` endpoint or create a new endpoint.

<br/>

## Acceptance Criteria:

1. Users can input a CRN to add a course to their schedule.
2. The system validates the CRN and provides appropriate feedback for valid or invalid inputs.
3. If the CRN is valid, the course is successfully added to the user's timetable.
4. The feature handles potential scheduling conflicts and notifies the user accordingly.
