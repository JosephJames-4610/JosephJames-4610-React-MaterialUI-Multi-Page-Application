import express from "express";
import fs from 'fs';

const pagesRouterWrapper = (__dirname) => {
  const pagesRouter = express.Router();

  pagesRouter.get('/home', (req, res) => {
    fs.readFile(`${__dirname}/home.html`, (err, data) =>{
      if (err) {      
        res.set(404); res.send('Error: File Not Found')
      } else {
        res.set('Content-Type', 'text/html')
        res.send(data);
      }
    })
  })

  pagesRouter.get('/identify-difference', (req, res) => {
    fs.readFile(`${__dirname}/identifyDifference.html`, (err, data) =>{
      if (err) {      
        res.set(404); res.send('Error: File Not Found')
      } else {
        res.set('Content-Type', 'text/html')
        res.send(data);
      }
    })
  })

  pagesRouter.get('/memory-check', (req, res) => {
    fs.readFile(`${__dirname}/memoryCheck.html`, (err, data) =>{
      if (err) {      
        res.set(404); res.send('Error: File Not Found')
      } else {
        res.set('Content-Type', 'text/html')
        res.send(data);
      }
    })
  })

  return pagesRouter;
}

export default pagesRouterWrapper;