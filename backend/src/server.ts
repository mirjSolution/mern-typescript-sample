import app from './app';
import env from './util/validateEnv';
import mongoose from 'mongoose';

const port = env.PORT;

// remove the strictQuery deprecation warning
mongoose.set('strictQuery', false);

mongoose
  .connect(env.MONGO_URI)
  .then(() => {
    console.log('Mongoose connected');

    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch(console.error);
