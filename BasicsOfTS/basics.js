var a = 100; // on using var key word for a variable, we can reinitialize
a = a + a;
var _loop_1 = function (i) {
    setTimeout(function () { console.log("index is : " + i); }, 100 * i);
};
//const aa = 400; //on using const keyword, we cannot reinitialize the variable. Its just final declaration and initialization
//aa = aa+aa;
//let = > blocks the usage of execution in asynchronous mode
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
{
    var name_1 = "Harish";
    var age = 40;
    var status_1 = true;
    var source = void 0;
    source = "sum";
    source = 30;
    source = false;
    var list = [1, 2, 3];
    var listOne = ["we", "he", "me"];
    console.log("name is : " + name_1);
    console.log("age is : " + age);
    console.log("status is : " + status_1);
    console.log("source is : " + source);
    console.log("list is : " + list);
    console.log("listOne is : " + listOne);
}
