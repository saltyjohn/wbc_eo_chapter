const sortTableData = (text) => {
  let masterContacts = {};
  //  parse html text
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(text, 'text/html');
  // query select from parsed html text
  const tables = htmlDoc.querySelectorAll('table');

  // table.children shows <thead> and <tbody>,
  tables.forEach((table, iTable) => {
    let contactScheme = [];
    // selecting [1] focuses on <tbody>,
    // trows contains innerhtml, ei: headers and cells
    const tbody = table.children[1]
    const trows = tbody.children
    // build table objects
    const currentTable = `table_${iTable}`
    masterContacts[currentTable] = {}

    // split htmlCollection into array
    Object.values(trows).forEach((row, iRow) => {
      // build row objects
      const currentRow = `row_${iRow - 1}`
      masterContacts[currentTable][currentRow] = {}

      // iteration 0 === table column labels
      if (iRow === 0) {
        // htmlCollection to array again, iterate through cells
        Object.values(row.children).forEach((cell, iCell) => {
          // iteration 0 === shim from Google Sheet
          if (iCell !== 0) {
            const cellData = cell.innerText
            contactScheme.push(cellData);
          }
        })
      }
      // build contacts object
      else {
        Object.values(row.children).forEach((cell, iCell) => {
          if (iCell !== 0) {
            const cellData = cell.innerText;
            // input data with key = scheme, value = innertext
            masterContacts[currentTable][currentRow][contactScheme[iCell - 1]] = cellData;
          }
        })
      }
    })
  })
  return masterContacts;
}

export default sortTableData;
