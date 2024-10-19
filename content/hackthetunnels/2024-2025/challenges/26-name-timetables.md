---
id: "name-timetables"
order: 3
title: "2. Save Timetable Name"
points: 4
difficulty: Beginner Friendly
category: Frontend
date: 2023-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/name-timetables"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Add functionality to allow users to **save a custom name** for their timetables. This will help users identify their timetables more easily when managing multiple schedules.

In the client, create an input field on the [**BuildTimetable**](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/8f7769a7223bb3e2ac4e95ced1f64373444fd838/client/src/pages/BuildTimetable/BuildTimetable.tsx) page where users can enter a name for their timetable.

Update the `createTimetable` method to use the input from your newly created [input element](https://www.w3schools.com/tags/tag_input.asp).

Utilize React's [useState](https://legacy.reactjs.org/docs/hooks-state.html) hook to store the name.

<br/>

## Acceptance Criteria:

1. A text input field is added on the BuildTimetable page where users can enter a name for their timetable.
2. The name is saved in the backend when the timetable is created or updated.
3. The saved name is displayed when viewing or managing timetables.
