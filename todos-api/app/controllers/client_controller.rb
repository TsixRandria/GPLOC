class ClientController < ApplicationController
  def se_connecter
  end

  def s_inscrire
  end

  before_action :authorized, only: [:auto_login]

  # REGISTER
  def create
    @client = client.create(client_params)
    if @client.valid?
      token = encode_token({client_id: @client.id})
      render json: {client: @client, token: token}
    else
      render json: {error: "Invalid clientname or password"}
    end
  end

  # LOGGING IN
  def login
    @client = client.find_by(clientname: params[:clientname])

    if @client && @client.authenticate(params[:password])
      token = encode_token({client_id: @client.id})
      render json: {client: @client, token: token}
    else
      render json: {error: "Invalid clientname or password"}
    end
  end


  def auto_login
    render json: @client
  end

  private

  def client_params
    params.permit(:nom, :prenom, :email, :telephne, :mot_de_passe)
  end

end


