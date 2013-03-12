---
layout: post
title: 30 days with the Pixel
image: /img/pixel.png
tldr: Can a developer be productive with ChromeOS?
date: 2013-3-10
---

##Chromebook Pixel

I have had a facination with ChromeOS since I first saw the CR48 a few years ago. The idea of having a light weight OS and portable environment is very compelling! Over the years I have cobbled together a cloudbased environment using serveral services like Dropbox and Github. I have tuned my environment so that when I setup a new work station all I need to do is clone my dot files and sync my dropbox folder and I am ready to go! At most without syncing all of dropbox this takes about 30 minutes for me to become productive on a new machine. With ChromeOS you are forced to be even more portable and cloud based which is exactly what draws me to it. 

###My Computing History

A little bit about my computing history. For years I have always looked ahead for my next platform jump. I spent new years eve 2000 setting up mandrill linux on my computer and banging my head against the wall trying to get my win modem working on linux! I then went on to use FedoraCore for about 4 years as my primary desktop environment. My desktop of choice was KDE at the time. I did run VMWare for a few must have windows apps, but I was mostly happy with linux. Then Apple made the jump to x86! Finally I could take a serious look at the OSX and make it my own. I purchased my first macbook pro and I was hooked! It had a great UI and the power of linux at my finger tips! It was a dream come true! I am still using OSX as my primary OS today, but I have many concerns about where Apple is headed with its desktop OS. It seems like they are starting to integrate their services into the OS at a deep level (iCloud, Facebook/Twitter integration). I am sorry but Apple's cloud is a piece of crap and its too opaque for me to have any faith in! Also some of the sandboxing that comes with apps from the app store seem just wrong to me as a power user. I am prepared to go back to linux as my primary OS if apple castrates the OS in the future. But there may be other options. Such as ChromeOS, but ChromeOS has one limit that stops me from making the jump completely. It doesnt have a complete linux shell environment. 

I am a developer and all of the tools I rely on live in the shell. I cannot be productive without tmux, vim, git and the likes. I know there are cloudbased alternatives but they are in their infacy and won't be ready for serious development work for years. I need a complete shell, and ChromeOS is missing it!

Then I found out about crouton! Having the ability to install a chrooted shell environment and run it side by side with ChromeOS is the light at the end of the dark depressing tunnel! Finally the power I need to get real work done and still have a slim light OS and not to mention a beautiful laptop!

My day to day computer usage mainly involves two apps. Chrome and the terminal. There are very few native desktop apps that I require to get my work done. So I feel like ChromeOS with crouton will fit the bill. Here are some of the apps I use and what the alternatives are on ChromeOS

###Dropbox -> GoogleDrive

I have had a paid dropbox account for years. I keep almost everything in there besides my git repos. And it keeps me light and portable. I dont keep that much media on my computer, I steam most of my music from Spotify or Google Music. Since I get 3 years of a terabyte of storage on google drive with my pixel I am going to migrate to google drive.

###Chrome Canary -> ????

I normally run Canary site by site with Chrome stable. I use canary from my casual web browsing and stable for development. I dont think this will be possible with the pixel. I will miss canary but its not a deal breaker for me. I'll have to report back on how this works out. 

###Spotify -> Spotify Web Client

I live in spotify! But luckily spotify has a beta web client which I can use. I'll try it out full time and report back about the experience. 

###LimeChat (irc) -> ???

I have found several IRC clients in the chrome store. They all sort of suck. I
would like something with the power of LimeChat but portability of a chrome
app. There are some issues around SSL support for sockets in chrome apps but I
have heard rumors that this can be over come with a NaCL socket library. This
might be a great idea for a future project. 

###Soulver (calculator) -> ???

This is going to take a little research. Although I love Soulver for the mac it
is something I can live without. I can get by with a regular calculator and
speadsheet.

###LaunchBar -> ??

I might not need a replacement for LaunchBar. I will need to play around with
the ChromeOS windows manager a little to see if this is something I will need
or if I can do good enough with the built in keyboard shortcuts. 

##30 days what will mean sucess?

In 30 days how will I be able to tell if the experiment of using the pixel
fulltime was a success? I think if I can successfully install my development
environment and tooling. In order to prove that the installation was successful
and effeicient I will make sure to produce a few following. 

* a NodeJS web app
* a Go Web app
* a Chrome extension or app
* a presentation prepared and presented from the pixel. 
* blog posts along the way documenting my journey!
* investigate this NaCL stuff :) 

##Conclusion

I have 30 days, we'll see how I feel at the end of the trial. I think I can get by with the Pixel and be plenty productive. But I am also aware I might run into some show stoppers. It'll be fun no matter what a new OS is always a fun thing to explore. At first you try to twist the OS into something that is familiar but as you use it you learn how the OS should be used. I hope to learn how ChromeOS should be used and see if its enough for a developer to be productive using. I think google has a
great opportunity with ChromeOS. Windows has been dead for years, no one has told it yet :) OSX feels like it is being turned into a comsumer electronics device, which is fine for most people but not the developers out there. I know I always have a home with Linux, but it would be nice to have a corporate sponsor who can ensure that things pretty much just work. Again I know linux is pretty good! But I want to explore all of my options! Wish me luck and stay tuned for tutorials rans and me
singing the praises of ChromeOS. No matter what it should be fun!
