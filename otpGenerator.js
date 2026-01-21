function otpGenerator(num) {
  let otp = "";

  for (let i = 0; i < num; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

console.log("Your Otp is : ", otpGenerator(5));
