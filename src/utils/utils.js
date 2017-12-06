
const compareId = (idOne, idTwo) => (idOne === idTwo);

const sortByName = (a, b) => (a.nome > b.nome ? 1 : -1);

const urlToId = url => parseInt(url.split('/').reverse()[1], 10);

export { compareId, sortByName, urlToId };
