// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    //ARCHIVE https://telegra.ph/APIs-08-12
    lbzy: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '🔞乐播资源',
        adult: true
    },
    askzy: {
        api: 'https://aosikazy.com/api.php/provide/vod',
        name: '🔞奥斯卡',
        adult: true
    },
    r155: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '🔞155',
        adult: true
    },
    fhzy: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '🔞番号',
        adult: true
    },
    AIvinzy: {
        api: 'http://lbapiby.com/api.php/provide/vod',
        name: '🔞AIvin',
        adult: true
    },
    ddzy: {
        api: 'https://api.ddapi.cc/api.php/provide/vod/at',
        name: '🔞滴滴资源',
        adult: true
    },
     ckzy: {
         api: 'https://www.ckzy1.com/api.php/provide/vod',
         name: '🔞CK资源',
         adult: true
     },
     jkun: {
         api: 'https://jkunzyapi.com/api.php/provide/vod',
         name: '🔞鸡坤资源',
         adult: true
     },
     bwzy: {
         api: 'https://api.bwzym3u8.com/api.php/provide/vod',
         name: '🔞百万资源',
         adult: true
     },
     souav: {
         api: 'https://api.souavzy.vip/api.php/provide/vod',
         name: '🔞搜av资源',
         adult: true
     },
     lsb: {
         api: 'https://apilsbzy1.com/api.php/provide/vod',
         name: '🔞老色逼资源',
         adult: true
     },
     huangcang: {
         api: 'https://hsckzy.vip/api.php/provide/vod',
         name: '🔞黄色仓库',
         adult: true,
         detail: 'https://hsckzy.vip/api.php/provide/vod'
     },
     yutu: {
         api: 'https://yutuzy10.com/api.php/provide/vod',
         name: '🔞玉兔资源',
         adult: true
     },
    slzy: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: '🔞森林',
        adult: true
    },
    dnzzy: {
        api: 'https://apidanaizi.com/api.php/provide/vod',
        name: '🔞大奶子资源',
        adult: true
    },
    xjzy: {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '🔞小鸡资源',
        adult: true
    },
    xbzy: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '🔞细胞网资源',
        adult: true
    },
    kbzy: {
        api: 'https://gayapi.com/api.php/provide/vod',
        name: '🔞快播资源',
        adult: true
    },
    thzy: {
        api: 'https://thzy1.me/api.php/provide/vod',
        name: '🔞桃花资源',
        adult: true
    },  
    jpzy: {
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        name: '🔞精品资源',
        adult: true
    },
    xfzy: {
        api: 'https://xzybb2.com/api.php/provide/vod',
        name: '🔞幸资源',
        adult: true
    },
    r91zy: {
        api: 'https://91jpzyw.com/api.php/provide/vod',
        name: '🔞91资源',
        adult: true
    },
    fqzy: {
        api: 'https://fqzy.me/api.php/provide/vod',
        name: '🔞番茄资源',
        adult: true
    },
    xbzy: {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '🔞杏吧资源',
        adult: true
    },
    yyzy: {
        api: 'https://yyzywcj.com/api.php/provide/vod',
        name: '🔞优优资源',
        adult: true
    },
    swzy: {
        api: 'https://siwazyw.tv/api.php/provide/vod',
        name: '🔞丝袜资源',
        adult: true
    },  
    jpzy: {
        api: 'https://doudouzy.com/api.php/provide/vod',
        name: '🔞豆豆资源',
        adult: true
    }，
    shg: {
        api: 'https://api.sexnguon.com/api.php/provide/vod',
        name: '🔞色嗨国',
        adult: true
    },  
    xxbzy: {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '🔞性吧资源',
        adult: true
    }
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
