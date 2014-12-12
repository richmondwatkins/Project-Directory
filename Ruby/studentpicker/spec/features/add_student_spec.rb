
feature "User adds a student" do
    scenario "Happy Path" do
    visit '/students'
    fill_in "Name", with: "Jerry"
    click_on "Create Student" # index
    page.should have_content("Jerry was successfully added to the list.")
    current_path.should == students_path
  end

  # scenario "skipping filling out the form" do
  #   visit '/'
  #   click_on "Manage Plant Categories"
  #   click_on "Add Category"
  #   click_on "Create Category"
  #   page.should have_content("Category could not be created.")
  #   page.should have_error("can't be blank", on: "Name")
  # end

end
