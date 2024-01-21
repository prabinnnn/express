const randomnumber = (num) => {
  const newrandom = () => {
    const numb = Math.floor(Math.random() * 16 + 1);
    return numb;
  };
  console.log(newrandom(num));
};
randomnumber();
