#!/usr/bin/env bash

if [[ "$TRAVIS_BRANCH" == "master" && "$TRAVIS_PULL_REQUEST" == "false" ]]; then
    FIREBASE_PROJECT="$FIREBASE_MASTER"
else
    FIREBASE_PROJECT="$FIREBASE_STAGING"
fi

echo "Deploying to $FIREBASE_PROJECT"

firebase --project $FIREBASE_PROJECT --token $FIREBASE_TOKEN deploy
