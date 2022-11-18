const { getPosts, generatePaginationPages } = require('./theme/serverUtils')
async function config() {
  const pageSize = 5
  await generatePaginationPages(pageSize)
  return {
    title: 'ysh\'s Blog',
    base: '/',
    description: 'blog',
    ignoreDeadLinks: true,
    themeConfig: {
      posts: await getPosts(),
      pageSize: pageSize,
      website: 'https://github.com/stefan-ysh', //copyright link
      // 评论的仓库地址
      comment: {
        repo: 'Hacker-C/blog',
        themes: 'github-light',
        issueTerm: 'pathname'
      },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Archives', link: '/pages/archives' },
        { text: 'Tags', link: '/pages/tags' },
        { text: 'About', link: '/pages/about' }
      ],
      //outline:[2,3],
      outlineTitle: '文章摘要',
      socialLinks: [{ icon: 'github', link: 'https://github.com/Hacker-C/blog' }],
    },
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
      //build: { minify: false }
      server: { port: 5000 },
    },
    /*
  optimizeDeps: {
      keepNames: true
  }
  */
  }
}

module.exports = config()
