#!/bin/sh
git merge develop
ng build --base-href /geosearch/
cp dist/geosearch/* ./
git add .
git commit -m "rebuild"
git push origin master

