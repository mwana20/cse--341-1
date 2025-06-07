const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'A simple Express API for managing contacts',
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production' 
          ? 'https://cse--341-1-8o7o.onrender.com' 
          : 'http://localhost:3002',
        description: process.env.NODE_ENV === 'production' ? 'Production server' : 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'], // paths to files containing OpenAPI definitions
};

const specs = swaggerJsdoc(options);
module.exports = specs;