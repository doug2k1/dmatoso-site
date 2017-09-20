const projects = require('./src/data/projects')

module.exports = {
  site: {
    title: 'Douglas Matoso',
    subtitle: 'Web Developer',
    basePath: process.env.NODE_ENV === 'production' ? '/nanogen' : '',
    projects
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
  }
}
