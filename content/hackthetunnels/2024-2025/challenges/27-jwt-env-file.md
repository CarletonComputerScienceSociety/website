---
id: "jwt-env-file"
order: 1
title: "23. Move JWT Secret to .env"
points: 3
difficulty: Beginner Friendly
category: Security
date: 2023-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/jwt-env-file"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Currently in the codebase, the JWT secret is being hard coded... this is not good (see: `service/src/config/jwt.ts`).

We should instead use a [`.env`](https://medium.com/@sujathamudadla1213/what-is-the-use-of-env-8d6b3eb94843) file to store sensitive information.

## Acceptance Criteria:

The participant instead reads the JWT secret off of the `.env` file.