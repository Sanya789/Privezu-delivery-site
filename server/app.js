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
  try {
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
    const YaDeparture = '123'
    const YaDestination = '123'
    const YaLatitude = '123'
    const YaLongitude = '123'
    const CurrentUserId = 1
    const AcPrice = '123'
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
    });
    res.json(order);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/orders/:id", async (req, res) => {
  const order = await Order.findOne({ where: { id: req.params.id } });
  res.json({ order });
});

app.patch('/changeStatus/:id',  async (req, res) => {
  try {      
      const {id} = req.params
      const status = true;
    const order = await Order.update({status},{ where: {id} });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get("/activeOrders", async (req, res) => {
  const activeOrders = await Order.findAll({ where: { status: false } });
  res.json({ activeOrders });
});

app.get("/clientOrders", async (req, res) => {
  const clientOrders = await Order.findAll({ where: { clientId: req.session.user.id } }); //req.session.user.id
  res.json( {clientOrders });
});

app.get("/driverOrders", async (req, res) => {
  const driverOrders = await Order.findAll({ where: { driverId: req.session.user.id} }); //req.session.user.id
  res.json( {driverOrders });
});

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
