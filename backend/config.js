import dotenv from 'dotenv';

dotenv.config();

export default,
  PORT: process.env.PORT || 8080,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET || 'shhh',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb'
}

