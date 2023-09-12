function doYouLoveMe(name) {
  return new Promise(function (resolve, reject) {
    console.log("dejame pensarlo...");

    setTimeout(() => {
      if (name === "Mauro") {
        resolve("yes");
      } else {
        reject("Ay no, perdón");
      }
    }, 1000);
  });
}

/*const lovePromise = doYouLoveMe('Tito');
  lovePromise.then(response => console.log(response))
  .catch(error => console.log(error))*/

const lovePromise2 = async () => {
  let response = await doYouLoveMe("juancito");
  return response;
};
