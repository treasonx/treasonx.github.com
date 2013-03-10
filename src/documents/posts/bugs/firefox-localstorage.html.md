---
layout: post
title: Firefox LocalStorage Bug
image: /img/grunt.png
tldr: nasty localStorage bug in firefox
date: 2012-05-08
---
There is a small bug in firefox which may look like a data loss issue when
using localStorage. I have filed a [bug 746272](https://bugzilla.mozilla.org/show_bug.cgi?id=746272) and they have fixed the issue but
this will be with us as web developers for a long time.
The bug shows up if you do the following. If your first interaction with
localStorage is a removeItem you will not get the proper length from the
localStorage object. It will seem as though all of the items in localStorage
have been deleted. This is not the case, the browser just hasn't updated its
cache with the contents of localStoage.

###Work Around

The workaround for now is to get the length of the localStorage object before
any other operation with localStorage so that it works as expected.
This bug was tricky to isolate in my web app and it looked like I was losing
user data when the page was reloaded. I boiled it down to a simple test case
and the folks at mozilla had it fixed right away.
