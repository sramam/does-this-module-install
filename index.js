#!/usr/bin/env node
console.log(process.argv)
Object.keys(process.env).map(el => {
  if (el.match(/npm.*/i)) {
    console.log(`${el}: ${process.env[el]}`);
  }
})
