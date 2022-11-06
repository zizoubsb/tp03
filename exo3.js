const fs = require('fs');
let fileName = process.argv[2];
try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}