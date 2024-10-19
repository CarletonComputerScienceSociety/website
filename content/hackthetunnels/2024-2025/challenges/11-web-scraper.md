---
id: "webscraper-course-data"
order: 11
title: "14. Course Data Web Scraper"
points: 10
difficulty: Intermediate
category: Backend
date: 2023-10-14T23:11:13Z
draft: false
url: "/hackthetunnels/2024-2025/webscraper-course-data"
layout: hack_the_tunnels_challenge
preview: "images/event_posters/2023-2024/hack_the_tunnels.jpg"
---

Create a web scraper that extracts course data from the [Carleton Central schedule page](https://central.carleton.ca/prod/bwysched.p_select_term?wsea_code=EXT). The scraper should retrieve details such as course codes, titles, and available sections for a given term.

If you're not sure where to get started, here is some starter code:

```typescript
import axios from 'axios';
import * as cheerio from 'cheerio';  // Use this syntax for compatibility

const scrapeData = async () => {
  const { data } = await axios.get('https://central.carleton.ca/prod/bwysched.p_select_term?wsea_code=EXT');
  console.log(data);  // Logs raw HTML content
  
  const $ = cheerio.load(data);  // Initialize Cheerio with loaded HTML
  console.log($('title').text());  // Example: Print the <title> content
};

scrapeData();
```

To run this code, you'll have to `npm i axios` and `npm i cheerio`.

## Acceptance Criteria:

1. The web scraper successfully extracts course data, including course codes, titles, and sections.
2. The scraper is able to parse data from at least one term and one program from the provided website.
3. The scraped data is outputted in a structured format, such as JSON or CSV.
