class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.timestamp :calledon

      t.timestamps
    end
  end
end
