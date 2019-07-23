import React from "react";

class Utils {
  static textNlToBr(text, keyPrefix) {
    return text.split("\n").map(item => {
      {
        const key = keyPrefix + item;
        return (
          <span key={key}>
            {item}
            <br />
          </span>
        );
      }
    });
  }
}

export default Utils;
