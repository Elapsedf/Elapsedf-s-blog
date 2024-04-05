// $(function(){
//    // 监听游戏开始
//    $(".start").click(function(){
//        $(".start").stop().fadeOut(100);
//        // use the loading bar
//        progressHandler();
//        // start the animation
//        startWolfAnimation();
//    });
//    // 监听游戏规则
//    $(".rules").click(function(){
//        $(".rule").stop().fadeIn(100);  //  does not show at first
//    });
//    // 监听游戏规则关闭
//    $(".close").click(function(){
//        $(".rule").stop().fadeOut(100);  //  does not show at first
//    });

//    $(".reStart").click(function(){
//       $(".mask").stop().fadeOut(100);
//       // 清空分数
//       $(".score").text("0");
//       // 重新开始游戏
//       $(".start").fadeIn(100);
//   });
// })

// function progressHandler(){
//    // reset the progress bar
//    $(".progress").css({width:180});
//    var timer;
//    clearInterval(timer);
//    // start the timer
//    timer = setInterval(function(){
//        // get the progress bar
//        var progressWidth = $(".progress").width();
//        progressWidth -= 1;
//        $(".progress").css({width:progressWidth});
//        // prejuduge the progress bar whether run out or no

//        if (progressWidth <= 0){
//            clearInterval(timer);
//            $(".mask").stop().fadeIn(100);
//            // stop the wolf animation
//            stopWolfAnimation();
//        }
//    }, 100)
// }
// var wolfTimer;
// // start animation
// function startWolfAnimation(){
//    // store image
//    var wolf_1 = ['./images/h0.png', './images/h1.png', './images/h2.png', './images/h3.png', './images/h4.png', './images/h5.png', './images/h6.png','./images/h7.png','./images/h8.png', './images/h9.png']
//    var arrPos = [
//        {left: "100px", top: "115px"},
//        {left: "20px", top: "160px"},
//        {left: "190px", top: "142px"},
//        {left: "105px", top: "193px"},
//        {left: "19px", top: "221px"},
//        {left: "202px", top: "212px"},
//        {left: "120px", top: "275px"},
//        {left: "30px", top: "295px"},
//        {left: "209px", top: "297px"},
//    ];
//    // create a image
//    var $wolfImg = $("<img src ='' class = 'wolfImg' >")
//    // set the position
//    var posIndex = Math.floor(Math.random() *9)
//    $wolfImg.css({
//        position: "absolute", 
//        left: arrPos[posIndex].left,
//        top: arrPos[posIndex].top,
//        cursor: "pointer"
//    });
//    // set the content of the image
//    window.wolfIndex = 0;
//    window.wolfIndexEnd = 5;
//    clearInterval(wolfTimer);
//    wolfTimer = setInterval(function(){
//        if (wolfIndex >= wolfIndexEnd){
//            $wolfImg.remove();
//            clearInterval(wolfTimer);
//            startWolfAnimation();
//        }
//        $wolfImg.attr("src", wolf_1[wolfIndex]);
//        wolfIndex ++;
//    }, 200);
//    // add the image to the page
//    $('.container').append($wolfImg);
//    // call the game rules
//    gameRules($wolfImg);
// }

// function gameRules($wolfImg){
//    $wolfImg.one("click", function(){
//        window.wolfIndex = 5;
//        window.wolfIndexEnd = 9 ;
//        // hit the wolf
//        $(".score").text(parseInt($(".score").text()) + 10);

//    });
// }
// function stopWolfAnimation(){
//    $(".wolfImg").remove();
//    clearInterval(wolfTimer);
// //    $("reStart").click(function(){
      
// //   });
// }

$(function(){
   // 监听游戏开始
   $(".start").click(function(){
       $(".start").stop().fadeOut(100);
       // use the loading bar
       progressHandler();
       // start the animation
       startAnimalAnimation();
   });

   // 监听游戏规则
   $(".rules").click(function(){
       $(".rule").stop().fadeIn(100);  //  does not show at first
   });

   // 监听游戏规则关闭
   $(".close").click(function(){
       $(".rule").stop().fadeOut(100);  //  does not show at first
   });

   // 监听重新开始游戏
   $(".reStart").click(function(){
       $(".mask").stop().fadeOut(100);
       // 清空分数
       $(".score").text("0");
       // 重新开始游戏
       $(".start").fadeIn(100);
   });
});

