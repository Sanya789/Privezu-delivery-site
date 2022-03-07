const express = require("express");
const app = express();





const path = require('path');
const upload = require('./middlewares/middlewares');



app.use(express.static(path.join(__dirname, 'public')));


const cors = require("cors");
const PORT = 3032;
const { Order } = require("./db/models");
const {User} = require("./db/models")
const morgan = require("morgan");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));



const userRouter = require('./routes/userRouter');
const rolesRouter = require('./routes/rolesRouter');
const { Client } = require("pg");


app.use(cors(
  {
    credentials: true,
    origin: 'http://localhost:3000',
  }
));

app.use(
  session({

    name: "session!",

    store: new FileStore({}),
    saveUninitialized: false,
    secret: "dsmkalmdkl",
    resave: false,
  })
);


app.post('/uploadIMG', upload.single('file'), async (req, res) => {
  const { img } = req.body
  console.log(req.session)

  try {
    console.log(req?.file?.originalname);
    const post = await User.update({ img: `img/${req?.file?.originalname}`, }, {
      where: { id: req.session.user.id }
    });
    res.json({ img: `/img/${req?.file?.originalname}` });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.use('/user', userRouter);
app.use('/roles', rolesRouter)

app.post('/upload', async (req, res) => {
  try {
    // console.log('=========>',req.body)

    const YaDeparture = '123'
    const YaDestination = '123'
    const YaLatitude = '123'
    const YaLongitude = '123'
    const CurrentUserId = 1
    const AcPrice = '123'


    //  console.log('backWorking')



    console.log(
      YaDeparture,
      YaDestination,
      YaLatitude,
      YaLongitude,
      req.body.volume,
      req.body.length,
      req.body.width,
      req.body.heigth,
      req.body.weight,
      req.body.departureDate,
      req.body.destinationDate,
      AcPrice,
      CurrentUserId,

      "123",
      false,
      "123",
      123,
      req.body
    );
    const order = await Order.create({
      departure: req.body.departure,
      destination: req.body.destination,
      latitude: req.body.latitude.join(),
      longitude: req.body.longitude.join(),

      volume: req.body.volume,
      length: req.body.length,
      width: req.body.width,
      heigth: req.body.heigth,
      weight: req.body.weight,
      departureDate: req.body.departureDate,
      destinationDate: req.body.destinationDate,
      price: AcPrice,
      clientId: req.session.user.id ,
      driverId: 2,

      cargoCost: "123",
      status: false,
      cost: "123",
      //    req.body.cargoCost
    });
    // console.log(task)
    console.log("done");
    res.json(order);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/orders/:id", async (req, res) => {
  console.log("working");
  console.log(req.params.id);
  const order = await Order.findOne({ where: { id: req.params.id } });
  console.log({ order });
  res.json({ order });
});

app.patch('/changeStatus/:id',  async (req, res) => {
  console.log('workin')
  try {
      
      const {id} = req.params
      const status = true;
      console.log('=========>',{status})
    const order = await Order.update({status},{ where: {id} });
    console.log(order)
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get("/activeOrders", async (req, res) => {
  console.log("proshel1");
  // const activeOrders = Order.findAll({where:{status:false} && {} })
  const activeOrders = await Order.findAll({ where: { status: false } });
  console.log("proshel");
  res.json({ activeOrders });
});

app.get("/clientOrders", async (req, res) => {
  const clientOrders = await Order.findAll({ where: { clientId: req.session.user.id } }); //req.session.user.id
  console.log('111',req.session.user.id)
  res.json( {clientOrders });
});

app.get("/driverOrders", async (req, res) => {
  const driverOrders = await Order.findAll({ where: { driverId: req.session.user.id} }); //req.session.user.id
  console.log('111',req.session.user.id)
  res.json( {driverOrders });
});

// app.get("/getOneUser", async (req, res) => {
//   const getOneUser = await User.findOne({ where: { roleId: req.session.user.id} });
//   res.json( {getOneUser});
// });

const io = require("socket.io")(3033, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});


app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
