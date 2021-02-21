class MembersController < ApplicationController

  def index
    @members = Member.all
    render :index
  end


end
