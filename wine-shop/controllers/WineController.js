const Wine = require('../models/Wine')
const View = require('../views/View')

class WineController{
    static help(){
        View.help()
    }
    static wines(){
        Wine.wines(params)
    }
    static add(params){
        Wine.add(params)
    }
    static sell(params){
        Wine.sell(params)
    }
    static rename(params){
        Wine.rename(params)
    }
    static findById(params){
        Wine.findById(params)
    }
    static message(msg){
        View.message(msg)
    }
}

module.exports = WineController