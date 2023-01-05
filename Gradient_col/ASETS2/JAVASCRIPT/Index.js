const chars=
"0123456789123456789abcdefABCDEF";
$('button').click(function(){
   $random ='#';
   for(var i=0;i<6;i++)
       {
           $random+=chars.charAt(Math.floor(Math.random()*chars.length));
       }
    $('.input input').val($random)
    $('.col-lg-8').css('background',$random);
})