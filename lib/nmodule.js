'use strict';

const url = require('url');

module.exports = {
  /**
   * @param {string} uri
   * @returns {{moduleName: string, ord: string, url: object}}
   */
  parse: uri => {
    const parsedUrl = url.parse(uri),
      { pathname } = parsedUrl,
      split = pathname.split('/').slice(1),
      moduleName = String(split[1]),
      ord = `module://${ moduleName }/${ split.slice(2).join('/') }`;
    
    if (split[0] !== 'module') {
      throw new Error('pathname does not start with /module/');
    }
    
    return {
      moduleName,
      ord,
      url: parsedUrl
    };
  }
  
};