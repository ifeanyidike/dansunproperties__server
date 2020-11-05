module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8082),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6a6e9a6ea0a3f5630be254e2e7e44c1f'),
    },
  },
});
