function changeTable(table, cellID) {
  let arr = cellID.split("-");
  let x=+(arr[0].slice(4));
  let y=+(arr[1]);
  console.log('Ячейка',x,'-',y);
  console.log('Was', table[x][y].color);
  (table[x][y].color == "white")
    ? (table[x][y].color = "blue")
    : (table[x][y].color = "white");
  console.log("New", table[x][y].color);  
  return [...table];
}

export { changeTable };
