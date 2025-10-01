module.exports = {
  name: 'host',
  filename:'remoteEntry.js',
  exposes: {
    "./Store" : "./src/store",
  },

  remotes: {
    remote: 'remote@http://localhost:3000/remoteEntry.js',
  }
}