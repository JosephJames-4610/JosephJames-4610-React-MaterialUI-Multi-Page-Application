import express from "express";
import path from 'path';

const clientlibsRouterWrapper = (__dirname) => {

  const clientlibsRouter = express.Router();

  clientlibsRouter.get('/resource/gameCardImages/CardImage01.webp', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/gameCardImages/CardImage01.webp`))
  })

  clientlibsRouter.get('/resource/gameCardImages/CardImage02.webp', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/gameCardImages/CardImage02.webp`))
  })

  clientlibsRouter.get('/resource/identifyDifferenceImages/a01.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a01.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/a02.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a02.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/a03.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a03.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/a04.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a04.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/a05.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a05.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/a06.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a06.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/a07.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a07.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/a08.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a08.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/a09.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a09.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/a10.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/a10.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q01.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q01.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q02.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q02.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q03.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q03.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q04.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q04.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q05.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q05.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q06.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q06.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q07.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q07.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q08.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q08.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q09.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q09.png`))
  })
  clientlibsRouter.get('/resource/identifyDifferenceImages/q10.png', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/resource/identifyDifferenceImages/q10.png`))
  })


  return clientlibsRouter;
}

export default clientlibsRouterWrapper;