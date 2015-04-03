'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([{ name: 'aviary-editor', target: '3.1.0'}]);
  }
}
