export default m => {

    const UserSchema = m.Schema({ //new m.Schema??
        login: String,
        password: {
            type: String,
            required: [true, 'You have to add password']
        }
    });

    return m.model('User', UserSchema);
}