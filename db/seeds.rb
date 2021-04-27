# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title:'Hello world', description: 'Create a react app with ruby on rails')

section = Section.create(title: 'Episode 1', course: course) #Crea la relacion con Course

episode = Episode.create([
    { title: '1. Setting up a new ruby on Rails App with React', description:'lorem ipsun', url:'https://www.youtube.com/embed/B0SxxHAImhc', section: section }, 
    { title: '2. Adding React to an Existing Rails App', description:'lorem ipsun',  url:'https://www.youtube.com/embed/B0SxxHAImhc', section: section },
    { title: '3. Building a hello world app', description:'lorem ipsun',  url:'https://www.youtube.com/embed/B0SxxHAImhc', section: section },
    { title: '4   . Adding React Router dom to your app', description:'lorem ipsun',  url:'https://www.youtube.com/embed/B0SxxHAImhc', section: section }
])


