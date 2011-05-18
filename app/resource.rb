class Resource
  def initialize(name, data)
    self.name = name
    self.data = data
  end

  def url
    "resources/#{self.name}"
  end

  def to_summary_hash
    { :name => self.name, :url => self.url }
  end

  def to_json_detail
    { :name => self.name, :url => self.url, :data => self.data }.to_json
  end

  attr_accessor :name, :data
end
