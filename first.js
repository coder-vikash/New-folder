//This is an example of callback hell in JavaScript
function getData(dataId, nextDataid) {
  setTimeout(() => {
    console.log(`Fetching data for ID: ${dataId}`);
    if (nextDataid) {
      nextDataid();
    }
  }, 2000);
}
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
