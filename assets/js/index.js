const shape = document.querySelector(".shape");

//角度の初期状態(0°)
let angle = 0;

function drawCircle() {
    //角度が365°未満のとき
    if( angle < 365 ) {
        //角度を2°ずつ増やす
        angle += 5;
        //角度をconic-gradientの角度に代入
        shape.style.backgroundImage = `conic-gradient(#0071BC ${angle}deg, white ${angle}deg)`;
        //requestAnimationFrameを再度呼び出す
        requestAnimationFrame(drawCircle);
    } else {
        console.log("アニメーションが終了しました");
    }
}

//アニメーションを開始
requestAnimationFrame(drawCircle);


$(window).on('load',function(){
  $("#splash-logo").delay(1100).fadeOut('slow');//ロゴを1秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(600).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
      $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
 //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() {    
      //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
      
});

