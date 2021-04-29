---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
url : "/news/{{ replace .Name "-" " " | title }}"
---