function progressHandler(){
   // reset the progress bar
   $(".progress").css({width:180});
   var timer;
   clearInterval(timer);
   // start the timer
   var reward_score = 50
   timer = setInterval(function(){
       // get the progress bar
       var progressWidth = $(".progress").width();
       progressWidth -= 1; // 每0.16s减少1像素
       $(".progress").css({width:progressWidth});
       // prejuduge the progress bar whether run out or no

       if (progressWidth <= 0){
           clearInterval(timer);
           $(".mask").stop().fadeIn(100);
           // stop the animal animation
           stopAnimalAnimation();
       }
       if (parseInt($(".score").text()) == reward_score) {
         $(".progress").css({width: $(".progress").width() + 6}); 
         reward_score += 50
         // $(".progress").css({width:progressWidth});
      }
       
   }, 167); // 每0.16秒执行一次
   // 每到50分加1s
   
}

var animalTimer;

// start animation
function startAnimalAnimation(){
   var animals = ['./images/h0.png', './images/h1.png', './images/h2.png', './images/h3.png', './images/h4.png', './images/h5.png', './images/h6.png','./images/h7.png','./images/h8.png', './images/h9.png',
   './images/x0.png', './images/x1.png', './images/x2.png', './images/x3.png', './images/x4.png', './images/x5.png', './images/x6.png','./images/x7.png','./images/x8.png', './images/x9.png']; // 加入小灰灰图片
   var wolves = ['./images/h0.png', './images/h1.png', './images/h2.png', './images/h3.png', './images/h4.png', './images/h5.png', './images/h6.png','./images/h7.png','./images/h8.png', './images/h9.png'];
   var littleWolves = ['./images/x0.png', './images/x1.png', './images/x2.png', './images/x3.png', './images/x4.png', './images/x5.png', './images/x6.png','./images/x7.png','./images/x8.png', './images/x9.png'];

   var arrPos = [
       {left: "100px", top: "115px"},
       {left: "20px", top: "160px"},
       {left: "190px", top: "142px"},
       {left: "105px", top: "193px"},
       {left: "19px", top: "221px"},
       {left: "202px", top: "212px"},
       {left: "120px", top: "275px"},
       {left: "30px", top: "295px"},
       {left: "209px", top: "297px"},
   ];
   // create a image
   var $animalImg = $("<img src ='' class = 'animalImg' >")
   // set the position
   var posIndex = Math.floor(Math.random() *9)
   var animaltype = Math.floor(Math.random() * 2)  // wolves or littlewolves
   $animalImg.css({
       position: "absolute", 
       left: arrPos[posIndex].left,
       top: arrPos[posIndex].top,
       cursor: "pointer"
   });
   // set the content of the image
   window.animalIndex = 0;
   window.animalIndexEnd = 5;
   clearInterval(animalTimer);
   animalTimer = setInterval(function(){
      if (animalIndex >= animalIndexEnd){
         $animalImg.remove();
         clearInterval(animalTimer);
         startAnimalAnimation();
      }
      if (animaltype == 0){
         $animalImg.attr("src", wolves[animalIndex]); }
      else{
         $animalImg.attr("src", littleWolves[animalIndex]);}
      animalIndex ++;
   }, 334);
   // add the image to the page
   $('.container').append($animalImg);
   // call the game rules
   gameRules($animalImg);
}

function gameRules($animalImg){
   $animalImg.one("click", function(){
      window.animalIndex = 5;
      window.animalIndexEnd = 9 ;
      var currentScore = parseInt($(".score").text());
      // 判断点击的是灰太狼还是小灰灰
      if($animalImg.attr("src").includes("h")) {
         $(".score").text(currentScore + 10); // 点击灰太狼加10分
      } else if ($animalImg.attr("src").includes("x")) {
         $(".score").text(currentScore - 10); // 点击小灰灰扣10分
      }
      // 设置得分不能为负数
      // if(parseInt($(".score").text()) < 0) {
      //    $(".score").text("0");
      // }
   });
}

function stopAnimalAnimation(){
   $(".animalImg").remove();
   clearInterval(animalTimer);
}
