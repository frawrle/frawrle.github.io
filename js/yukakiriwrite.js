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
    ctx.globalAlpha = 0.6;
    var kiri = ['結月ゆかり','東北きりたん','結月きりたん','終末','崩壊','東北三姉妹','ボイスロイド','宇宙','再帰','エスカトロジー',
'終焉','再構築','再起','ノアの箱舟','偽物','メモリリーク','ドロップアウト','バイナリ','初期化','審判',
'クリスマス','0×00','セカイの管理者','マリアージュ','アスター','ロールバック','断片','最果て','外なる神','ダストデータ','セカイの管理者','2つは1つ','破滅','反転','1DD6A','シラン','平穏',//5*7+2
'縲∝､ｧ莠','峨ｒ繝?く','励◆縲','☆繧九□','縲桟OICEROI','縺ｨ縺後〒','縺阪∪縺吶?','OID2縺ｧ','繧医≧縺ｪ邱ｨ髮?','焚',
'蛣膋諣肏','䥄㋣膧','蹖佉䍅剏䥄㈠','꟣膮','맣莈꟥薥','꣩鮆若辯','맣芒닣芊','艖佉','诣膓꣣膧','诣膓',
'????紊т査','???у?荅宴','??ゃ?鴻??','障???????障??','D2?с?','絖?茯㏍?推','喝０???','с??膂≦?','????','ф??篏?',
'､ｧ?ｺｺ?','ｧ?ｯｾ?','?ｫ??･?','ｳ?｣ｰ???','ｼ??ｿ???','ID2?ｵ??','ｪ?ｷｨ','ｰ??ｮ??ｳ','ｪｭ','ｯｾ?ｩｱ',
'吶?７OIC','縲∫ｰ｡蜊倥','↓隱ｭ縺ｿ荳','※繧九％','ｫ蛻･縲','譁ｰ縺溘','縺ｨ縺ｧ','髮?ｂ','阪ｋ繧医','､縺ｮ繝励Ο',
'OID2 }Pg','0団｡u(0','[?赫0n0?F0j}','阮ﾆ0４','0ｹ0坦r','0_QeR嫺','W姦0N','烈X?ﾇ','gdﾍO','S0h0L',
'｡ﾘVOIC','ﾆ･ｭ･ｹ･ﾈ','箚ﾄﾇｽ','ｿ｡｢ｰ?ｸ','､ﾟｾ螟ｲ､','愠ｰ･','鬣狎螟ﾇﾁ犲釥ｹ','荀?','熙ﾞ､ｷ､ｿ｡','ﾈ､ｬ､ﾇ､ｭ､ﾞ',
'潮湳楲','잤궤ꚤ쮤','쯆즤?','䕒佉䐲₷','잤릡ꍫ楲楴慮','ꎤ?뾡ꊰ뢤','?늤떤뮤','₷','ꎤ?','ꮤ쾡ꋂ'
,'ƂɕʁX','䂩??x','ǂݏグ?','삷?邱?','^?[??','悤?ȕҏW','ŁA?ȒP?ɓ','䂩??x?́','Ȃ','ő??Ƃ',
'ﾅ?ﾌ､','熙ｿ､ﾏｷ?','釥讀ｫ､熙','ﾎﾌｾ､ﾘ','ﾉ鬢ﾃ､ﾆ','ﾀｸ､ｭ','､ﾆ､讀ｯ','､讀ｫ､ｭ､','ｷ?釥','讀ｫ､'
,'縲∝､ｧ莠','峨ｒ繝?く','励◆縲','☆繧九□','縲桟OICEROI','縺ｨ縺後〒','縺阪∪縺吶?','OID2縺ｧ','繧医≧縺ｪ邱ｨ髮?','焚',
'蛣膋諣肏','䥄㋣膧','蹖佉䍅剏䥄㈠','꟣膮','맣莈꟥薥','꣩鮆若辯','맣芒닣芊','艖佉','诣膓꣣膧','诣膓',
'????紊т査','???у?荅宴','??ゃ?鴻??','障???????障??','D2?с?','絖?茯㏍?推','喝０???','с??膂≦?','????','ф??篏?',
'､ｧ?ｺｺ?','ｧ?ｯｾ?','?ｫ??･?','ｳ?｣ｰ???','ｼ??ｿ???','ID2?ｵ??','ｪ?ｷｨ','ｰ??ｮ??ｳ','ｪｭ','ｯｾ?ｩｱ',
'吶?７OIC','縲∫ｰ｡蜊倥','↓隱ｭ縺ｿ荳','※繧九％','ｫ蛻･縲','譁ｰ縺溘','縺ｨ縺ｧ','髮?ｂ','阪ｋ繧医','､縺ｮ繝励Ο',
'OID2 }Pg','0団｡u(0','[?赫0n0?F0j}','阮ﾆ0４','0ｹ0坦r','0_QeR嫺','W姦0N','烈X?ﾇ','gdﾍO','S0h0L',
'｡ﾘVOIC','ﾆ･ｭ･ｹ･ﾈ','箚ﾄﾇｽ','ｿ｡｢ｰ?ｸ','､ﾟｾ螟ｲ､','愠ｰ･','鬣狎螟ﾇﾁ犲釥ｹ','荀?','熙ﾞ､ｷ､ｿ｡','ﾈ､ｬ､ﾇ､ｭ､ﾞ',
'潮湳楲','잤궤ꚤ쮤','쯆즤?','䕒佉䐲₷','잤릡ꍫ楲楴慮','ꎤ?뾡ꊰ뢤','?늤떤뮤','₷','ꎤ?','ꮤ쾡ꋂ'
,'ƂɕʁX','䂩??x','ǂݏグ?','삷?邱?','^?[??','悤?ȕҏW','ŁA?ȒP?ɓ','䂩??x?́','Ȃ','ő??Ƃ',
'ﾅ?ﾌ､','熙ｿ､ﾏｷ?','釥讀ｫ､熙','ﾎﾌｾ､ﾘ','ﾉ鬢ﾃ､ﾆ','ﾀｸ､ｭ','､ﾆ､讀ｯ','､讀ｫ､ｭ､','ｷ?釥','讀ｫ､'];

    for (var i = 0; i < 20; i++) {
        var x = Math.floor(Math.random() * 1300);
        var y = Math.floor(Math.random() * 600);
        var r = Math.floor(Math.random() * 30);
        var s = kiri[Math.floor(Math.random() * 238)];

        ctx.font = "italic "+r+"px Yu Gothic UI"; // 文字フォント指定
        ctx.fillStyle = "rgb(255,255,255)"; // 塗りつぶしスタイル指定
        ctx.fillText(s, x, y, 200); // (文字,始点x,y,最大横幅)に文字を描画
    }

   
}
