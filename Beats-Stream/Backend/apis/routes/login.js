const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router = express.Router();

const User = require('../model/user')

router.post('/signup',(req,res,next)=>{
	User.find({email:req.body.email})
	.exec()
	.then(user=>{
		if(user.length > 0)
			return statusCode(401).json({
				msg : 'User exist already'
			})
	})

	bcrypt.hash(req.body.password,10,(err,hash)=>{
		if(err)
		{
			return req.statusCode(500).json({
				error : err
			})
		}
		else{
			const user = new User({
				_id : new mongoose.Types.ObjectId,
				email : req.body.email,
				password : hash,
				userType : "user"
			})
			user.save()
			.then(result=>{
				res.status(200).json({
					new_user : result
				})
			})
			.catch(err => {
				return res.status(500).json({
					error : err
				})
			})
		}
	})
})

router.post('/login',(req,res,next)=>{
	User.find({email:req.body.email})
	.exec()
	.then(user=>{
		if(user.length < 1)
		{
			return res.status(401).json({
				msg : 'user don\'t exist'
			})
		}
		bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
			if(!result)
			{
				return res.status(401).json({
					msg: ' password invalid'
				})
			}
			if(result)
			{
				const token = jwt.sign({
					user
				},
				'secret key',
				{
					expiresIn: '24h'
				}
				)
				res.status(200).json({
					email : user[0].email,
					userType : 'user',
					token : token,
					msg : 'Logged In'
				})
			}
		})
	})
	.catch(err=>{
		console.log(err)
		res.status(500).json({
			error : err,
			msg : 'error aa gya bawa'
		})
	})
})

module.exports = router;