// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Yevhen',
    lastname: 'Topchan',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '750$',
  address: 'Bila Tserkva, Ukraine',
}

var footer = {
  social: {
    email: {
      text: 'emt16191@gmail.com',
      href: 'mailto:emt16191@gmail.com',
    },
    phone: {
      text: '+380938282657',
      href: 'tel:+380938282657',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
              work on a new project I learn the domain and try to understand the idea of the project. Good team
              player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
              tournament position, goals etc), analyzing by simple mathematics models and preparing probability
              for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 6,
          isTop: false,
        },
        {
          name: 'VS Code',
          point: 8,
          isTop: true,
        },
        {
          name: 'Git',
          point: 7,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 9,
          isTop: true,
        },
        {
          name: 'NPM',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Listen to music',
          isMain: true,
        },
        {
          name: 'Read books',
          isMain: false,
        },
        {
          name: 'Fishing',
          isMain: true,
        },
        {
          name: 'Play video games',
          isMain: true,
        },
      ],
    },
    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      educations: [
        {
          name: 'School #16',
          isEnd: true,
        },
        {
          name: 'Pharm College',
          isEnd: true,
        },
        {
          name: 'Pharm Academy',
          isEnd: true,
        },
        {
          name: 'IT-Brains',
          isEnd: false,
        },
      ],

      certificates: [
        { name: 'Сертификат Пекаря', id: 4729 },
        { name: 'Сертификат Аптекаря', id: 6473793 },
        { name: 'Ещё сертификат', id: 160485 },
      ],
    },
    footer,
  })
})

// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Senior Pharmacist',
          company: {
            name: 'Sumatra LTD',
            url: null,
          },

          duration: {
            from: '01.02.2010',
            to: '31.05.2013',
          },
          projectAmount: 16,
          projects: [
            {
              name: 'Project name',
              url: 'i.ua',
              about: 'About this project',
              stackAmount: 3,
              stacks: [
                { name: 'React.js' },
                { name: 'HTML/CSS' },
                { name: 'Node.js' },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'Gold Cucamber',
                },
                {
                  name: 'Green Tomato',
                },
              ],
            },
          ],
        },
        {
          position: 'Senior Pharmacist',
          company: {
            name: 'Aptekar+Vitalux',
            url: 'http://aptekar.ua',
          },

          duration: {
            from: '01.06.2013',
            to: null,
          },
          projectAmount: 9,
          projects: [
            {
              name: 'Project name',
              url: 'google.com',
              about: 'About this project',
              stackAmount: 3,
              stacks: [
                { name: 'React.js' },
                { name: 'HTML/CSS' },
                { name: 'Node.js' },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'Grey Potato',
                },
                {
                  name: 'Yellow Apple',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    // ↙ сюди вводимо JSON дані
    layout: 'person',
    page: {
      title: 'Resume | Person',
    },
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
