module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfk59bpmbjsn9ear1do0-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_js5g'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Uhw0DqGtC7x2tmw5Bvt9JvcCCUORXBcs'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
