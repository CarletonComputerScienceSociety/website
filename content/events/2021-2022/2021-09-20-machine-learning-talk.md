---
display_title: "Inferring the Algorithms Used by Different Processes Using Machine Learning"
title: "Inferring the Algorithms Used by Different Processes Using Machine Learning"
date: 2021-09-20T00:00:00Z
draft: false
layout: event
poster: "images/event_posters/2021-2022/jason_talk.jpg"
poster_cover: "contain"
poster_position: "center"
short_description: "Some natural and human-engineered processes exhibit patterns that suggest an underlying algorithm."
start_time: "6:00 - 7:00 PM EDT"
location: "Link Coming Soon"
location_link: "https://carleton-ca.zoom.us/j/99972831487"
background: "images/orientation2018-min.jpeg"
publishdate: 2021-01-01
url: "events/inferring-the-algorithms-used-by-different-processes"
tags:
- talks
---

## Abstract:

Some natural and human-engineered processes exhibit patterns that suggest an underlying algorithm. For natural processes, this could be thought of as the biochemical processes dictated by genes or other natural forces. For human-engineered processes, such algorithms represent either memetic thought within a culture or the physical limitations and requirements for human use. This research has examined inferring the algorithms used by such processes from data observed over time. For example, taking a sequence of photos of a plant as it grows can be used to infer the algorithm used by the plant to grow.

One technique to describe such algorithms is Lindenmayer systems (L-systems), which are formal grammar systems. L-systems consist of a set of rewriting rules. Each rewriting rule is comprised of a symbol to replace (predecessor), a replacement string (successor), and an optional condition that is necessary for replacement. Starting with an initial string, every symbol in the string is replaced in parallel in accordance with the conditions on the rewriting rules, to produce a new string. The replacement process iterates as needed to produce a sequence of strings. There are different types of L-systems, which allow for different types of conditions, and methods of selecting the rules to apply. Some symbols of the alphabet can be interpreted as instructions for simulation software towards process modelling, where each string describes another step of the simulated process.

More recently relational growth grammars (RGG) have been proposed as an improvement over L-systems since they can describe processes with a global context, while L-system can only (easily) describe a local context. Hence, while an L-system can be suitable for modelling a plant, an RGG can more easily describe a field of plants as plant growth is affected by nearby plants due to competition for resources such as space.

This presentation discusses the work on inferring L-systems and RGGs using artificial intelligence techniques. Additionally, some practical applications will be presented such as plant modelling and neural activity to demonstrate the widespread potential utility of this research.

## About Jason: 

Dr. Jason Bernard is a postdoctoral fellow at McMaster University, a postdoctoral affiliate at the Vector Institute for Artificial Intelligence, and a research assistant at Athabasca University. He received his Ph.D. from the University of Saskatchewan, and M.Sc from Athabasca University. He has received several awards to support his research on using machine learning for model inference problems and educational technology. Most recently he was awarded the NSERC Postdoctoral Fellowship to research using machine learning techniques to more easily identify neurological disease and injury. He has published 15 papers with several other papers currently under review. His work on L-system inference has been described as the "holy grail of model inference". He has previously been invited to present his research at the Salk Institute, Athabasca University, McMaster University, and has an upcoming presentation at the University of Saskatchewan. He is a member of the program committee for the European Conference on Technology Enhanced Learning, a guest editor for an upcoming special issue of Anatomical Sciences Education, and a reviewer for numerous journals and conferences.