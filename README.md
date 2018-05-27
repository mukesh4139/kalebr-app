== README

# Kaliber Application

This is a rails-ember application primarily built for reviewing each other at any organization.

## Backend Dependencies
            * Ruby Version    : 2.3.1
            * Rails           : 5.1
            * Rspec
            * PostgreSQL
            * Devise
            * JWT
            
## Frontend Dependencies
            * Ember Js         :2.8.3

## Installation
            $ git clone https://github.com/mukesh4139/kalebr-app.git
            $ cd kalber-backend 
            $ bundle install
            $ rake db:create
            $ rake db:migrate
            $ rake db:seed (optional)
            $ rails server
            $ cd kaleber-frontend
            $ npm install
            $ ember b -w (may take few minutes)
            $ visit https://localhost:3000
            
## Running Test
            $ rspec spec/controllers/
            $ rspec spec/models/


#### Demo App Link

https://kaleber-app.herokuapp.com

## Assumptions and Limitations

Only Objective Questions are supported for now.
One question can have maximum 4 options.
All Questions must be attempted to complete review.
