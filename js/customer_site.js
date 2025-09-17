const CUSTOMER_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '🔵电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '🔵如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '🔵暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '🔵天涯资源',
    },
    ffy: {
         api: 'https://cj.ffzyapi.com/api.php/provide/vod',
         name: '🔵非凡源',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '🔵黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '🔵360资源',
    },
    tyzy: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod',
        name: '🔵天翼资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '🔵卧龙资源',
    }, 
    smzy: {
        api: 'https://img.smdyw.top/api.php/provide/vod',
        name: '🔵神马资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '🔵极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '🔵豆瓣资源',
    },
    gszy: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '🔵光速资源',
    },	
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '🔵魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '🔵最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '🔵樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '🔵百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '🔵无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '🔵旺旺短剧'
    },
    xlzy: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '🔵新浪资源'
    },	
    muodou: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '🔵墨斗'
    },
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '🔵红牛'
    },
    shandian: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '🔵闪电资源'
    },
    lzzy: {
        api: 'https://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '🔵量子'
    },
    nn: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: '🔵牛牛'
    },
    snzy: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: '🔵索尼'
    },
    hhzy: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '🔵豪华'
    },
    yyzy: {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: '🔵丫丫'
    },
   mtzy: {
        api: 'https://mtzy0.com/api.php/provide/vod',
        name: '🔵茅台资源'
    },
     jyzy: {
        api: 'https://jinyingzy.com/api.php/provide/vod',
        name: '🔵金鹰资源'
    },
     aqyys: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: '🔵爱奇艺影视'
    },
    xmmzy: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '🔵小猫咪资源'
    },
   nnzy: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: '🔵飘零资源'
    },
    hyzy: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '🔵虎牙'
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
