function changeTable(table, cellID) {
  let arr = cellID.split("-");
  let x = +arr[0].slice(4);
  let y = +arr[1];
  table[x][y].color == "white"
    ? (table[x][y].color = "blue")
    : (table[x][y].color = "white");
  return [...table];
}

export { changeTable };
