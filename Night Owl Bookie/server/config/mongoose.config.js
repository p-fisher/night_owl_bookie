const mongoose = require('mongoose');
const BookDb = 'bookDb';

mongoose.connect(`mongodb://localhost/${BookDb}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log(`Established connection with ${BookDb}`))
    .catch((err)=>console.log('Something went wrong connecting to the database', err))