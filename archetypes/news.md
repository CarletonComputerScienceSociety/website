---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
url : "/news/{{ replace .Name "-" " " | title }}"
layout: announcement
background: "images/orientation2018-min.jpeg"
hideBanner: false
---
