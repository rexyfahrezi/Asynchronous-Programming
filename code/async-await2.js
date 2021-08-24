async function hello() {
  return greeting = await Promise.resolve("Hello");
};

hello().then((value) => console.log(value));