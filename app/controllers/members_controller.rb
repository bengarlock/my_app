class MembersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    members = Member.all
    render json:members
  end

  def create
    member = Member.create!(member_params)
    render json:member
  end

  def update
    member = Member.find_by(params[:id])
    member.update!(member_params)
    render json: member
  end

  def destroy
    member = Member.find_by(params[:id])
    member.destroy!
    render json: {}
  end

  private

  def member_params
    params.require(:member).permit(:first_name, :last_name, :member_number)
  end


end


