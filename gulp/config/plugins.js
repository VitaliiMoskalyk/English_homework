import replace from "gulp-replace"; //search and replace
import plumber from "gulp-plumber"; //errors
import notify from "gulp-notify"; //notification
import browsersync from "browser-sync"; //local server
import newer from "gulp-newer"; // update check
import ifPlugin from "gulp-if";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
