const Vehicle = require('../model/Vehicle');
const View = require('../view/View');

class VehicleController {
    static show(){
        let vehicles = Vehicle.getVehicles()
        View.show(vehicles)
    }
    static add(params){
        Vehicle.add(params)
    }
    static delete(params){
        Vehicle.delete(params)
    }
    static update(params){
        Vehicle.update(params)
    }
    static message(msg){
        View.message(msg)
    }
}

module.exports = VehicleController;