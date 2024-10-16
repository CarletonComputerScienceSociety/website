---
id: "course-text-search"
order: 25
title: "Course Elastic Search"
points: 11
difficulty: Complex
category: Fullstack
date: 2023-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/course-text-search"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

On the **BuildTimetable** page, add a UI feature that allows users to search for "scheduled events" using a **search bar**. The search should query ElasticSearch to return relevant scheduled events based on course name, code, description, or any other relevant field.

In the backend, integrate [**ElasticSearch**](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/brew.html) to index and search scheduled events from the database.

<br/>

## Acceptance Criteria:

1. A search bar is added to the BuildTimetable page.
2. The search bar allows users to query scheduled events by text (e.g., course name, code, description).
3. The backend utilizes ElasticSearch to handle these queries and return results efficiently.
4. The UI displays the search results dynamically as the user types.
