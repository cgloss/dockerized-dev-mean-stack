// Import dependencies
import { Document, Schema, Model, model, connect} from "mongoose";
import { Router, Request, Response } from 'express';

const router: Router = Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Connect to mongodb
connect(dbHost);

// create mongoose schema
const userSchema = new Schema({
  name: String,
  age: Number
});

// create mongoose model
const User = model('User', userSchema);


/* GET api listing. */
router.get('/', (req: Request, res: Response) => {
    res.send('api works!');
});

/* GET all users. */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(err)

        res.status(200).json(users);
    });
});

/* GET one users. */
router.get('/users/:id', (req: Request, res: Response) => {
    User.findById(req.param('id'), (err, users) => {
        if (err) res.status(500).send(err)

        res.status(200).json(users);
    });
});

/* Create a user. */
router.post('/users', (req: Request, res: Response) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

module.exports = router;