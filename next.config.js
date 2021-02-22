module.exports = {
  async rewrites() {
    return [
      {
        source: '/test',
        destination: '/data/this-is-a-test'
      }
    ] 
  }
}
