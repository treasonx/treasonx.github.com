---
layout: post
title: Grunt Markdown
image: /img/grunt.png
tldr: Generate html from markdown using GruntJS
date: 2012-11-15
---
##Markdown Preview using Grunt
<img src="/img/grunt.png" width="200" style="float:left;">
I love [markdown](http://daringfireball.net/projects/markdown/) especially
[GFM](http://github.github.com/github-flavored-markdown/). It allows me to
quickly captures notes and ideas which I can then later compile to HTML and
share with people. I do almost all of my text editing in [vim](http://www.vim.org/) 
so markdown is perfect for producing great looking articles and content in my 
editor of choice! 

While editing markdown I find it helpful to review the changes you have made in
a preview of what the final version will look like. There are various scripts
and apps that help with markdown preview. But nothing that really seemed to fit 
my workflow and skillset. I figured I would take a look at some of the tools I 
use to automate my development workflow and see if they can be applied to my 
markdown workflow. A couple of requirements I had for the system. It had to 
be JavaScript based! JavaScript is my language of choice so I wanted something 
that would be easy for me to modify and extend. I also wanted it to be portable 
across all of my machines. I like to keep my environment light so I can become 
productive on a new machine as quickly as possible. 

###What Do You Mean Live Reload?
<iframe style="margin: 0 auto;" width="640" height="480" src="http://www.youtube.com/embed/fc45xgh45dM" frameborder="0" allowfullscreen></iframe>

###What this article is about
This article is about how I used [Grunt](http://www.gruntjs.com) and a couple of 
Grunt tasks to automate my markdown workflow. This article is not intended to 
be a tutorial on how to use Grunt! If you are interested in learning more 
about Grunt checkout the [website](http://www.gruntjs.com).

###Prerequisites
You will need to have NodeJS and Grunt installed on your machine. Once you have NodeJS and Grunt installed there are 2 [NPM](http://www.npmjs.org) modules which we 
will need to build our markdown live preview task. Install the modules in the
root of your home directory with the following commands.

```
npm install grunt-reload
npm install grunt-markdown
```

####[grunt-reload](https://github.com/webxl/grunt-reload)
Grunt reload tells the browser to refresh itself when a grunt watch task 
notices there has been a change to the watched files. There are various ways you 
can get the reload behavior in your browser. I have chosen to use a chrome plugin 
[live reload](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)

####[grunt-markdown](https://www.github.com/treasonx/grunt-markdown)
I developed this grunt task to generate documentation from markdown files. It
supports GFM with code highlighting. It is critical for my markdown task to
produce markdown with properly formatted code blocks. 

###Grunt File
We will need to define a gruntfile. This gruntfile will define the tasks we will 
use as well as combinations of tasks which produce the desired behavior.

```
touch grunt.js
```

Open the `grunt.js` file in your editor of choice and enter the following.

```javascript

module.exports = function (grunt) {
  'use strict';
  
  //initialize grunt with config
  grunt.initConfig({
    //configure grunt-reload
    reload: {
      port: 35729, // LR default
      liveReload: {},
      proxy: {
        host: 'localhost'
      }
    },
    markdown: {
      //configure grunt-markdown with a notes config
      notes: {
        //raw markdown files
        files: ['Dropbox/Notes/*.md'],
        //which html template to wrap the compiled markdown
        template: 'Dropbox/HTMLNotes/assets/blog.html',
        //compiled HTML goes here
        dest: 'Dropbox/HTMLNotes',
        options: {
          //we always want GFM
          gfm: true,
          //will try to use code block markup to highlight
          highlight: 'manual'
        }
      }
    },
    server: {
      port: 8000,
      base: '~/Dropbox/HTMLNotes'
    },
    watch: {
      //Watch the notes and if they change reload
      notes: {
        files: ['Dropbox/Notes/*.md'],
        tasks: 'markdown:notes reload'
      }
    }
  });

  //Load the extra tasks from our npm modules
  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-reload');

  //Register a task which will combine tasks
  grunt.registerTask('previewNotes', 'When mardown notes change reload preview',
    'markdown:notes server:notes reload watch:notes');

};

```

Save the file and then enter the following command. 

```
grunt previewNotes
```

Open your browser and checkout the HTML goodness! Make changes to your
markdown, save and watch the browser automatically reload!

###Conclusion
Grunt is awesome for the automation of common tasks during JavaScript
application development. The Grunt framework provides a simple way to define
tasks which can be chained together to do more complex tasks. This framework is
also useful for automating common tasks outside of application development.
This grunt live preview is just one example of how you can leverage Grunt to
make life a little easier! 


