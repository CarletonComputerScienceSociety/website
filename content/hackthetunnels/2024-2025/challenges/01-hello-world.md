---
id: "hello-world"
order: 1
title: "0. Hello World: Update Page Title"
points: 1
difficulty: Beginner Friendly (Start here)
category: Frontend
date: 2023-10-01T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/hello-world"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

To complete this challenge, please update the websites page title.

Checkout: [`client/index.html`](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/main/client/index.html)

And update the page title to be any name that you feel will better represent your project.

```diff
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-   <title>Hack The Tunnels Project</title>
+   <title>Your New Project Title</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
    </body>
</html>
```

<br/>

## Acceptance Criteria:

This challenge will be considered complete if the title of the webpage / the name of their "tab" is anything but "Hack The Tunnels Project".