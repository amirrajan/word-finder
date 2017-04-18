## Word Finder (MIT License)

I took every english word (over 200k words) and built a little NodeJS
app that will help you find words that contain specific characters.

Additionally, here are instructions to deploy this app to Heroku.

## How to Use

### The underscore

Type a word into the text box with the following pattern:

    he__o

And you'll get words such as:

    hello
    helio

### The question mark

This character is great for games like What's the Phrase (a knock off
of Wheel of Fortune)

Type a word into the text box with the following pattern:

    st???

and you'll get words such as:

    stack
    stade
    staff
    stage
    stagy

but you wont get words like

    start

because the `t` would already be visible (in What's the Phrase), and
you would have typed:

    st??t

## Instructions for running

Go to http://nodejs.org and install NodeJS

Then clone this repo:

    git clone https://github.com/amirrajan/word-finder.git

And `cd` into the directory (all instructions below assume you are in
the `word-finder` directory:

    cd word-finder

## Run Locally

Install all the dependencies:

    npm install (you may need to prefix this with sudo if you're on Mac)

Install `mocha`:

    npm install mocha -g

To run tests, type:

    mocha --compilers js:babel-register

If you want tests to execute every time you change a file:

    brew install fswatch

In another window run

    fswatch test/search_spec.js | xargs -n1 -I{} mocha --compilers js:babel-register`

Run the app:

    node start.js

Consider using the package `nodemon` if you'd like. It'll auto start your server
every time you save.

    npm install nodemon -g
    nodemon start.js

Then navigate to `http://localhost:3000`

## Signing up, and deploying to Heroku

### Documentation

From heroku.com, click Documentation, then click the Getting Started
button, then click Node.js from the list of options on the
left...which will take you here:
https://devcenter.heroku.com/articles/nodejs

Install Heroku toolbelt from here: https://toolbelt.heroku.com/

Sign up via the website (no credit card required).

Login using the command line tool:

    heroku login

Create your heroku app:

    heroku create

Git deploy your app:

    git push heroku master

Open the app (same as opening it in the browser):

    heroku open

And your app should be up on Heroku.
