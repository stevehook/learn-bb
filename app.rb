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

  run! if /app.rb$/ =~ $0
end
