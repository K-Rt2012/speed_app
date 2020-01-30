require 'test_helper'

class SpeedControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get speed_home_url
    assert_response :success
  end

end
