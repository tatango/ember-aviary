/* jshint node: true */
'use strict';

module.exports = {
 name: 'ember-aviary',
 contentFor: function(type) {
   if(type === 'body') {
     return '<script type="text/javascript" src="https://dme0ih8comzn4.cloudfront.net/js/feather.js"></script>';
   }
 }
};
