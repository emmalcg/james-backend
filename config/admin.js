module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b511ac894a36da111fe0934d1ba58d8a'),
  },
});
