require './app/requires'

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
    resources = ResourceStore.find_all
    return resources.collect { |resource| resource.to_summary_hash }.to_json
  end

  get '/resources/:id' do
    content_type :json
    resource = ResourceStore.find(params[:id].to_i)
    resource ? resource.to_json_detail : ''
  end

  run! if /app.rb$/ =~ $0
end
