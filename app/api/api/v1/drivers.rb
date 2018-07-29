module API
  module V1
    class Drivers < Grape::API
      include API::V1::Defaults

      resource :drivers do
        desc "Return all drivers"
        get "", root: :drivers do
          Driver.all
        end

        desc "Return a driver"
        params do
          requires :id, type: Integer, desc: "ID of the driver"
        end
        get ":id", root: "driver" do
          Driver.where(id: params[:driver_id]).first
        end

      end
    end
  end
end
