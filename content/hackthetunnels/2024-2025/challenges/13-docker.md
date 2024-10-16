---
id: "docker"
order: 13
title: "26. Dockerize Client and Service"
points: 10
difficulty: Intermediate
category: DevOps
date: 2023-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/docker"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Create Dockerfiles for both the `client` and `service` folders, then use Docker Compose to make them work together in a single development environment. The `client` should be able to communicate with the `service`, and both should run seamlessly within their respective containers.

Ensure that all necessary dependencies are installed and that the services can interact as they would in a normal, non-Dockerized environment.

To complete this challenge, you'll need to have [docker installed](https://formulae.brew.sh/formula/docker).

<br/>

## Acceptance Criteria:

1. Dockerfiles are created for both the `client` and `service` folders.
2. Docker Compose is used to orchestrate both services so that they run together in containers.
3. The `client` is able to communicate with the `service` through the appropriate network configuration.