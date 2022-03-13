module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    endpoint: "/graphql",
    shadowCRUD: true,
    config: {
      playgroundAlways: true,
      depthLimit: 10,
      amountLimit: 100,
      maxLimit: 100,
      defaultLimit: 100
    },
    introspection: true,
    apolloServer: {
      tracing: false,
    },
  },
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
  },
}); 