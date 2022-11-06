const fs = require('fs');
let input = process.argv[3];
let fileName = process.argv[2];
try {
  fs.writeFileSync(`${fileName}.txt`, input);
  // file written successfully
  const data = fs.readFileSync(`${fileName}.txt`, 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}