---
id: "scheduled-event-page-caching"
order: 22
title: "21. Scheduled Event Page With Redis"
points: 8
difficulty: Complex
category: Fullstack
date: 2024-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/scheduled-event-page-caching"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Let's recreate [this page](https://central.carleton.ca/prod/bwysched.p_display_course?wsea_code=EXT&term_code=202430&disp=22199269&crn=31211) from the original Carleton Central.

In the client, create a new page in `client/src/pages` that will display detailed information for a scheduled event. The page should allow users to view data about the scheduled event, including information from both the **scheduled events** and **courses** tables.

In the service API, create a new route in `service/src/api/routes/scheduledEvents.ts` for retrieving an individual scheduled event via `/scheduledEvents/:id`.

Within the `ScheduledEvents` service (`service/src/services/ScheduledEvent.ts`), add a new method that retrieves a scheduled event and aggregates the necessary data from both the `scheduledEvents` and `courses` tables. 

For performance, use [**Redis**](https://redis.io/) to cache the retrieved data. When a user accesses the page, first check if the data is cached in Redis. If not, retrieve the data from the database and store it in Redis for future requests.

You may need to install [Redis](https://formulae.brew.sh/formula/redis).

<br/>

## Acceptance Criteria:

1. A new page is created in `client/src/pages` that displays detailed information about a scheduled event.
2. A new route (`/scheduledEvents/:id`) is added in `service/src/api/routes/scheduledEvents.ts` to fetch an individual scheduled event.
3. The `ScheduledEvents` service contains a method to retrieve data from both the `scheduledEvents` and `courses` tables.
4. Redis is used to cache the retrieved data, ensuring faster response times for future requests.