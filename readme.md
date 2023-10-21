# CCSS Website

## Setup

### 1. Installation

This website is built with the [Hugo](https://gohugo.io/) static site generator.

To setup Hugo, follow the Hugo authored [tutorial](https://gohugo.io/getting-started/installing/) for your operating system of choice.

Mac :

```bash

brew install hugo

```

For Windows users, I recommend following [this video](https://www.youtube.com/watch?v=G7umPCU-8xc) if you are unfamilliar with choco.

You will need to install the latest "hugo_extended" version. This can be found on the [Hugo releases page](https://github.com/gohugoio/hugo/releases).

### 2. Start Hugo

To start Hugo, navigate to the directory where you cloned this project and run the following command:

```bash

hugo server

```

## Events

* **display_title:** The event's name as it will be shown on the home and events pages
* **title:** The event's name as it will be shown on an event's individual page
* **date:** The date the event took place
* **draft:** Boolean representing whether the event should be publicly viewable
* **layout:** (event) Represents that this page should follow the event page layout
* **poster:** ("images/event_posters/20XX-20XX/NAME.jpg") The location of the event's poster
* **poster_cover:** ("contain") Represents the background-size css property
* **poster_position:** ("center") Represents the background-position css property
* **short_description:** Represents the description used otuside an event's individual page
* **start_time:** Represents an event's start time
* **location:** Represents the text that will appear on the red event page button
* **location_link:** The link used when you click on the event page "red button"
* **background:** ("images/orientation2018-min.jpeg") Image used as the background of the upper part of the page


## Content Generators

```bash

hugo new events/<event-name>.md

```

```bash

hugo new news/<news-name>.md

```

## Prettier

npm is only used for adding developer dependencies and does not interface with hugo in anyway. The main dependency is prettier.

```bash
npm install
npm run format
```
