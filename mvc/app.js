const command = process.argv[2];
const params = process.argv.slice(3);

// console.log(command)
// console.log(params)

const VehicleController = require("./controller/VehicleController");

switch (command) {
  case "show":
    VehicleController.show();
    break;
  case "add":
    VehicleController.add();
    break;
  case "delete":
    VehicleController.delete();
    break;
  case "update":
    VehicleController.update();
    break;
  default:
    VehicleController.message("Unknown command");
    break;
}