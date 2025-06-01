
let answer = +prompt('Enter your degree: ');

switch (true) {
  case (answer >= 0 && answer < 50):
    console.log("فاشل");
    break;
  case (answer >= 50 && answer < 65):
    console.log("مقبول");
    break;
  case (answer >= 65 && answer < 75):
    console.log("جيد");
    break;
  case (answer >= 75 && answer < 85):
    console.log("جيد جدا");
    break;
  case (answer >= 85 && answer <= 100):
    console.log("امتياز");
    break;
  default:
    console.log("درجة غير صالحة");
}


