let answer = +prompt('Enter your degree');

if (answer >= -1) {
  if (answer <= 100) {
    if (answer < 50) {
      console.log("فاشل");
    } else if (answer < 65) {
      console.log("مقبول");
    } else if (answer < 75) {
      console.log("جيد");
    } else if (answer < 85) {
      console.log("جيد جدا");
    } else {
      console.log("امتياز");
    }
  } else {
    console.log("درجة غير صالحة");
  }
} else {
  console.log("درجة غير صالحة");
}
