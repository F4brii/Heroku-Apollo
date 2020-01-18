import mongoose from 'mongoose';

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/mongodbAgendaV1', {
        useNewUrlParser: true
        });

        console.log('🚀  DB is connected');
    }catch{
        console.log("Error");
    }
}