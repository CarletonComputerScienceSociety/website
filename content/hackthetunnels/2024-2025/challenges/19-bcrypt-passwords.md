---
id: "bcrypt-passwords"
order: 19
title: "Bcrypt Passwords"
points: 8
difficulty: Beginner Friendly
category: Security
date: 2023-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/bcrypt-passwords"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

As a user, my password should not be stored in plain text. 

Storing passwords in plain text is a significant security risk, as it exposes sensitive information in case of a data breach. To enhance security, passwords should be hashed before being stored in the database.

For this challenge use the [bcrypt npm package](https://www.npmjs.com/package/bcrypt) to hash passwords before they are stored.

Additionally, update the login workflow to work with the now hashed passwords.

You'll need to make changes in the [Authentication](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/main/service/src/services/Authentication.ts) and [Authorization](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/main/service/src/services/Authorization.ts) services.

## Acceptance Criteria:

- Passwords should no longer be stored in plain text in the database when an account is created.

- The solution must be compatible with existing user workflows (ex: login flow), ensuring a smooth transition without requiring password resets for current users.