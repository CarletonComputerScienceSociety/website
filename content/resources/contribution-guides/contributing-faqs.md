# Contributing FAQs

FAQs can be be viewed here - [ccss.carleton.ca/faq/course-registration/](https://ccss.carleton.ca/faq/course-registration/)

FAQ Topic Page:
<<<<<<< HEAD
<img src="/static/images/resources/faqs/faq-page.png"/>

Sample FAQ: 
<img src="/static/images/resources/faqs/sample-faq.png"/>
=======
<img src="static/images/resources/faqs/faq-page.png"/>

Sample FAQ: 
<img src="static/images/resources/faqs/sample-faq.png"/>
>>>>>>> d0b7807ce (add faq contribution guide)

<br/>

## 0.1 Setup the CCSS website project locally 

Follow the instructions in the **README**

## 0.2 Look at the example for a written FAQ

The markdown file for a completed FAQ can be found here: `content/resources/faq/questions/free-vs-breadth-electives.md`
Sample completed FAQ page - [What is a Breadth elective vs a Free elective](https://ccss.carleton.ca/resources/faq/questions/free-vs-breadth-electives/)

## 1. Pick an unwritten FAQ from the project board

[Resources Contributions Project Board](https://github.com/orgs/CarletonComputerScienceSociety/projects/22)

<<<<<<< HEAD
Change the status on the Project Board from `Todo` to `In Progress`

=======
>>>>>>> d0b7807ce (add faq contribution guide)
## 2. Locate the empty markdown file

You can find the FAQ markdown files here: `content/resources/faq/questions`

## 3. Complete the front matter attributes

- `title` - The title of the FAQ that will show up on the webpage
- `date` -  The date on which an FAQ was initially published. Format - `YYYY-MM-DDT00:00:00Z`
- `last_updated` - If an FAQ is updated, the date of the edit. Otherwise, same as the `date` attribute. Format - `YYYY-MM-DDT00:00:00Z`
- `draft` - Value should be set to "true"
- `layout` - Value should be set to "faq-question""
- `summary` - Summary text that will show up on the topic page with the full list of FAQs (see first image)
- `contributors` - Names of the people that contributed to writing and editing the FAQ
- `sources`: Any links or sources that have been referenced in the answer. Format: 
```diff
  - name1: Title of the webpage 
    link1: Link 
  - name2: Title of the webpage 
    link2: Link
  ...
```

## 4. Write the answer

- FAQs are intended to summarise relevant information as concisely as possible. Try to stick to **100-200 words**. 
- Don't rewrite things that have already been explained by the School of Computer Science or Carleton University webpages. You can include a short summary or quote and then link to their webpages.
<<<<<<< HEAD
- The ticket on the project board corresponding to your FAQ will highlight some information that should be covered by your answer. You can add any other information you think is useful but anything highlighted there must be included. 
=======
- The ticket on the project board corresponding to your FAQ will highlight some information that should be covered by your answer.
>>>>>>> d0b7807ce (add faq contribution guide)

## 5. Format your answer with markdown

If you are not familiar with markdown, check out [Github's guide for markdown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

You can refer to a completed FAQ file to get an idea of how to include links 

## 6. Make a Pull Request with the completed FAQ file

If you are not familiar with using Git/Github, check out this guide - [Intro to Git and Github](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

<<<<<<< HEAD
Change the status of the FAQ on the Project Board to `For Review`

=======
>>>>>>> d0b7807ce (add faq contribution guide)

