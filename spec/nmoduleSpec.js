const nmodule = require('../lib/nmodule');
const url = require('url');

describe('nmodule', () => {
  'use strict';
  
  describe('.parse()', () => {
    describe('happy path', () => {
      const URI = 'http://www.mystation.com:8080/module/bajaux/rc/Widget.js',
        parsed = nmodule.parse(URI);
      
      it('includes module name', () => {
        expect(parsed.moduleName).toBe('bajaux');
      });
      
      it('includes ord', () => {
        expect(parsed.ord).toBe('module://bajaux/rc/Widget.js');
      });
      
      it('includes url', () => {
        expect(parsed.url).toEqual(url.parse(URI));
      });
    });
    
    it('throws if URI does not start with /module/', () => {
      expect(() => nmodule.parse('http://www.mystation.com/nodule/bajaux/rc/Widget.js'))
        .toThrowError('pathname does not start with /module/');
    });
    
    it('throws if URI not a string', () => {
      // noinspection JSCheckFunctionSignatures
      expect(() => nmodule.parse({})).toThrowError();
    });
  });
});