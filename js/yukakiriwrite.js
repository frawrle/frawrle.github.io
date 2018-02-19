//HTMLが完全に読み込み終わってからdraw()を実行する
window.onload = function () {
    draw();
};

function draw () {
    var canvas = document.getElementById('yukakiric');
    if (!canvas || !canvas.getContext) return false;
    var ctx = canvas.getContext('2d');

    //ここからctx（Canvasオブジェクト）に対しての描画処理を書く
    // 任意の文字をランダム描画
    ctx.globalAlpha = 0.5;
    var kiri = ['結月ゆかり','東北きりたん','結月きりたん','終末','崩壊'];

    for (var i = 0; i < 3; i++) {
        var x = Math.floor(Math.random() * 1100);
        var y = Math.floor(Math.random() * 600);
        var r = Math.floor(Math.random() * 30);
        var s = kiri[Math.floor(Math.random() * 5)];

        ctx.font = "italic "+r+"px Verdana"; // 文字フォント指定
        ctx.fillStyle = "rgb(255,255,255)"; // 塗りつぶしスタイル指定
        ctx.fillText(s, x, y, 200); // (文字,始点x,y,最大横幅)に文字を描画
    }

   
}
