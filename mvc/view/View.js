class View {
    static message(msg){
        console.log(msg);
    }
    static show(vehicles){
        console.log("Vehicle list: ")
        vehicles.forEach(vehicle => {
            const{id, name, price} = vehicle
            console.log(`${id}. ${name} - Rp. ${price}`)
        })
    }
}

module.exports = View