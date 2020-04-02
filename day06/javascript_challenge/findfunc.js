
var data = [20,9, 18, 15, 10, 9];
for (var i = 0; i < data.length; i++) {
    var found = data.find(function (element) {
        return element == data[i];
    });
}
console.log(found);