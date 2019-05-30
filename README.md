# composer-workbench

[![CircleCI](https://circleci.com/gh/traverus/composer-workbench.svg?style=shield)](https://circleci.com/gh/traverus/composer-workbench)
[![Dashboard composer-workbench](https://img.shields.io/badge/dashboard-composer_workbench-yellow.svg)](https://dashboard.pantheon.io/sites/b6f371ff-d036-4bf6-a57b-6f2c73763add#dev/code)
[![Dev Site composer-workbench](https://img.shields.io/badge/site-composer_workbench-blue.svg)](http://dev-composer-workbench.pantheonsite.io/)]


# Getting Started On Your Local

Welcome to this project! These instructions are for getting this specific project working on your local.

We are assuming that you have previously completed [all these steps](#set-up-instrucitons)

## Clone this repository
Clone the repo, dawg!

## Get the Local Server Running with Lando
Run: `$ lando start`

*The above command will compile all the composer dependencies for you on your local*
in your command prompt, in the root of the repository

If all is successful, it should spit out a number of urls that look similar to this:
```
Waiting until database service is ready...

BOOMSHAKALAKA!!!

Your app has started up correctly.
Here are some vitals:

 NAME                  composer-workbench                                                 
 LOCATION              /var/www/composer-workbench                                        
 SERVICES              appserver_nginx, appserver, database, cache, edge, edge_ssl, index 
 APPSERVER_NGINX URLS  https://localhost:32772                                            
                       http://localhost:32773                                             
 EDGE URLS             http://localhost:32775                                             
                       http://composer-workbench.lndo.site:8000                           
                       https://composer-workbench.lndo.site                               
 EDGE_SSL URLS         https://localhost:32776                                            
```
You want the one that ends with .lndo.site (https://composer-workbench.lndo.site in this example). Some of these other URLs might be useful if you're having caching issues.

*Dev away!*

# Create a new site
## Prerequisite -- Install Terminus Build Tools Plugin
https://github.com/pantheon-systems/terminus-build-tools-plugin#installing-build-tools-2x

## Initialize Site Repository
- Clone the Taoti composer upstream to your local. It should be located at https://github.com/Taoti/pantheon-upstream-d8-composer . Use the clone command to name your new site to match the variable your about to use for \[NEW-MACHINE-SITE-NAME\] below. (e.x. `git clone https://github.com/Taoti/pantheon-upstream-d8-composer.git my-new-site` ). 'my-new-site' will place this in a directory matching your new site name
- Remove the git origin remote, this is important to do because the next command we run is going to establish the git remote and do everything else for us. `$ git remote remove origin`
- Run the following command to get everything started with GitHub, CircleCI and Pantheon:
Please note that "!" (exclamation points) don't work in the `--admin-password field`. `\[NEW-SITE-MACHINE-NAME\]` should be lower case, hypenated and not contain symbols
```
$ terminus build:project:create --team="Taoti Creative" --admin-email="taotiadmin@taoti.com" --admin-password="[REDACTED]" --ci=circleci --git=github ./ [NEW-SITE-MACHINE-NAME] --preserve-local-repository
```

### Transition github repository created on your user to Taoti
When you use this method, the github repository that gets set up will be owned by your github user. We need to transfer it to Taoti to allow other developers to work on it. https://help.github.com/en/articles/transferring-a-repository

TLDR: Go to github repo > settings > (scroll to bottom) Transfer Repository

# Set Up Instrucitons
First Time Installation Instructions
## Install Composer
Documentation:
https://getcomposer.org/download/

TLDR:
```
$ php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
$ php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
$ php composer-setup.php
$ php -r "unlink('composer-setup.php');"
```
## Install terminus
Documentation:
https://pantheon.io/docs/terminus/install/

TLDR (linux/MAC OS, Windows please read above documentation):
```
curl -O https://raw.githubusercontent.com/pantheon-systems/terminus-installer/master/builds/installer.phar && php installer.phar install
```
## Getting Lando set up

### Install Docker

If you don't know what you're doing with docker, and you've tinkered with it (have it already installed locally), I HIGHLY SUGGEST completely uninstalling it before moving on.
At the very least you should be able to run `$ docker --help` and see meaningful output.

See Documentation here:
https://docs.docker.com/install/
Select the OS applicable to your local environment

### Install Lando
https://docs.devwithlando.io/installation/system-requirements.html
Again, choose the OS that is applicable for your local environment
This guide is tested with "v3.0.0-rc.16" and works but latest stable release should be dandy.

### Trust the lndo.site Ceritificate Authority
https://docs.devwithlando.io/config/security.html
