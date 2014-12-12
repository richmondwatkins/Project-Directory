require 'spec_helper'

describe "StaticPages" do
  describe "Get Home Page" do
    it "should have the content Create" do
      visit '/static_pages/home'
      expect(page).to have_content('Create')
    end

    it "should have a link to the create page" do
      visit '/static_pages/home'
      expect(page).to have_selector('a')
    end
  end
end
