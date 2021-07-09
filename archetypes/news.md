---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
url : "/news/{{ replace .Name "-" " " | title }}"
layout: announcement
background: "images/orientation2018-min.jpeg"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
hideBanner: false
---
