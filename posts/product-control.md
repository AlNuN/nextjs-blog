---
title: 'Product Control'
date: '2019-05-10'
categories: ['portfolio', 'front-end']
photo: ['app login screen', 'app screen that shows registered products', 'app page where you can make reports', 'user info page']
description: 'Desktop app created to control the products stock of a municipal health center, specialized in orthodontics'
---

This was one of my first JavaScript projects. The goal was to create an app to control
stock of products in a municipal health center in my city, since my mother in law was 
having some trouble to manage the stock with an excel table.

The project uses Electron as the main technology. It is a framework that allows the development
of GUI applications using web technologies. I've made heavy use of jquery and bootstrap.

It also uses an JavaScript database similar to MongoDB called [NeDB](https://github.com/louischatriot/nedb). To understand the logic I did the [MongoDB basic course](https://university.mongodb.com/courses/M001/about?jmp=M102ap) at the time. I wanted a JavaScript db to make the installation process easier and reduce external dependencies to the project.

I learned a lot making this project:
- Electron is best suited for applications that pulls content from a server.
- Having to rely so much in bootstrap made me want to learn better CSS.
- In apps with lots of state management, DOM and UI changes using only vanilla JavaScript and JQuery produces bloaty repetitive code.

