import express from "express";
import fs from 'fs';

const pagesRouterWrapper = (__dirname) => {
  const pagesRouter = express.Router();

  pagesRouter.get('/home', (req, res) => {
    console.log('Inside home route')
    console.log(__dirname)
    fs.readFile(`${__dirname}/home.html`, (err, data) =>{
      console.log('Inside home route Read')
      if (err) {      
        console.log('Inside home route Error')  
        res.set(404); res.send('Error: File Not Found')
      } else {
        console.log('Inside home route - file read')
        res.set('Content-Type', 'text/html')
        res.send(data);
      }
    })
  })

  return pagesRouter;
}

export default pagesRouterWrapper;