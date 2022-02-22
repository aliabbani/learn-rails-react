class V1::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'some-thing',
        guid: '73837-3837-3kkd-j833-93u3'
      }
    ] }.to_json
  end
end
