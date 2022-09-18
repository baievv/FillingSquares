
const createTable=(tSize, trSize)=> {
  let rows = [];
  for (let i = 0; i < tSize; i++) {
    let rowID = `row${i}`;
    let cell = [];

    for (let idx = 0; idx < tSize; idx++) {
      let cellID = `cell${i}-${idx}`;
      cell.push(<td key={cellID} id={cellID} style={{backgroundColor:'white'}}></td>);
    }

    rows.push(
      <tr key={i} id={rowID} style={trSize}>
        {cell}
      </tr>
    );
  }
  return rows;
}
export {createTable};
