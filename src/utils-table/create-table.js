const createTable = (tSize) => {
  let rows = [];

  for (let i = 0; i < tSize; i++) {
    let cell = [];
    for (let idy = 0; idy < tSize; idy++) {
      let cellID = `cell${i}-${idy}`;
      let elem = { id: cellID, idx: i, idy: idy, color: "white" };
      cell.push(elem);
    }
    rows.push(cell);
  }
  return rows;
};
export { createTable };
