var allOtp = '1234567890';
var otp = ''
for(var i =0; i<4; i++){
   otp += allOtp[Math.floor(Math.random()*10)];
}
alert(`OTP is ${otp} `);
document.querySelector("button").addEventListener('click', (e)=>{
   var a = document.querySelector('#qw1').value;
   var b = document.querySelector('#qw2').value;
   var c = document.querySelector('#qw3').value;
   var d = document.querySelector('#qw4').value;
   var abcd = a+b+c+d;
//    event.preventDefault();
   if(otp == abcd){
    e.preventDefault();
       alert('Payment Successful');
       window.location.href = 'carSearch.html';
       
   }else{
       alert('Wrong, Please Enter Correct OTP')
   }
})