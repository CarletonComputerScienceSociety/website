---
id: "add-max-registration-column"
order: 2
title: "11. Add Max Registration Column to Scheduled Events"
points: 3
difficulty: Beginner Friendly
category: Backend
date: 2024-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/add-max-registration-column"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Add a **"max registration"** column to the `scheduledEvents` table in the relational database. This column should store the maximum number of students allowed to register for each scheduled event.

Checkout the [schema.prisma](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/8f7769a7223bb3e2ac4e95ced1f64373444fd838/service/src/db/schema.prisma) file to get started.

Ensure that the migration is created and executed correctly, and update any relevant models or services to reflect this new column.

For help creating a Prisma migration, see [this guide](https://www.prisma.io/docs/orm/prisma-migrate/getting-started).

<br/>

## Acceptance Criteria:

1. A migration is created to add the "max registration" column to the `scheduledEvents` table.
2. The new column is properly integrated into the existing data models and services.