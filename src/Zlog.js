'use strict';
require('colors');

/**
 *
 * Class Zlog
 */
class Zlog {
  /**
   * default console.log
   */
  log(text) {
    console.log(text);
  }

  /**
   * success log
   */
  success(text) {
    console.log(`${text}`.green);
  }

  /**
   * warning log
   */
  warning(text) {
    console.log(`${text}`.yellow);
  }

  /**
   * info log
   */
  info(text) {
    console.log(`${text}`.cyan);
  }

  /**
   * error log
   */
  error(text) {
    console.log(`${text}`.red);
  }

  /**
   * force log
   */
  force(text) {
    console.log(`${text}`.magenta);
  }
}

/**
 *
 * @type {Zlog}
 */
module.exports = new Zlog();
