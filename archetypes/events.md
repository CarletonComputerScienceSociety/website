---
title: "{{ replace .Name "-" " " | title }}"
display_title: "This title will be shown in the display card"
date: {{ .Date }}
poster: "images/poster2.jpeg"
poster_cover: "contain"
poster_position: "center"
short_description: "ADD YOUR DESCRIPTION HERE."
start_time: "7:00 - 8:00 PM EST"
location: "ENTER LOCATION HERE."
location_link: "ENTER LOCATION LINK HERE."
background: "images/orientation2018-min.jpeg"
url : "/events/{{ replace .Name "-" " " | title }}"
layout: event
draft: true
hideBanner: false
---
