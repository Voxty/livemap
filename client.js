onNet("GetInfo", (player, name, coords, heading, modelhash, vehicle) => {
    const model = GetDisplayNameFromVehicleModel(modelhash);
    const vehclass = GetVehicleClass(vehicle);

    emitNet("SendInfo", player, name, coords, heading, model, vehclass);
});