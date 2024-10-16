---
id: "redesign-login-page"
order: 2
title: "1. Create Your Own Login Page"
points: 6
difficulty: Beginner Friendly
category: Frontend
date: 2023-10-01T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/redesign-login-page"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

For this challenge, your team needs redesign the Carleton Central login page.

Checkout: [`client/src/pages/Login/Login.tsx`](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/main/client/src/pages/Login/Login.tsx) to get started.

Additionally, today the email and password values used when clicking "sign in" are hard coded to be `admin@email.com` and `password`. 

Utilize React's [useState](https://legacy.reactjs.org/docs/hooks-state.html) hook to store custom values for email and password and update the ```attemptLogin``` login function to use the newly stored values.

<br/>

## Acceptance Criteria:

The new login page must satisfy atleast (2) of these (4) possible criteria:
- Replace the image of Carleton University with something new
- Improve the styling of the "Sign in" button (improved colors, fonts, animation, etc)
- Move the "login panel" (the white box with inputs) to the left side of the screen
- Improve the "error message" styling. Ex: The message that appears when you enter a wrong email-password combination

Additionally, the team must demonstrate that their sign in inputs are not hardcoded with values of `admin@email.com` and `password`. 

Bonus points are allowed to be given if it is obvious the team has put significant effort into overhauling the login page.
