const fs = require('fs');

const _ = require('lodash');

const moment = require('moment');

const XLSX = require('xlsx');

moment.locale('vi');

fs.readFile('./week2/src/products.json', 'utf-8', (err, data) => {
     if (err){
          console.error('File read failed: ', err);
          return;
     }
     try {
          let products = JSON.parse(data);
          getLengthProducts(products);
          printAllProducts(products);
          formatDateUpdate(products);
          convertJSONToXLSX(products);
     } catch (errMessage) {
          console.log('Error parsing JSON string: ', errMessage);
     }
});

function getLengthProducts(products) {
     console.log(`Total number of products: ${products.length}`);
}
function printAllProducts(products){
     _.forEach(products, (value) => {
          value.dateUpdated = converDateUpdate(value.dateUpdated);
          console.log(`${value.id} - ${value.name} - ${formatNumber(value.price)} - Cập nhật cách đây ${moment(value.dateUpdated).fromNow()}`);
     });
}

function converDateUpdate(originString){
     return new Date(originString);
}

function formatNumber(num) {
     return `${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}VND`;
}

function formatDateUpdate(products){
     _.forEach(products, (value) => {
          value.updated = moment(value.dateUpdated).format('MM/DD/YYYY');
          delete value.dateUpdated;
     });
}

function convertJSONToXLSX(products){
     // create 'worksheet' object from json
     const ws = XLSX.utils.json_to_sheet(products);
 
     // Optional: config columns width (character length)
     ws['!cols'] = [{ width: 20 }, { width: 15 }, { width: 20 }, { width: 20 }, { width: 20 }];
 
     // create 'workbook' object (which contains multiple sheet)
     const wb = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Products');
 
     // convert to Microsoft EXCEL workbook and write to a Buffer object
     const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

     fs.writeFile('./week2/products.xlsx', buf, err => {
          if (err){
               console.error('Write file xlsx failed: ', err);
               return;
          }
          console.log('Write file success');
     });
}