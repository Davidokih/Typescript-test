let digits = "0123456789";
let OTPCode = "";
for (let i = 0; i < 6; i++) {
    OTPCode += digits[ Math.floor(Math.random() * 10) ];
}
console.log(OTPCode);