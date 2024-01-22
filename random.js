const diplay = (result) => {
  document.getElementById("result").innerHTML("result");
};
const findnewnumber = (callbackfn) => {
  const result = Math.floor(math.random() * 16 + 1);
  callbackfn(result);
};
const newdisplay = () => {
  console.log("display");
};
