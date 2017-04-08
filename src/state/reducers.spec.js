import reducers from './reducers';

test('@@INIT', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    articles: [],
    article: {},
    caseStudies: [],
  });
});

test('FETCH_ARTICLES', () => {
  let state;
  state = reducers(
    { articles: [], article: {}, caseStudies: [] },
    {
      type: 'FETCH_ARTICLES',
      articles: [
        {
          fields: {
            title: 'Creating dynamic layouts with Jekyll',
            subtitle: 'How we used YAML front-matter to massively change the layout for different posts on our agency’s new website',
            date: '2017-02-02T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '529cBbGZyUaI0UAai60Y4s',
            type: 'Entry',
            createdAt: '2017-03-11T15:45:50.148Z',
            updatedAt: '2017-03-25T01:02:48.949Z',
            revision: 2,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Redesigning my site',
            subtitle: 'The focus for, and some techniques I used in, my recent redesign',
            date: '2016-04-15T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '2V2XBUmSiIA4qOMeQi2GEK',
            type: 'Entry',
            createdAt: '2017-03-11T15:50:28.722Z',
            updatedAt: '2017-03-11T15:50:28.722Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Updating npm packages',
            subtitle: 'Exploring the myriad of options to enable you to update with ease',
            date: '2016-05-21T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '1YC75IzHlW4mimCYmYwuAE',
            type: 'Entry',
            createdAt: '2017-03-21T13:38:55.302Z',
            updatedAt: '2017-03-21T13:38:55.302Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'How to create custom grids with Kickoff',
            subtitle: '#tipsForKickoff',
            date: '2016-02-12T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '7IVXLs9go8KQsIioa6OwUk',
            type: 'Entry',
            createdAt: '2017-03-21T13:41:24.447Z',
            updatedAt: '2017-03-21T13:41:24.447Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Improving the UX of a front-end framework',
            subtitle: 'How we focused on our users for the latest version of Kickoff',
            date: '2015-09-07T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '2dc14DYy3e2Q40cwKuSUcy',
            type: 'Entry',
            createdAt: '2017-03-21T13:42:31.789Z',
            updatedAt: '2017-03-21T13:42:31.789Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Kickoff 6 and the future',
            subtitle: '#tipsForKickoff',
            date: '2016-02-10',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'e41hokQUQ8uyGQSCaqo6A',
            type: 'Entry',
            createdAt: '2017-03-23T19:48:16.541Z',
            updatedAt: '2017-03-23T19:48:16.541Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Add responsive helper classes to your project',
            subtitle: '#tipsForKickoff',
            date: '2016-01-18',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '622ko8DdVS8OWkoWuIqayI',
            type: 'Entry',
            createdAt: '2017-03-23T19:58:38.021Z',
            updatedAt: '2017-03-23T19:58:38.021Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'How to painlessly move Kickoff’s assets directory',
            subtitle: '#tipsForKickoff',
            date: '2016-01-09',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '3MVBntGhJSWmW8CGMgeiEa',
            type: 'Entry',
            createdAt: '2017-03-23T19:59:52.690Z',
            updatedAt: '2017-03-23T19:59:52.690Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Improving the UX of a front-end framework',
            subtitle: 'How we focused on our users for the latest version of Kickoff',
            date: '2015-09-07',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'Ry7I08A6CiuCCeYQ0caUo',
            type: 'Entry',
            createdAt: '2017-03-23T20:01:19.597Z',
            updatedAt: '2017-03-23T20:01:19.597Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'My development stack',
            subtitle: 'Tools of the trade when developing for the web',
            date: '2015-01-20',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '4EIWHfL1PyM4oCgyGKOiGu',
            type: 'Entry',
            createdAt: '2017-03-23T20:05:09.280Z',
            updatedAt: '2017-03-23T20:05:09.280Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Improve website event tracking with trak.js',
            subtitle: 'Add tracking events more easily with our new library',
            date: '2014-11-17',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '1PQIvZt3AECcYks4kigc8O',
            type: 'Entry',
            createdAt: '2017-03-23T20:14:57.739Z',
            updatedAt: '2017-03-23T20:14:57.739Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'The road to Kickoff version 4',
            subtitle: "What's in store for the next release of Kickoff",
            date: '2014-08-27',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '3tTDQ94E5W4qmos4KGK82q',
            type: 'Entry',
            createdAt: '2017-03-23T20:16:07.050Z',
            updatedAt: '2017-03-23T20:16:07.050Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Pinboard.in Chrome Extension',
            subtitle: 'An improved, more responsive design',
            date: '2014-08-01',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '5Ok1pjtlZY886mgKKacSq6',
            type: 'Entry',
            createdAt: '2017-03-23T20:16:48.148Z',
            updatedAt: '2017-03-23T20:16:48.148Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Sublime Text packages for Front-end web development',
            subtitle: 'My recommended list',
            date: '2014-07-30',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '7pJP2P0cCWo0S4y2qQcKu0',
            type: 'Entry',
            createdAt: '2017-03-23T20:17:27.106Z',
            updatedAt: '2017-03-23T20:17:27.106Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Yeoman Generator Development Tips',
            subtitle: 'Tips for those creating Yeoman generators',
            date: '2014-05-01',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '5IHGwgIGoEOyGIyWSMyWaY',
            type: 'Entry',
            createdAt: '2017-03-23T20:18:05.788Z',
            updatedAt: '2017-03-23T20:18:05.788Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Tooling around',
            subtitle: 'Are we focusing too much on the tools and not the output?',
            date: '2014-04-16',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '6Jb6MfqGRycSuQMQQc6GKM',
            type: 'Entry',
            createdAt: '2017-03-23T20:18:44.369Z',
            updatedAt: '2017-03-23T20:18:44.370Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: { title: 'Introducing Kickoff', date: '2013-12-10' },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '2SfB7EHWRasASYAcgaIAE4',
            type: 'Entry',
            createdAt: '2017-03-23T20:19:30.435Z',
            updatedAt: '2017-03-23T20:19:30.435Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'How to fix hidden characters in password inputs in old IE',
            subtitle: 'A fix for an obscure problem I found recently',
            date: '2013-05-04',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '3MCioejzos4iQ8SOeaWO0O',
            type: 'Entry',
            createdAt: '2017-03-23T20:20:52.014Z',
            updatedAt: '2017-03-23T20:20:52.014Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'My social home page',
            subtitle: 'mrmartineau.co.uk site launch',
            date: '2013-04-26',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'Cfj3FL8nzqq8oCukkw0Im',
            type: 'Entry',
            createdAt: '2017-03-23T20:21:58.904Z',
            updatedAt: '2017-03-23T20:21:58.904Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'On staying current',
            subtitle: 'My recipe for staying up-to-date with web development news and trends',
            date: '2013-03-07',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '69eir5mby8yGCKi08SqC4e',
            type: 'Entry',
            createdAt: '2017-03-23T20:22:37.671Z',
            updatedAt: '2017-03-23T20:22:37.671Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Speedy Sublime Text setup',
            subtitle: 'I created a wiki to speed up Sublime Text setup, click above to find out more.',
            date: '2012-05-16',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '5smb4a75tKKY4UGIkCgQqg',
            type: 'Entry',
            createdAt: '2017-03-23T20:23:17.924Z',
            updatedAt: '2017-03-23T20:23:17.924Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'The Choreographic Grid',
            subtitle: 'A CSS grid framework for content interdigitation',
            date: '2012-05-08',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '5qT9Y793wWieQ02mQkC6em',
            type: 'Entry',
            createdAt: '2017-03-23T20:24:16.340Z',
            updatedAt: '2017-03-23T20:24:16.340Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Customise Sublime Text 2',
            subtitle: "Tips for customising the only text editor you'll ever need.",
            date: '2011-08-23',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'vzAl3WS9cysWU4yEyIaGc',
            type: 'Entry',
            createdAt: '2017-03-23T20:25:00.086Z',
            updatedAt: '2017-03-23T20:25:00.086Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Cloze test creator',
            subtitle: 'I created a simple Cloze test generator',
            date: '2011-01-22',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'GsD4xyP4OGKoYeCY6U44c',
            type: 'Entry',
            createdAt: '2017-03-23T20:26:51.342Z',
            updatedAt: '2017-03-23T20:26:51.342Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Pure CSS Icons',
            subtitle: 'An experiment at creating shapes with CSS',
            date: '2010-04-18',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '3rkQS2bFGE0OQkaqmS4gYc',
            type: 'Entry',
            createdAt: '2017-03-23T21:28:41.780Z',
            updatedAt: '2017-03-23T21:41:18.963Z',
            revision: 2,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
      ],
    },
  );
  expect(state).toEqual({
    articles: [
      {
        fields: {
          title: 'Creating dynamic layouts with Jekyll',
          subtitle: 'How we used YAML front-matter to massively change the layout for different posts on our agency’s new website',
          date: '2017-02-02T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '529cBbGZyUaI0UAai60Y4s',
          type: 'Entry',
          createdAt: '2017-03-11T15:45:50.148Z',
          updatedAt: '2017-03-25T01:02:48.949Z',
          revision: 2,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Redesigning my site',
          subtitle: 'The focus for, and some techniques I used in, my recent redesign',
          date: '2016-04-15T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '2V2XBUmSiIA4qOMeQi2GEK',
          type: 'Entry',
          createdAt: '2017-03-11T15:50:28.722Z',
          updatedAt: '2017-03-11T15:50:28.722Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Updating npm packages',
          subtitle: 'Exploring the myriad of options to enable you to update with ease',
          date: '2016-05-21T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '1YC75IzHlW4mimCYmYwuAE',
          type: 'Entry',
          createdAt: '2017-03-21T13:38:55.302Z',
          updatedAt: '2017-03-21T13:38:55.302Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'How to create custom grids with Kickoff',
          subtitle: '#tipsForKickoff',
          date: '2016-02-12T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '7IVXLs9go8KQsIioa6OwUk',
          type: 'Entry',
          createdAt: '2017-03-21T13:41:24.447Z',
          updatedAt: '2017-03-21T13:41:24.447Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Improving the UX of a front-end framework',
          subtitle: 'How we focused on our users for the latest version of Kickoff',
          date: '2015-09-07T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '2dc14DYy3e2Q40cwKuSUcy',
          type: 'Entry',
          createdAt: '2017-03-21T13:42:31.789Z',
          updatedAt: '2017-03-21T13:42:31.789Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Kickoff 6 and the future',
          subtitle: '#tipsForKickoff',
          date: '2016-02-10',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'e41hokQUQ8uyGQSCaqo6A',
          type: 'Entry',
          createdAt: '2017-03-23T19:48:16.541Z',
          updatedAt: '2017-03-23T19:48:16.541Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Add responsive helper classes to your project',
          subtitle: '#tipsForKickoff',
          date: '2016-01-18',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '622ko8DdVS8OWkoWuIqayI',
          type: 'Entry',
          createdAt: '2017-03-23T19:58:38.021Z',
          updatedAt: '2017-03-23T19:58:38.021Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'How to painlessly move Kickoff’s assets directory',
          subtitle: '#tipsForKickoff',
          date: '2016-01-09',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '3MVBntGhJSWmW8CGMgeiEa',
          type: 'Entry',
          createdAt: '2017-03-23T19:59:52.690Z',
          updatedAt: '2017-03-23T19:59:52.690Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Improving the UX of a front-end framework',
          subtitle: 'How we focused on our users for the latest version of Kickoff',
          date: '2015-09-07',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'Ry7I08A6CiuCCeYQ0caUo',
          type: 'Entry',
          createdAt: '2017-03-23T20:01:19.597Z',
          updatedAt: '2017-03-23T20:01:19.597Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'My development stack',
          subtitle: 'Tools of the trade when developing for the web',
          date: '2015-01-20',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '4EIWHfL1PyM4oCgyGKOiGu',
          type: 'Entry',
          createdAt: '2017-03-23T20:05:09.280Z',
          updatedAt: '2017-03-23T20:05:09.280Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Improve website event tracking with trak.js',
          subtitle: 'Add tracking events more easily with our new library',
          date: '2014-11-17',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '1PQIvZt3AECcYks4kigc8O',
          type: 'Entry',
          createdAt: '2017-03-23T20:14:57.739Z',
          updatedAt: '2017-03-23T20:14:57.739Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'The road to Kickoff version 4',
          subtitle: "What's in store for the next release of Kickoff",
          date: '2014-08-27',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '3tTDQ94E5W4qmos4KGK82q',
          type: 'Entry',
          createdAt: '2017-03-23T20:16:07.050Z',
          updatedAt: '2017-03-23T20:16:07.050Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Pinboard.in Chrome Extension',
          subtitle: 'An improved, more responsive design',
          date: '2014-08-01',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '5Ok1pjtlZY886mgKKacSq6',
          type: 'Entry',
          createdAt: '2017-03-23T20:16:48.148Z',
          updatedAt: '2017-03-23T20:16:48.148Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Sublime Text packages for Front-end web development',
          subtitle: 'My recommended list',
          date: '2014-07-30',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '7pJP2P0cCWo0S4y2qQcKu0',
          type: 'Entry',
          createdAt: '2017-03-23T20:17:27.106Z',
          updatedAt: '2017-03-23T20:17:27.106Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Yeoman Generator Development Tips',
          subtitle: 'Tips for those creating Yeoman generators',
          date: '2014-05-01',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '5IHGwgIGoEOyGIyWSMyWaY',
          type: 'Entry',
          createdAt: '2017-03-23T20:18:05.788Z',
          updatedAt: '2017-03-23T20:18:05.788Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Tooling around',
          subtitle: 'Are we focusing too much on the tools and not the output?',
          date: '2014-04-16',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '6Jb6MfqGRycSuQMQQc6GKM',
          type: 'Entry',
          createdAt: '2017-03-23T20:18:44.369Z',
          updatedAt: '2017-03-23T20:18:44.370Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: { title: 'Introducing Kickoff', date: '2013-12-10' },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '2SfB7EHWRasASYAcgaIAE4',
          type: 'Entry',
          createdAt: '2017-03-23T20:19:30.435Z',
          updatedAt: '2017-03-23T20:19:30.435Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'How to fix hidden characters in password inputs in old IE',
          subtitle: 'A fix for an obscure problem I found recently',
          date: '2013-05-04',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '3MCioejzos4iQ8SOeaWO0O',
          type: 'Entry',
          createdAt: '2017-03-23T20:20:52.014Z',
          updatedAt: '2017-03-23T20:20:52.014Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'My social home page',
          subtitle: 'mrmartineau.co.uk site launch',
          date: '2013-04-26',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'Cfj3FL8nzqq8oCukkw0Im',
          type: 'Entry',
          createdAt: '2017-03-23T20:21:58.904Z',
          updatedAt: '2017-03-23T20:21:58.904Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'On staying current',
          subtitle: 'My recipe for staying up-to-date with web development news and trends',
          date: '2013-03-07',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '69eir5mby8yGCKi08SqC4e',
          type: 'Entry',
          createdAt: '2017-03-23T20:22:37.671Z',
          updatedAt: '2017-03-23T20:22:37.671Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Speedy Sublime Text setup',
          subtitle: 'I created a wiki to speed up Sublime Text setup, click above to find out more.',
          date: '2012-05-16',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '5smb4a75tKKY4UGIkCgQqg',
          type: 'Entry',
          createdAt: '2017-03-23T20:23:17.924Z',
          updatedAt: '2017-03-23T20:23:17.924Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'The Choreographic Grid',
          subtitle: 'A CSS grid framework for content interdigitation',
          date: '2012-05-08',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '5qT9Y793wWieQ02mQkC6em',
          type: 'Entry',
          createdAt: '2017-03-23T20:24:16.340Z',
          updatedAt: '2017-03-23T20:24:16.340Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Customise Sublime Text 2',
          subtitle: "Tips for customising the only text editor you'll ever need.",
          date: '2011-08-23',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'vzAl3WS9cysWU4yEyIaGc',
          type: 'Entry',
          createdAt: '2017-03-23T20:25:00.086Z',
          updatedAt: '2017-03-23T20:25:00.086Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Cloze test creator',
          subtitle: 'I created a simple Cloze test generator',
          date: '2011-01-22',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'GsD4xyP4OGKoYeCY6U44c',
          type: 'Entry',
          createdAt: '2017-03-23T20:26:51.342Z',
          updatedAt: '2017-03-23T20:26:51.342Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Pure CSS Icons',
          subtitle: 'An experiment at creating shapes with CSS',
          date: '2010-04-18',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '3rkQS2bFGE0OQkaqmS4gYc',
          type: 'Entry',
          createdAt: '2017-03-23T21:28:41.780Z',
          updatedAt: '2017-03-23T21:41:18.963Z',
          revision: 2,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
    ],
    article: {},
    caseStudies: [],
  });
});

test('ADD_ARTICLE', () => {
  let state;
  state = reducers(
    {
      articles: [
        {
          fields: {
            title: 'Creating dynamic layouts with Jekyll',
            subtitle: 'How we used YAML front-matter to massively change the layout for different posts on our agency’s new website',
            date: '2017-02-02T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '529cBbGZyUaI0UAai60Y4s',
            type: 'Entry',
            createdAt: '2017-03-11T15:45:50.148Z',
            updatedAt: '2017-03-25T01:02:48.949Z',
            revision: 2,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Redesigning my site',
            subtitle: 'The focus for, and some techniques I used in, my recent redesign',
            date: '2016-04-15T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '2V2XBUmSiIA4qOMeQi2GEK',
            type: 'Entry',
            createdAt: '2017-03-11T15:50:28.722Z',
            updatedAt: '2017-03-11T15:50:28.722Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Updating npm packages',
            subtitle: 'Exploring the myriad of options to enable you to update with ease',
            date: '2016-05-21T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '1YC75IzHlW4mimCYmYwuAE',
            type: 'Entry',
            createdAt: '2017-03-21T13:38:55.302Z',
            updatedAt: '2017-03-21T13:38:55.302Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'How to create custom grids with Kickoff',
            subtitle: '#tipsForKickoff',
            date: '2016-02-12T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '7IVXLs9go8KQsIioa6OwUk',
            type: 'Entry',
            createdAt: '2017-03-21T13:41:24.447Z',
            updatedAt: '2017-03-21T13:41:24.447Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Improving the UX of a front-end framework',
            subtitle: 'How we focused on our users for the latest version of Kickoff',
            date: '2015-09-07T00:00+00:00',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '2dc14DYy3e2Q40cwKuSUcy',
            type: 'Entry',
            createdAt: '2017-03-21T13:42:31.789Z',
            updatedAt: '2017-03-21T13:42:31.789Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Kickoff 6 and the future',
            subtitle: '#tipsForKickoff',
            date: '2016-02-10',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'e41hokQUQ8uyGQSCaqo6A',
            type: 'Entry',
            createdAt: '2017-03-23T19:48:16.541Z',
            updatedAt: '2017-03-23T19:48:16.541Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Add responsive helper classes to your project',
            subtitle: '#tipsForKickoff',
            date: '2016-01-18',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '622ko8DdVS8OWkoWuIqayI',
            type: 'Entry',
            createdAt: '2017-03-23T19:58:38.021Z',
            updatedAt: '2017-03-23T19:58:38.021Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'How to painlessly move Kickoff’s assets directory',
            subtitle: '#tipsForKickoff',
            date: '2016-01-09',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '3MVBntGhJSWmW8CGMgeiEa',
            type: 'Entry',
            createdAt: '2017-03-23T19:59:52.690Z',
            updatedAt: '2017-03-23T19:59:52.690Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Improving the UX of a front-end framework',
            subtitle: 'How we focused on our users for the latest version of Kickoff',
            date: '2015-09-07',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'Ry7I08A6CiuCCeYQ0caUo',
            type: 'Entry',
            createdAt: '2017-03-23T20:01:19.597Z',
            updatedAt: '2017-03-23T20:01:19.597Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'My development stack',
            subtitle: 'Tools of the trade when developing for the web',
            date: '2015-01-20',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '4EIWHfL1PyM4oCgyGKOiGu',
            type: 'Entry',
            createdAt: '2017-03-23T20:05:09.280Z',
            updatedAt: '2017-03-23T20:05:09.280Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Improve website event tracking with trak.js',
            subtitle: 'Add tracking events more easily with our new library',
            date: '2014-11-17',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '1PQIvZt3AECcYks4kigc8O',
            type: 'Entry',
            createdAt: '2017-03-23T20:14:57.739Z',
            updatedAt: '2017-03-23T20:14:57.739Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'The road to Kickoff version 4',
            subtitle: "What's in store for the next release of Kickoff",
            date: '2014-08-27',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '3tTDQ94E5W4qmos4KGK82q',
            type: 'Entry',
            createdAt: '2017-03-23T20:16:07.050Z',
            updatedAt: '2017-03-23T20:16:07.050Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Pinboard.in Chrome Extension',
            subtitle: 'An improved, more responsive design',
            date: '2014-08-01',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '5Ok1pjtlZY886mgKKacSq6',
            type: 'Entry',
            createdAt: '2017-03-23T20:16:48.148Z',
            updatedAt: '2017-03-23T20:16:48.148Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Sublime Text packages for Front-end web development',
            subtitle: 'My recommended list',
            date: '2014-07-30',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '7pJP2P0cCWo0S4y2qQcKu0',
            type: 'Entry',
            createdAt: '2017-03-23T20:17:27.106Z',
            updatedAt: '2017-03-23T20:17:27.106Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Yeoman Generator Development Tips',
            subtitle: 'Tips for those creating Yeoman generators',
            date: '2014-05-01',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '5IHGwgIGoEOyGIyWSMyWaY',
            type: 'Entry',
            createdAt: '2017-03-23T20:18:05.788Z',
            updatedAt: '2017-03-23T20:18:05.788Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Tooling around',
            subtitle: 'Are we focusing too much on the tools and not the output?',
            date: '2014-04-16',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '6Jb6MfqGRycSuQMQQc6GKM',
            type: 'Entry',
            createdAt: '2017-03-23T20:18:44.369Z',
            updatedAt: '2017-03-23T20:18:44.370Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: { title: 'Introducing Kickoff', date: '2013-12-10' },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '2SfB7EHWRasASYAcgaIAE4',
            type: 'Entry',
            createdAt: '2017-03-23T20:19:30.435Z',
            updatedAt: '2017-03-23T20:19:30.435Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'How to fix hidden characters in password inputs in old IE',
            subtitle: 'A fix for an obscure problem I found recently',
            date: '2013-05-04',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '3MCioejzos4iQ8SOeaWO0O',
            type: 'Entry',
            createdAt: '2017-03-23T20:20:52.014Z',
            updatedAt: '2017-03-23T20:20:52.014Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'My social home page',
            subtitle: 'mrmartineau.co.uk site launch',
            date: '2013-04-26',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'Cfj3FL8nzqq8oCukkw0Im',
            type: 'Entry',
            createdAt: '2017-03-23T20:21:58.904Z',
            updatedAt: '2017-03-23T20:21:58.904Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'On staying current',
            subtitle: 'My recipe for staying up-to-date with web development news and trends',
            date: '2013-03-07',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '69eir5mby8yGCKi08SqC4e',
            type: 'Entry',
            createdAt: '2017-03-23T20:22:37.671Z',
            updatedAt: '2017-03-23T20:22:37.671Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Speedy Sublime Text setup',
            subtitle: 'I created a wiki to speed up Sublime Text setup, click above to find out more.',
            date: '2012-05-16',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '5smb4a75tKKY4UGIkCgQqg',
            type: 'Entry',
            createdAt: '2017-03-23T20:23:17.924Z',
            updatedAt: '2017-03-23T20:23:17.924Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'The Choreographic Grid',
            subtitle: 'A CSS grid framework for content interdigitation',
            date: '2012-05-08',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '5qT9Y793wWieQ02mQkC6em',
            type: 'Entry',
            createdAt: '2017-03-23T20:24:16.340Z',
            updatedAt: '2017-03-23T20:24:16.340Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Customise Sublime Text 2',
            subtitle: "Tips for customising the only text editor you'll ever need.",
            date: '2011-08-23',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'vzAl3WS9cysWU4yEyIaGc',
            type: 'Entry',
            createdAt: '2017-03-23T20:25:00.086Z',
            updatedAt: '2017-03-23T20:25:00.086Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Cloze test creator',
            subtitle: 'I created a simple Cloze test generator',
            date: '2011-01-22',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: 'GsD4xyP4OGKoYeCY6U44c',
            type: 'Entry',
            createdAt: '2017-03-23T20:26:51.342Z',
            updatedAt: '2017-03-23T20:26:51.342Z',
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
        {
          fields: {
            title: 'Pure CSS Icons',
            subtitle: 'An experiment at creating shapes with CSS',
            date: '2010-04-18',
          },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
            },
            id: '3rkQS2bFGE0OQkaqmS4gYc',
            type: 'Entry',
            createdAt: '2017-03-23T21:28:41.780Z',
            updatedAt: '2017-03-23T21:41:18.963Z',
            revision: 2,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
            },
            locale: 'en-GB',
          },
        },
      ],
      article: {},
      caseStudies: [],
    },
    {
      type: 'ADD_ARTICLE',
      fields: {
        title: 'Creating dynamic layouts with Jekyll',
        subtitle: 'How we used YAML front-matter to massively change the layout for different posts on our agency’s new website',
        date: '2017-02-02T00:00+00:00',
        author: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '21W3rxLRac4q80C2soaW8W',
          },
        },
        body: '[Jekyll](http://jekyllrb.com/)-created websites are typically simple and their layouts, predictable. I want to show you how I created a pseudo-dynamic layout for case-studies, on TMW\'s new website, using some YAML front-matter and a little magic..\n\nAt TMW, the work we do comes in all shapes and sizes. Traditional templates would not suffice, because the work we do is extremely varied and the layouts needed to reflect that. We decided, at a very early stage, that each case study should change based on the project and particular type of content. This presented an interesting challenge for me because Jekyll does not cater for that functionality, so I had to get a little creative…\n\n## YAML front-matter, a for-loop and lots of modules\nAfter a few iterations, I settled on a robust, if unorthodox solution that used YAML front-matter (in each case study’s markdown), a simple for-loop (in the case study layout) and lots of modules for each section of the case study page.\n\n### YAML front-matter\nAmongst other things, the `partials` YAML array was added to the YAML front-matter for each case study (you can see it at the bottom of the embed below). Each item in that array had to specify a name, this name corresponded to the name of the partial/module that was going to be used.\n\nThis is taken from the Canon. Unleashing Print. case study\n\n### The for-loop\nThe loop in question was added to the work layout file in the `_layouts` directory. It might look a bit nuts — and it is — but please bear with me.. The nature of how Jekyll compiles it’s files meant I had to account for all possible properties for each module that was used in the YAML.\n\nThe loop iterated through the partials array, used the name property to include a different module, like so: include {{item.name}}.html. These were then passed to the included module using the subsequent parameters on the include tag. Even if the property was not needed in that module, it still needed to be passed down.\n\n<script src="https://gist.github.com/mrmartineau/e0ad7ae56552c9571e285e30e3469476.js"></script>\n\nVery quickly, I discovered that the properties of the partials array needed to share the same properties so that my for-loop didn’t get totally out of control.\n\n## The modules\nCreating modules for this page was nothing out of the ordinary, below you can see one of them. You should also be able to tell that some of the values are optional (e.g `{% if include.spaced %}`), this meant that I was able to customise the modules even further by adding/removing classes and content and giving the page even more of a unique feel. Examples of this was the optional addition to contain images in the section-image module to a thin column equal to the width of `.l-container` or a slightly wider version using `.l-container--wide`. This was used to great effect on the Lynx Bigger Issues case study.\n\n## Colour schemes\nAnother aspect to the case studies, was that they each have their own colour scheme. This is usually governed by the assets or brand for that particular case study and was controlled by some more YAML front-matter.\nThe YAML set primary, secondary and text colours that were then added to a small inline `<style>` block that changed styles for some aspects of the page.\n\nAll of this allowed for massive customisation on our new website, see a selection of case studies below:',
        originalUrl: 'https://medium.com/tmw-interactive/creating-dynamic-layouts-with-jekyll-3bbb7fc57d1f#.zflct0xbb',
      },
      id: '529cBbGZyUaI0UAai60Y4s',
    },
  );
  expect(state).toEqual({
    articles: [
      {
        fields: {
          title: 'Creating dynamic layouts with Jekyll',
          subtitle: 'How we used YAML front-matter to massively change the layout for different posts on our agency’s new website',
          date: '2017-02-02T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '529cBbGZyUaI0UAai60Y4s',
          type: 'Entry',
          createdAt: '2017-03-11T15:45:50.148Z',
          updatedAt: '2017-03-25T01:02:48.949Z',
          revision: 2,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Redesigning my site',
          subtitle: 'The focus for, and some techniques I used in, my recent redesign',
          date: '2016-04-15T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '2V2XBUmSiIA4qOMeQi2GEK',
          type: 'Entry',
          createdAt: '2017-03-11T15:50:28.722Z',
          updatedAt: '2017-03-11T15:50:28.722Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Updating npm packages',
          subtitle: 'Exploring the myriad of options to enable you to update with ease',
          date: '2016-05-21T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '1YC75IzHlW4mimCYmYwuAE',
          type: 'Entry',
          createdAt: '2017-03-21T13:38:55.302Z',
          updatedAt: '2017-03-21T13:38:55.302Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'How to create custom grids with Kickoff',
          subtitle: '#tipsForKickoff',
          date: '2016-02-12T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '7IVXLs9go8KQsIioa6OwUk',
          type: 'Entry',
          createdAt: '2017-03-21T13:41:24.447Z',
          updatedAt: '2017-03-21T13:41:24.447Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Improving the UX of a front-end framework',
          subtitle: 'How we focused on our users for the latest version of Kickoff',
          date: '2015-09-07T00:00+00:00',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '2dc14DYy3e2Q40cwKuSUcy',
          type: 'Entry',
          createdAt: '2017-03-21T13:42:31.789Z',
          updatedAt: '2017-03-21T13:42:31.789Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Kickoff 6 and the future',
          subtitle: '#tipsForKickoff',
          date: '2016-02-10',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'e41hokQUQ8uyGQSCaqo6A',
          type: 'Entry',
          createdAt: '2017-03-23T19:48:16.541Z',
          updatedAt: '2017-03-23T19:48:16.541Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Add responsive helper classes to your project',
          subtitle: '#tipsForKickoff',
          date: '2016-01-18',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '622ko8DdVS8OWkoWuIqayI',
          type: 'Entry',
          createdAt: '2017-03-23T19:58:38.021Z',
          updatedAt: '2017-03-23T19:58:38.021Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'How to painlessly move Kickoff’s assets directory',
          subtitle: '#tipsForKickoff',
          date: '2016-01-09',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '3MVBntGhJSWmW8CGMgeiEa',
          type: 'Entry',
          createdAt: '2017-03-23T19:59:52.690Z',
          updatedAt: '2017-03-23T19:59:52.690Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Improving the UX of a front-end framework',
          subtitle: 'How we focused on our users for the latest version of Kickoff',
          date: '2015-09-07',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'Ry7I08A6CiuCCeYQ0caUo',
          type: 'Entry',
          createdAt: '2017-03-23T20:01:19.597Z',
          updatedAt: '2017-03-23T20:01:19.597Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'My development stack',
          subtitle: 'Tools of the trade when developing for the web',
          date: '2015-01-20',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '4EIWHfL1PyM4oCgyGKOiGu',
          type: 'Entry',
          createdAt: '2017-03-23T20:05:09.280Z',
          updatedAt: '2017-03-23T20:05:09.280Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Improve website event tracking with trak.js',
          subtitle: 'Add tracking events more easily with our new library',
          date: '2014-11-17',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '1PQIvZt3AECcYks4kigc8O',
          type: 'Entry',
          createdAt: '2017-03-23T20:14:57.739Z',
          updatedAt: '2017-03-23T20:14:57.739Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'The road to Kickoff version 4',
          subtitle: "What's in store for the next release of Kickoff",
          date: '2014-08-27',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '3tTDQ94E5W4qmos4KGK82q',
          type: 'Entry',
          createdAt: '2017-03-23T20:16:07.050Z',
          updatedAt: '2017-03-23T20:16:07.050Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Pinboard.in Chrome Extension',
          subtitle: 'An improved, more responsive design',
          date: '2014-08-01',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '5Ok1pjtlZY886mgKKacSq6',
          type: 'Entry',
          createdAt: '2017-03-23T20:16:48.148Z',
          updatedAt: '2017-03-23T20:16:48.148Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Sublime Text packages for Front-end web development',
          subtitle: 'My recommended list',
          date: '2014-07-30',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '7pJP2P0cCWo0S4y2qQcKu0',
          type: 'Entry',
          createdAt: '2017-03-23T20:17:27.106Z',
          updatedAt: '2017-03-23T20:17:27.106Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Yeoman Generator Development Tips',
          subtitle: 'Tips for those creating Yeoman generators',
          date: '2014-05-01',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '5IHGwgIGoEOyGIyWSMyWaY',
          type: 'Entry',
          createdAt: '2017-03-23T20:18:05.788Z',
          updatedAt: '2017-03-23T20:18:05.788Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Tooling around',
          subtitle: 'Are we focusing too much on the tools and not the output?',
          date: '2014-04-16',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '6Jb6MfqGRycSuQMQQc6GKM',
          type: 'Entry',
          createdAt: '2017-03-23T20:18:44.369Z',
          updatedAt: '2017-03-23T20:18:44.370Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: { title: 'Introducing Kickoff', date: '2013-12-10' },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '2SfB7EHWRasASYAcgaIAE4',
          type: 'Entry',
          createdAt: '2017-03-23T20:19:30.435Z',
          updatedAt: '2017-03-23T20:19:30.435Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'How to fix hidden characters in password inputs in old IE',
          subtitle: 'A fix for an obscure problem I found recently',
          date: '2013-05-04',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '3MCioejzos4iQ8SOeaWO0O',
          type: 'Entry',
          createdAt: '2017-03-23T20:20:52.014Z',
          updatedAt: '2017-03-23T20:20:52.014Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'My social home page',
          subtitle: 'mrmartineau.co.uk site launch',
          date: '2013-04-26',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'Cfj3FL8nzqq8oCukkw0Im',
          type: 'Entry',
          createdAt: '2017-03-23T20:21:58.904Z',
          updatedAt: '2017-03-23T20:21:58.904Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'On staying current',
          subtitle: 'My recipe for staying up-to-date with web development news and trends',
          date: '2013-03-07',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '69eir5mby8yGCKi08SqC4e',
          type: 'Entry',
          createdAt: '2017-03-23T20:22:37.671Z',
          updatedAt: '2017-03-23T20:22:37.671Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Speedy Sublime Text setup',
          subtitle: 'I created a wiki to speed up Sublime Text setup, click above to find out more.',
          date: '2012-05-16',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '5smb4a75tKKY4UGIkCgQqg',
          type: 'Entry',
          createdAt: '2017-03-23T20:23:17.924Z',
          updatedAt: '2017-03-23T20:23:17.924Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'The Choreographic Grid',
          subtitle: 'A CSS grid framework for content interdigitation',
          date: '2012-05-08',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '5qT9Y793wWieQ02mQkC6em',
          type: 'Entry',
          createdAt: '2017-03-23T20:24:16.340Z',
          updatedAt: '2017-03-23T20:24:16.340Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Customise Sublime Text 2',
          subtitle: "Tips for customising the only text editor you'll ever need.",
          date: '2011-08-23',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'vzAl3WS9cysWU4yEyIaGc',
          type: 'Entry',
          createdAt: '2017-03-23T20:25:00.086Z',
          updatedAt: '2017-03-23T20:25:00.086Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Cloze test creator',
          subtitle: 'I created a simple Cloze test generator',
          date: '2011-01-22',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: 'GsD4xyP4OGKoYeCY6U44c',
          type: 'Entry',
          createdAt: '2017-03-23T20:26:51.342Z',
          updatedAt: '2017-03-23T20:26:51.342Z',
          revision: 1,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
      {
        fields: {
          title: 'Pure CSS Icons',
          subtitle: 'An experiment at creating shapes with CSS',
          date: '2010-04-18',
        },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'stjy307y3wj0' },
          },
          id: '3rkQS2bFGE0OQkaqmS4gYc',
          type: 'Entry',
          createdAt: '2017-03-23T21:28:41.780Z',
          updatedAt: '2017-03-23T21:41:18.963Z',
          revision: 2,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'article' },
          },
          locale: 'en-GB',
        },
      },
    ],
    article: {
      '529cBbGZyUaI0UAai60Y4s': {
        title: 'Creating dynamic layouts with Jekyll',
        subtitle: 'How we used YAML front-matter to massively change the layout for different posts on our agency’s new website',
        date: '2017-02-02T00:00+00:00',
        author: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '21W3rxLRac4q80C2soaW8W',
          },
        },
        body: '[Jekyll](http://jekyllrb.com/)-created websites are typically simple and their layouts, predictable. I want to show you how I created a pseudo-dynamic layout for case-studies, on TMW\'s new website, using some YAML front-matter and a little magic..\n\nAt TMW, the work we do comes in all shapes and sizes. Traditional templates would not suffice, because the work we do is extremely varied and the layouts needed to reflect that. We decided, at a very early stage, that each case study should change based on the project and particular type of content. This presented an interesting challenge for me because Jekyll does not cater for that functionality, so I had to get a little creative…\n\n## YAML front-matter, a for-loop and lots of modules\nAfter a few iterations, I settled on a robust, if unorthodox solution that used YAML front-matter (in each case study’s markdown), a simple for-loop (in the case study layout) and lots of modules for each section of the case study page.\n\n### YAML front-matter\nAmongst other things, the `partials` YAML array was added to the YAML front-matter for each case study (you can see it at the bottom of the embed below). Each item in that array had to specify a name, this name corresponded to the name of the partial/module that was going to be used.\n\nThis is taken from the Canon. Unleashing Print. case study\n\n### The for-loop\nThe loop in question was added to the work layout file in the `_layouts` directory. It might look a bit nuts — and it is — but please bear with me.. The nature of how Jekyll compiles it’s files meant I had to account for all possible properties for each module that was used in the YAML.\n\nThe loop iterated through the partials array, used the name property to include a different module, like so: include {{item.name}}.html. These were then passed to the included module using the subsequent parameters on the include tag. Even if the property was not needed in that module, it still needed to be passed down.\n\n<script src="https://gist.github.com/mrmartineau/e0ad7ae56552c9571e285e30e3469476.js"></script>\n\nVery quickly, I discovered that the properties of the partials array needed to share the same properties so that my for-loop didn’t get totally out of control.\n\n## The modules\nCreating modules for this page was nothing out of the ordinary, below you can see one of them. You should also be able to tell that some of the values are optional (e.g `{% if include.spaced %}`), this meant that I was able to customise the modules even further by adding/removing classes and content and giving the page even more of a unique feel. Examples of this was the optional addition to contain images in the section-image module to a thin column equal to the width of `.l-container` or a slightly wider version using `.l-container--wide`. This was used to great effect on the Lynx Bigger Issues case study.\n\n## Colour schemes\nAnother aspect to the case studies, was that they each have their own colour scheme. This is usually governed by the assets or brand for that particular case study and was controlled by some more YAML front-matter.\nThe YAML set primary, secondary and text colours that were then added to a small inline `<style>` block that changed styles for some aspects of the page.\n\nAll of this allowed for massive customisation on our new website, see a selection of case studies below:',
        originalUrl: 'https://medium.com/tmw-interactive/creating-dynamic-layouts-with-jekyll-3bbb7fc57d1f#.zflct0xbb',
      },
    },
    caseStudies: [],
  });
});
