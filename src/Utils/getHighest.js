const getHighest = (values) => {
    let temp = 0;
    for (let x = 0; x < values.length; x++) {
      if (values[x] > temp) {
        temp = values[x]
      }
    }
    return temp;
}

export default getHighest;