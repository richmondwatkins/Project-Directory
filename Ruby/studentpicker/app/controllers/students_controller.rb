class StudentsController < ApplicationController
  
  def index
     @students = Student.all
     @student = Student.new
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      redirect_to students_path, notice: "#{@student.name} was successfully added to the list."
    else
      flash.now[:alert] = "Student could not be created."
      render :new
    end
  end


  def random_student
    redirect_to new_student_path, notice: "was successfully added to the list."
  end

  def destroy
    @student = Student.find_by(id: params[:id])
    @student.destroy
    redirect_to students_path
  end

  def call_on
    @random_student = Student.where.not(calledon: (Time.new.all_day)).sample
      if @random_student.nil?
        flash.notice = "All students have been called on today"
      else
        flash.notice = "#{@random_student.name} was chosen!"
        time = Time.new
        @random_student.update_attributes(calledon: time)
      end
    redirect_to students_path
  end
 

  protected

  def student_params
    params.require(:student).permit(:name)
  end

end
