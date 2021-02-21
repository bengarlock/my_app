class MembersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @members = Member.all
    render json:@members
  end

  def show
    member = Member.find(params[:id])
    render json: member
  end

  def create
    member = Member.create(member_params)
    render json:member
  end

  def update
    @member = Member.find(params[:id])
    @member.update(member_params)
    render json: @member
  end

  def destroy
    @member = Member.find(params[:id])
    @member.destroy!
    render json: {}
  end

  private

  def member_params
    params.permit(:first_name, :last_name, :member_number)
  end

end


