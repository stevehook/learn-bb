require 'app/requires'

class App < Sinatra::Base
  set :static, true
  set :public, '.'

  helpers do
    def partial(page, options={})
      haml page, options.merge!(:layout => false)
    end
  end

  get '/' do
    haml :index
  end

  get '/resources' do
    '[ {
          "name": "First File",
          "url": "resources/first"
        }, {
          "name": "Second File",
          "url": "resources/second"
        }, {
          "name": "Third File",
          "url": "resources/third"
        }
      ]'
  end

  get '/resources/:name' do
    '{
      "name": "First",
      "url": "resources/first",
      "data": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }'
  end

  run! if /app.rb$/ =~ $0
end
