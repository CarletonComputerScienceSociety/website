---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
url : "/events/{{ replace .Name "-" " " | title }}"
---
