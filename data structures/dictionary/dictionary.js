const collection = Symbol('Dictionary.Collection');

/**
 * An associative array, map, symbol table, or dictionary 
 * is an abstract data type composed of a collection of (key, value) pairs, 
 * such that each possible key appears at most once in the collection. 
 * 
 * Note that a dictionary is also known as a map.
 * 
 * @description Dictionary implementation in JavaScript with Object.
 */
class Dictionary {
  /**
   * @description Create a dictionary.
   */
  constructor() {
    this[collection] = {};
  }

  /**
   * @description Checks if dictionary is empty.
   * 
   * @returns {Boolean} false if the dictionary is empty or true if not.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * @description Returns the length of the dictionary.
   * 
   * @returns {Number} number of pairs in the dictionary.
   */
  length() {
    return this.keys().length;
  }

  /**
   * @description Gets the element with the input key.
   * 
   * @param {*} key 
   * @returns {*} value associated with the specified key.
   */
  get(key) {
    return this[collection][key];
  }

  /**
   * @description Puts the key-value pair in the dictionary.
   * 
   * @param {*} key 
   * @param {*} value 
   */
  put(key, value) {
    this[collection][key] = value;
  }

  /**
   * @description Removes the given key from the dictionary.
   * 
   * @param {*} key 
   */
  remove(key) {
    delete this[collection][key];
  }

  /**
   * @description Checks if the key is present in the dictionary.
   * 
   * @param {*} key 
   * @returns {Boolean} true if the passed key is in the dictionary, otherwise - false
   */
  hasKey(key) {
    return Object.prototype.hasOwnProperty.call(this[collection], key);
  }

  /**
   * @description Removes all key-value pairs from the dictionary
   */
  clear() {
    for (const key in this[collection]) {
      this.hasKey(key) && (delete this[collection][key]);
    }
  }

  /**
   * @description Returns all keys as an array.
   * 
   * @returns {*[]} an array of dictionary keys.
   */
  keys() {
    return Object.keys(this[collection]);
  }

  /**
   * @description Returns all values as an array.
   * 
   * @returns {*[]} an array of dictionary values.
   */
  values() {
    return Object.values(this[collection]);
  }

  /**
   * @description Returns all key-value pairs as an array.
   * 
   * @returns {*[]} an array of key-value pairs.
   */
  entries() {
    return Object.entries(this[collection]);
  }

  *[Symbol.iterator]() {
    for (const entry of this.entries()) {
      yield entry;
    }
  }
};