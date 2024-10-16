---
id: "overlapping-courses"
order: 1
title: "10. Prevent Overlapping Events"
points: 6
difficulty: Beginner Friendly
category: Backend
date: 2024-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/overlapping-courses"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Modify the backend to ensure that when a student creates a timetable, no two courses in the timetable overlap. If overlapping courses are detected, the timetable creation should be rejected, and an error message should be returned to the user.

Timetable creation is handled in the Timetable Service ([service/src/services/Timetable.ts](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/main/service/src/services/Timetable.ts)) inside the `createTimetable` method.

This method should return an error that is surfaced to the user if there are courses with conflicting times.

<br/>

## Acceptance Criteria:

1. The backend rejects the creation of timetables with overlapping courses.
2. A clear error message is returned when overlapping courses are detected.
3. The participant's solution is well-integrated into the existing timetable creation process.
