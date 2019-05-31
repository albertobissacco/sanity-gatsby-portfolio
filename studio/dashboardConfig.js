export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cf0feba8ddf3b7034108114',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-swv7yo8t',
                  apiId: '4f595fb1-30bb-4a2f-b7ab-59f66420b09e'
                },
                {
                  buildHookId: '5cf0feba05106442c2016989',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1fxyvi8w',
                  apiId: '9978e7d7-3c0a-4471-ae18-7e78e2566a7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/albertobissacco/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-1fxyvi8w.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
