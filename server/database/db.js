import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async() => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-toz9wpw-shard-00-00.ehbxuup.mongodb.net:27017,ac-toz9wpw-shard-00-01.ehbxuup.mongodb.net:27017,ac-toz9wpw-shard-00-02.ehbxuup.mongodb.net:27017/?ssl=true&replicaSet=atlas-odkpx2-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true });
        console.log('DataBase connected successfully');
    }catch(error){
        console.log('Error while connecting the database',error.message);
    }

}


export default Connection;