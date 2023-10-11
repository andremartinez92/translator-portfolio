// From https://stackoverflow.com/a/69196391
export const calculateStrokeShadows = (pixels: number) => {
  const color = '#FFF'; /* white outline */
  const r = pixels; /* width of outline in pixels */
  const n = Math.ceil(2 * Math.PI * r); /* number of shadows */
  let str = '';
  for (
    let i = 0;
    i < n;
    i++ /* append shadows in n evenly distributed directions */
  ) {
    const theta = (2 * Math.PI * i) / n;
    str +=
      r * Math.cos(theta) +
      'px ' +
      r * Math.sin(theta) +
      'px 0 ' +
      color +
      (i == n - 1 ? '' : ',');
  }

  return str;
};
