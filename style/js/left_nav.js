
  //logo触发动画
    $(document).ready(function(){
      $('#logo_img').mouseover(function(){
        $('#logo_img').addClass('animated  rubberBand');
        //监听执行一次
        $('#logo_img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$('#logo_img').removeClass('animated  rubberBand');});
      });
    });

    //新浪微博触发动画
    $(document).ready(function(){
      $('#sinasite').mouseover(function(){
        $('#sinasite').addClass('animated  tada');
        //监听执行一次
        $('#sinasite').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$('#sinasite').removeClass('animated  tada');});
      });
    });

    //博主邮箱触发动画
    $(document).ready(function(){
      $('#emailsite').mouseover(function(){
        $('#emailsite').addClass('animated  tada');
        //监听执行一次
        $('#emailsite').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$('#emailsite').removeClass('animated  tada');});
      });
    });

    //新浪微博触发动画
    $(document).ready(function(){
      $('#appsite').mouseover(function(){
        $('#appsite').addClass('animated  tada');
        //监听执行一次
        $('#appsite').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$('#appsite').removeClass('animated  tada');});
      });
    });

    //新浪微博触发动画
    $(document).ready(function(){
      $('#githubsite').mouseover(function(){
        $('#githubsite').addClass('animated  tada');
        //监听执行一次
        $('#githubsite').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$('#githubsite').removeClass('animated  tada');});
      });
    });
