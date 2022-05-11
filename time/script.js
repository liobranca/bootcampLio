function timer(segundos) {
  let i = 0;
  let s = 0;
  let m = 0;
  let h = 0;

  while (i < segundos) {
    s++;
    i++;
    if (s == 60) {
      m++;
      s = 0;
      if (m == 60) {
        h++;
        m = 0;
      }
    }
  }
  return console.log(h+" horas y "+m+" minutos con "+s+" segundos")
}
