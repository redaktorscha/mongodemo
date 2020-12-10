export default (express, bodyParser, fs, CORS, User, UserController) => {
    const app = express();

    app
        .use((req, res, next) => res.set(CORS) && next())
        .use(bodyParser.urlencoded({
            extended: true
        }))
        .use('/user', UserController(express, User))
        .get('/login/', (req, res) => res.send('mariianasonkina'))   
        .get('/code/', (req, res) => fs.createReadStream(
            import.meta.url.substring(7)).pipe(res))
        .all('/*', r => r.res.send('Работает!'));


    return app;

}
