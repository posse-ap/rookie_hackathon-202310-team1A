//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 4,//進捗ゲージの太さ
  color: '#0071BC',//進捗ゲージのカラー
  trailWidth: 4,//ゲージベースの線の太さ
  trailColor: '#bbb',//ゲージベースの線のカラー
  svgStyle: {width: '80%', height: '10px'},
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'2rem',
      color: '#0071',
      textShadow:'1px 1px 0 #bbb, -1px -1px 0 #bbb,-1px 1px 0 #bbb, 1px -1px 0 #bbb,0px 1px 0 #bbb,  0-1px 0 #bbb,-1px 0 0 #bbb, 1px 0 0 #bbb',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  
