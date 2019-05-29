# Project Name


## Slack Notifications

Add this to your downstream `pantheon.yml` file to enable Slack notifications for test and live deployments:

    workflows:
      deploy:
        after:
            - type: webphp
              description: Post to Slack after deploy
              script: private/scripts/slack_notification.php

Also feel free to adjust your downstream `web/private/scripts/slack_notification.php` as needed. 

By default, notifications will be posted to the `#dev` channel. To notify a specific channel instead, just create a new incoming webhook and update your downstream `secrets.json` with the new webhook URL. For reference, the default incoming webhook is here: https://taoticreative.slack.com/services/245516193509


## Drupal Updates ##

This project does not use composer for Drupal. So, when a Drupal or contrib update is released simply do "drush up", commit & push