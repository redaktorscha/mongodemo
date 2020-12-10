export default (x, User) => {
    const router = x.Router();
    router
    .route('/')
    .get(async r => r.res.json(await User.find())) //find all users route '/user'
    .post(async r =>  { //add new user
        const {login, password} = r.body;
        const newUser = new User({login, password});
        try {
            await newUser.save();
            r.res.status(201).json({'Added: ': login});
        } catch(err) {
            //return r.res.send(err.message)
            r.res.status(400).json({'Validation error: ': 'No password'})
        }
    })

    router
    .route('/:login') //parametrized route '/user/<userName>'
    .get(async r => {
        const { login }  = r.params;
        r.res.json(await User.find({login}));
    });
    return router;
}