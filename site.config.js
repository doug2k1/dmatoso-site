const socialLinks = require('./src/data/social-links')

module.exports = {
  site: {
    title: 'Douglas Matoso',
    subtitle: 'Web Developer',
    basePath: process.env.NODE_ENV === 'production' ? '/nanogen' : '',
    data: {
      socialLinks
    }
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
  }
}
