const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models')

router.route('/check')
  .post((req, res) => {
    if (req.session.user) {
      return res.status(200).json({ user: req.session.user })
    }
    res.sendStatus(401)
  })

router.route('/signup')
  .post(async (req, res) => {
    const { email, name, phone, password } = req.body;

    if (email && name && password && phone) {
      const cryptPass = await bcrypt.hash(password, 10)
      try {
        
        const currentUser = await User.create({ ...req.body, password: cryptPass})
        // console.log(req.body);
        req.session.user = { id: currentUser.id, name: currentUser.name, roleId: currentUser.roleId }
        return res.json({ user: { id: currentUser.id, name: currentUser.name, roleId: currentUser.roleId } })
      } catch (err) {
        console.log(err)
        return res.sendStatus(501)
      }
    } else {
      return res.sendStatus(500)
    }
  })



router.route('/signin')
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const currentUser = await User.findOne({ where: { email } })
        const validPassword = await bcrypt.compare(password, currentUser.password)
        // console.log({ validPassword, password, curPassword: currentUser.password })
        if (currentUser && validPassword) {
          req.session.user = { id: currentUser.id, name: currentUser.name, roleId: currentUser.roleId }
          return res.json({ user: { id: currentUser.id, name: currentUser.name, roleId: currentUser.roleId } })
        } else {
          return res.sendStatus(500)
        }
      } catch (err) {
        console.log(err)
        return res.sendStatus(500)
      }
    } else {
      return res.sendStatus(500)
    }

  })


  router.route('/')
  .get( async (req, res)=>{
    const user = await User.findOne({where: {id:req.session.user.id}})
    res.json(user)
  })

router.route('/logout')
  .post((req, res) => {
    req.session.destroy()
    res.clearCookie('sid').sendStatus(200)
  })


router.route('/')
  .get( async (req, res)=>{
    const user = await User.findOne({where: {id:req.session.id}})
    res.json({user})
  })

module.exports = router;
