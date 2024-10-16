---
id: "github-actions-prettier"
order: 1
title: "25. Set Up GitHub Actions for Prettier"
points: 3
difficulty: Beginner Friendly
category: DevOps
date: 2024-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/github-actions-prettier"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Create a [GitHub Actions](https://github.com/features/actions) configuration that runs Prettier automatically whenever a pull request (PR) is made. The action should format the code in the specified files to maintain code style consistency across the project.

Ensure that your workflow is triggered on `pull_request` events and that it runs Prettier on the designated files or directories.

See an [example of this](https://github.com/CarletonComputerScienceSociety/website/blob/master/.github/workflows/workflow.yml) on the CCSS Website repo.

<br/>

## Acceptance Criteria:

1. A GitHub Actions workflow is created that runs Prettier on PRs.
2. The workflow triggers correctly when a pull request is opened or updated.