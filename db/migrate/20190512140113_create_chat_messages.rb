class CreateChatMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_messages do |t|
      t.string :message, null: false
      t.string :info
      t.timestamps
    end
  end
end
