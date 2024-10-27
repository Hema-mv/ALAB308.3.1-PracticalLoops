let cell = '';
let celldata = [];
let rowdata = [];
let firstrow=true
//console.log(celldata[0].toLowerCase)
const csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
for (let i = 0; i < csvData.length; i++) {
    let data = csvData[i];
    if (data === ',') 
    {
     celldata.push(cell);
        cell = '';
    } else if (data === '\n') {
        celldata.push(cell);
        if(firstrow=true)
        {
            // console.log(celldata[0].toLowerCase())
            // celldata=celldata[i].toLowerCase()
            // console.log(celldata[i].toLowerCase)
        }
        first=false;
        rowdata.push(celldata)
        celldata = []
        cell = ''
    } 
    else 
    {
        cell += data;
    }
}
for (let i = 0; i < rowdata.length; i++) 
{ 
    if(rowdata[0][i]!= undefined)
    {
        rowdata[0][i]=rowdata[0][i].toLowerCase()
       // rowdata[0][i]=rowdata[0][i].toLowerCase
    }
}
console.log(rowdata)

//let headerrow=rowdata[0].toLocaleLowerCase
//console.log(headerrow)