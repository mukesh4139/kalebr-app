# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
    { firstname: 'Admin', lastname: 'Kalebr', email: 'admin.kalebr@example.com', password: 'kalebr', admin: true },
    { firstname: 'Anil', lastname: 'Kumar', email: 'anil.kumar@example.com', password: 'example' },
    { firstname: 'Shyam', lastname: 'Kumar', email: 'shyam.kumar@example.com', password: 'example' },
    { firstname: 'Gita', lastname: 'Kumari', email: 'gita.kumari@example.com', password: 'example' },
    { firstname: 'Sita', lastname: 'Kumari', email: 'sita.kumari@example.com', password: 'example' }
]

User.create!(users)

questions = [
    { statement: 'Communicates friendly with colleagues and clients',
      options_attributes:[
          {statement: 'Very Much Agree'},
          {statement: 'Agree'},
          {statement: 'Disagree'},
          {statement: 'Totally Disagree'}
      ]
    },

    { statement: 'Works and collaborate with colleagues without any friction',
      options_attributes:[
          {statement: 'Very Much Agree'},
          {statement: 'Agree'},
          {statement: 'Disagree'},
          {statement: 'Totally Disagree'}
      ]
    },

    { statement: 'Accepts constructive criticism from colleagues and clients',
      options_attributes:[
          {statement: 'Very Much Agree'},
          {statement: 'Agree'},
          {statement: 'Disagree'},
          {statement: 'Totally Disagree'}
      ]
    },

    { statement: 'Meet the deadlines',
      options_attributes:[
          {statement: 'Always'},
          {statement: 'Most of the time'},
          {statement: 'Very few times'},
          {statement: 'Never'}
      ]
    },

    { statement: 'Maintains neat and tidy workstation',
      options_attributes:[
          {statement: 'Very Much Agree'},
          {statement: 'Agree'},
          {statement: 'Disagree'},
          {statement: 'Totally Disagree'}
      ]
    }
]

Question.create!(questions)