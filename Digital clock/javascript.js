function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // to initialize outer circle 
    let ho=document.getElementById('hh');
    let mn=document.getElementById('mm');
    let se=document.getElementById('ss');
 
      // to initialize dote on circle to rotate
    let hr_dots=document.querySelector('.hr_dot');
    let min_dots=document.querySelector('.mn_dot');
    let sec_dots= document.querySelector('.se_dot');

    
    m = checkTime(m);
    s = checkTime(s);

    let am=h>=12?"PM":"AM";

    document.getElementById('hours').innerHTML =  h+"<br><span>Hours</span>";
    document.getElementById('minutes').innerHTML =  m+"<br><span>Minutes</span>";
    document.getElementById('seconds').innerHTML =  s+"<br><span>Seconds</span>";
    document.getElementById('ampm').innerHTML=am;

    setTimeout(startTime, 1000);

    // this is for color line 
   ho.style.strokeDashoffset=440-(440*h)/12;
   //12 hrs clock
   mn.style.strokeDashoffset=440-(440*m)/60;
   // 60 minutes
   se.style.strokeDashoffset=440-(440*s)/60;
   // 60 seconds

    // rotate our circle dot 
   let h_rotate = `rotate(${h*30}deg)`;
   // 360/12=30
   let m_rotate = `rotate(${m*6}deg)`;
      // 360/60=6
   let s_rotate = `rotate(${s*6}deg)`;
      // 360/60=6
   hr_dots.style.transform=h_rotate;
   min_dots.style.transform=m_rotate;
   sec_dots.style.transform=s_rotate;

  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }