// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// const fs=require('fs')
// const colors=require('colors')

import fs from 'fs'
import colors from 'colors'

let products=(await fs.promises.readFile('products.txt','utf8')).split('\n')
const c=[colors.red,colors.green,colors.blue,colors.yellow,colors.gray]

for (let i = 0; i < products.length; i++) {
    console.log(c[i](products[i]));    
}

colors.setTheme({
  custom: ['green', 'underline']
});

console.log('Hello world!'.custom);