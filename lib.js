const statement = (string) => {
  string.length > 32 ? string.slice(0, 32).concat("...") : string;
};
let response = statement("prabin bhandari is a men .he is teaching ");
console.log({ response });
