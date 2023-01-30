// const configuration = {
//   client: 'pg',
//   connection: {
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'admin',
//     database: 'ecdb'
//   },
//   migrations: {
//     tableName: 'migrations',
//   },
//   seeds: {
//     directory: './seeds',
//     stub: './stub/seed.stub'
//   }
// };

// export default configuration;


const configuration = {
  client: "pg",
  connection: {
    host: "dpg-cfbldj82i3mjdumu9e90-a.singapore-postgres.render.com",
    port: 5432,
    user: "ecdb_rvzo_user",
    password: "qs4IfDMKQkVFHfi2YLA08RKdrk7lAO47",
    database: "ecdb_rvzo",
  },
  migrations: {
    tableName: "migrations",
  },
  seeds: {
    directory: "./seeds",
    stub: "./stub/seed.stub",
  },
};

export default configuration;