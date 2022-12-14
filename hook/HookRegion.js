#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const plist = require('plist');


module.exports = context => {
  const ConfigParser = context.requireCordovaModule('cordova-common').ConfigParser;

  return new Promise((resolve, reject) => {
    let config = new ConfigParser(path.resolve(context.opts.projectRoot, 'config.xml'));
    let name = config.name();
    let plistPath = path.join(context.opts.projectRoot, 'platforms', 'ios', name, `${name}-Info.plist`);

    fs.readFile(plistPath, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }
      let infoPlist = plist.parse(data);
      infoPlist.CFBundleDevelopmentRegion = 'Portuguese';
      infoPlist.CFBundleLocalizations = 'pt_PT';
      fs.writeFile(plistPath, plist.build(infoPlist), err => {
        if (err) {
          return reject();
        }
        resolve();
      });
    });
  });
};
