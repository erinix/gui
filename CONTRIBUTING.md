# Contributing to the FreeNAS Corral GUI

FreeNAS Corral is a ground-up rewrite of FreeNAS, and we're looking for
contributors who are prepared to work with an entirely new code base.
Our dev environment is designed to make iterating quick and easy.

## Prerequisites

1. You will need a reasonably up-to-date FreeNAS Corral instance running, either in a VM or on a physical machine:
  * Go to http://download.freenas.org/Corral/latest/x64 and grab the ISO installation image.
  * You will need at least 8GB of memory on the machine and at least one boot device (USB stick or virtual disk), 16GB or larger.

2. Once you have FreeNAS Corral installed, you can use the built-in updater to keep it up to date
  * We release updates on the FreeNAS-Corral-Nightlies update "train" and you can stay as up to date as you wish.
  * Use _System → Boot Volume UI_ (or the _boot_ command if you are restricted to the CLI) to roll backwards as necessary from any bad updates (it sometimes happens, but updates can also be easily rolled back so it's not a show-stopper).

3. Now that you have FreeNAS Corral installed and up-to-date
  * You can use the UI directly from the installation or, as described below, run a copy of the GUI locally on your development machine, pointing at the remote FreeNAS Corral server.  This is the preferred method of doing UI development, since you can use the very latest UI sources before they're actually checked into the master branch and incorporated into a build.

## Getting Started

FreeNAS Corral GUI development is currently supported on FreeBSD, Mac OS X, and some
Linux distributions. Windows users might be able to get it working, but it's not
and will not be an officially supported platform for development.

If you already have node.js installed and the repo checked out, great! Skip to
"Using the FreeNAS Corral Development Environment" below.

Otherwise, to begin developing for the FreeNAS Corral GUI on one of these platforms,
install node.js.

For Mac OS X, installing the package from nodejs.org should suffice.
For FreeBSD, run `sudo pkg install npm`.

## Using the FreeNAS Corral Development Environment

To make sure you have all the necessary global dev dependencies for developing
the FreeNAS Corral GUI, run:

    npm install

from the root of where you cloned the GUI repo first.

Once you have the environment bootstrapped, just for now do the following:

    1. npm run-script serve &
       This will start the stand-alone web server so you can connect your web browser to localhost:3000 (see next step)
    2. Add `#?host=<MIDDLEWARE_HOSTNAME>:<MIDDLEWARE_PORT>` to the URL gulp gives you, e.g. `http://localhost:3000/#?host=freenas.local`

In the example above, you have obviously already installed a copy of FreeNAS Corral on a machine called "freenas.local", which is the default mDNS name that FreeNAS gives itself - edit that to suit your actual configuration as necessary.

If you don't have a FreeNAS Corral instance already running, go to http://download.freenas.org/Corral/MASTER/ for the latest up-to-date version, grab the ISO out of it, and install it on a VM or spare machine somewhere.

## Editing CSS in FreeNAS Corral

### This is required to edit css files!

FreeNAS Corral Development environment uses [PostCSS](https://github.com/postcss/postcss) with [CSSNext](http://cssnext.io/features/). 

Make all css changes to documents labeled `_nameOfFile.css` These files get compiled by PostCSS and create a minified version `nameOfFile.css` in which the program will use.

Upcoming: more explanation on `_config.css`, [blue-shark](https://github.com/freenas/blue-shark/), and plugins used with PostCSS

## How to work on FreeNAS

Upcoming: Docs walking through the process of adding a top level feature.

## How to Coordinate with the FreeNAS Team

The FreeNAS Corral GUI team is *always* looking for contributors who can
provide a concrete mockup for a given feature, work with us to refine the
mockup, and then collaborate on its implementation. To get started, open an
issue containing a mockup of the feature you're propsing. We accept beautiful,
detailed designs in any mockup or design software you use. We also accept
cellphone pictures of whiteboards and cocktail napkins. All we need is
something clear enough to review.

The FreeNAS team at iXsystems has regular meetings to assess and provide
feedback on mockups. Once a mockup is approved (probably a pretty informal
process after the first look) the contributor should be prepared to implement
that feature according to that mockup without substantial further feedback. This
should be done in a feature branch for those with commit access and in a fork
otherwise.

Once a feature is ready, send a pull request or merge your changes. Don't send
a pull request or merge your changes until you're absolutely sure your feature
is ready, because it will be summarily rejected if it's broken, substantially
different from the mockup, or negatively impacts any other part of the GUI.
