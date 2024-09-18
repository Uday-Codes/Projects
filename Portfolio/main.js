
var typed = new Typed(".text", {
  strings:["Learner",":)", ":)"],
  typeSpeed :100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
(function(){
  var doc = document.documentElement;
  var w = window;
  var curScroll = prevScroll = w.scrollY || doc.scrollTop;
  var curDirection = prevDirection = 0;
  var header = document.getElementById('site-header');
  var checkScroll = function(){
    currScroll = w.scrollY || doc.scrollTop;
    if(currScroll > prevScroll)
    {
      curDirection = 2;
    }
    else{
      curDirection = 1;
    }
    if(curDirection !== prevDirection)
    {
      toggleHeader();
    }
    prevDirection = curDirection;
    prevScroll = currScroll;
  };
  var toggleHeader =  function(){
    if(curDirection === 2)
    {
      header.classList.add('hide');
    }
    else if(curDirection  === 1)
    {
      header.classList.remove('hide');
    }
  }
  window.addEventListener('scroll', checkScroll);

})();

// i dont need captcha
