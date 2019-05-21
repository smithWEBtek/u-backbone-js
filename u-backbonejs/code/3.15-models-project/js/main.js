var Vehicle = Backbone.Model.extend({
  initialize: function (obj) {
    this.name = obj.name
    this.name = obj.registrationNumber
    this.name = obj.colour
    console.log('A new vehicle is created.')
    console.log('It is the color: ', this.attributes.colour)
  },
  start: function () {
    console.log('Vehicle started.')
  }
});

var cars = [{
  name: "car1",
  registrationNumber: "XLI887",
  colour: "Blue"
},
{
  name: "car2",
  registrationNumber: "ZNP123",
  colour: "Blue"
},
{
  name: "car3",
  registrationNumber: "XUV456",
  colour: "Gray"
}]

cars.forEach(car => {
  var car = new Vehicle(car);
})
