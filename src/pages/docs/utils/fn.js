const mergeObjects = (main, secondary) => {
  let mapped = [];
  let result = [...main];
  secondary.forEach((element, index) => {
    let sIndex = main.map((m) => m.name).indexOf(element.name);
    if (sIndex > -1) {
      mapped.push({ m: index, s: sIndex });
    }
  });

  mapped.forEach((m) => {
    result[m.s] = secondary[m.m];
  });

  return result;
};

export { mergeObjects };
