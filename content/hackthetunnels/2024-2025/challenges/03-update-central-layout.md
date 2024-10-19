---
id: "update-central-layout"
order: 3
title: "3. Update Central Layout"
points: 7
difficulty: Beginner Friendly
category: Frontend
date: 2023-10-01T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/update-central-layout"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

For this challenge, your team needs to improve the "Central Layout".

Checkout: [`client/src/layouts/Central/Central.tsx`](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/main/client/src/layouts/Central/Central.tsx) to get started.

The "Central Layout" is used by all of the pages themed to look like Carleton Central.

This means that any change may to this file will modify the look of all over pages using this layout.

In the example below, [`children`](https://react.dev/reference/react/Children) is the contents of other pages being passed into this layout to be rendered.

```typescript
function Central({ title, children }: Props) {
  return (
    <Base>
      <Banner />
      <div className="Central__page">
        <HeaderLinks />
        <Navigation />
        <h2 className="Central__page__title">{title}</h2>
        <Divider />
        <div className="Central__page__content">{children}</div>
        <Divider />
        <div className="Central__page__footer">
          <div className="Central__page__footer__release">Release: 8.10.1</div>
          <div className="Central__page__footer__copyright">
            © 2024 Ellucian Company L.P. and its affiliates.
          </div>
        </div>
      </div>
    </Base>
  );
}
```

<br/>

## Acceptance Criteria:

The new layout must satisfy (3) of the (5) following criteria
- Modify the Carleton Central [`<Banner />`](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/main/client/src/layouts/Central/Banner/Banner.tsx) to look "better", such as... 
    - change the  image
    - add a better title
    - anything you think would be cool or funny
- Add icons to [`<HeaderLinks />`](https://github.com/CarletonComputerScienceSociety/hack-the-tunnels-starter-2024/blob/main/client/src/layouts/Central/HeaderLinks/HeaderLinks.tsx) icons that represent their intended goals
- Improve the "page title" styling (see `Central__page__title`)
- Create an improved footer (see `Central__page__footer`)
- Update the colors used in the layout (see `client/src/globals.scss`)
