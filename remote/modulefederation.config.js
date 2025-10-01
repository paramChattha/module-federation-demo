module.exports = {
  name:'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/Button',
  },
  remotes: {
    host: "host@http://localhost:3001/remoteEntry.js"
  }
}