export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61030d7cfe90516bdecfbebe',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-txh4mwf7',
                  apiId: '750f9087-d52f-48a1-aeb8-e5965646bbc9'
                },
                {
                  buildHookId: '61030d7cd5229473a3394bb6',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-cgr47bsp',
                  apiId: 'bfb49b5d-afdb-456e-a127-da6be5659d86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sandboxa/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-cgr47bsp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
