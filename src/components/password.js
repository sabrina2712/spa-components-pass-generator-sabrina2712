import React, { Component } from "react";

class Password extends Component {
  constructor(props) {
    super(props);
    this.bucketArr = [];
    this.passLength = 12;
    this.includeBothCase = false;
    this.includeSpecialChar = false;
  }
  passGenerator() {
    const buckets = [
      "abcdefghijklmnopqrstuvwxyz",
      "123456789",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "@!-§$%&()?#+",
    ];

    const bucketArr = [buckets[0], buckets[1]];

    if (this.includeBothCase === true) {
      bucketArr.push(buckets[2]);
    }
    if (this.includeSpecialChar === true) {
      bucketArr.push(buckets[3]);
    }

    let finalArr = [];
    for (let index = 0; index < this.passLength; index++) {
      let bi = index % bucketArr.length;
      console.log(bi);
      const bucket = bucketArr[bi];
      let randomIndex = Math.floor(Math.random() * Math.floor(bucket.length));
      finalArr.push(bucket.charAt(randomIndex));
    }

    return this.shuffle(finalArr);
  }
  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   * @param  {Array} array The array to shuffle
   * @return {String}      The first item in the shuffled array
   */

  shuffle = (array) => {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <div>
        <h2>Password</h2>
        {this.passGenerator()}
      </div>
    );
  }
}
export default Password;
