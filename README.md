# composer-workbench

[![CircleCI](https://circleci.com/gh/traverus/composer-workbench.svg?style=shield)](https://circleci.com/gh/traverus/composer-workbench)
[![Dashboard composer-workbench](https://img.shields.io/badge/dashboard-composer_workbench-yellow.svg)](https://dashboard.pantheon.io/sites/b6f371ff-d036-4bf6-a57b-6f2c73763add#dev/code)
[![Dev Site composer-workbench](https://img.shields.io/badge/site-composer_workbench-blue.svg)](http://dev-composer-workbench.pantheonsite.io/)

# Set Up Instrucitons - First time installation

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
curl -O https://raw.githubusercontent.com/pantheon-systems/terminus-installer/master/builds/installer.phar && php installer.phar install

## Getting Lando set up

### Install Docker

If you don't know what you're doing with docker, and you've tinkered with it (have it already installed locally), I HIGHLY SUGGEST completely uninstalling it before moving on.
At the very least you should be able to run:
```
$ docker --help```
```
and see meaningful output.

See Documentation here:
https://docs.docker.com/install/
Select the OS applicable to your local environment

### Install Lando
https://docs.devwithlando.io/installation/system-requirements.html
Again, choose the OS that is applicable for your local environment

### Trust the lndo.site Ceritificate Authority
https://docs.devwithlando.io/config/security.html

## Getting Lando Started on your local after above complete

Run:
```
$ lando start
```
in your command prompt, in the root of the repository

IF all is successful, it should spit out a number of urls. You want the one that ends with .lndo.site (no follow on port for :8080). Some of these other URLs might be useful if you're having caching issues.

Dev away!


# Create a new site
Clone the composer upstream to your local

Remove the git origin remote:
```
$ git remote remove origin
```

Run the following command to get everything started with GitHub, CircleCI and Pantheon:
```
$ terminus build:project:create --team="Taoti Creative" --admin-email="taotiadmin@taoti.com" --admin-password="[REDACTED -- note "!" won't work here in the password]" --ci=circleci --git=github ./ composer-workbench --preserve-local-repository
```

## Transition github repository created on your user to Taoti
When you use this method, the github repository that gets set up will be owned by your github user. We need to transfer it to Taoti to allow other developers to work on it.
https://help.github.com/en/articles/transferring-a-repository

TLDR:
Go to github repo > settings > (scroll to bottom) Transfer Repository
