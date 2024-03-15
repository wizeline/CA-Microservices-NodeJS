const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'CA Microservices NodeJS',
    version: '1.0.0',
    description: 'Code Accelerators Microservice Initiative',
    contact: {
      name: 'Diego Lozano',
      email: 'diego.lozano@wizeline.com',
    },
    license: {
      name: 'MIT',
      url: 'https://www.mit.edu/~amini/LICENSE.md',
    },
  },
  components: {
    schemas: {
      DefaultResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'message',
          },
        },
      },
      AuthTokenResponse: {
        type: 'object',
        properties: {
          accessToken: {
            type: 'string',
            description: 'JWT token',
          },
          expiresIn: {
            type: 'string',
            description: 'Expiration time',
          },
          tokenType: {
            type: 'string',
            description: 'Token type',
          },
        },
      },
      UserResponse: {
        type: 'object',
        properties: {
          success: {
            type: 'string',
            description: 'Operation state',
          },
          message: {
            type: 'string',
            description: 'Message',
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'uuid',
                description: 'userId',
              },
              firstName: {
                type: 'string',
                description: 'User first name',
              },
              lastName: {
                type: 'string',
                description: 'User last name',
              },
              email: {
                type: 'string',
                description: 'User email',
              },
            },
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    responses: {
      Accepted: {
        description: 'Success',
      },
      UnauthorizedError: {
        description: 'Access token is missing or invalid',
      },
      InternalServerError: {
        description: 'Internal Server Error',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  definitions: {
    User: {
      type: 'object',
      required: ['firstName', 'lastName', 'email'],
      properties: {
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./app/internal/adapters/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
