const promiseExam = (timeout) => {
  return new Promise((resolve, reject) => {
    if (timeout > 5000) return reject("timeout is too long");
    setTimeout(() => {
      resolve("timeout end");
    }, timeout);
  });
};
async function asyncTest() {
  try {
    let result = await promiseExam(1000);
    console.log(1, result);
    result = await promiseExam(500);
    console.log(2, result);
    result = await promiseExam(50000);
    console.log(3);
  } catch (error) {
    console.log(error);
  }
}
asyncTest();
