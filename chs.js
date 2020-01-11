/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Add to queue': '加入队列',
    'Agriculture': '农业',
    'Ancient Era': '上古时代',
    'Archer': '弓兵',
    'Archery': '箭术',
    'Armies': '军队',
    'Art': '艺术',
    'Artists': '艺人',
    'Attacks & Transfers': '进攻与运输',
    'AI attacks disabled': 'AI不进攻',
    'AI attacks enabled': 'AI会进攻',
    'AI attacks enabled but rare': 'AI会偶尔进攻',
    'AI attacks more frequent': 'AI会频繁进攻',
    'and provided': '并提供',
    'Auto-assign': '自动分配',
    'Available': '解锁',
    'Available for purchase': '允许购买',
    'Barabarian attacks disabled': '土著不进攻',
    'Barabarian attacks enabled': '土著会进攻',
    'Barabarian attacks more frequent': '土著会频繁进攻',
    'Barracks': '兵营',
    'Base': '基地',
    'Battle reports': '战斗报告',
    'Bronze Working': '青铜铸造',
    'Builders': '建造工人',
    'Building nothing': '没有在建造',
    'Buildings': '建筑',
    'Buy those useless items': '购买这些无用的东西',
    'Calendar': '日历',
    'Chest': '箱子',
    'Children': '小孩',
    'Cities & Citizens': '城市和市民',
    'City': '城市',
    'City-state': '城邦',
    'Classical Era': '古典时代',
    'Code of Honor': '荣耀守则',
    'Code of Laws': '法典',
    'Collective Rules': '集团规则',
    'Colonialism': '殖民主义',
    'completly free': '完全免费',
    'Continue': '继续',
    'Credits': '鸣谢',
    'Crop Rotation': '轮作',
    'Cultural Diplomacy': '文化外交',
    'Culture': '文化',
    'Culture & Social Policies': '文化和社会政策',
    'Current': '当前',
    'Date': '日志',
    'Defense': '防御',
    'Daily Bonus': '每日奖励',
    'Despotism': '独裁',
    'Destination': '目的地',
    'Difficulty': '难度',
    'Diplomacy': '外交',
    'Diplomacy & Trade': '外交与贸易',
    'Discipline': '纪律',
    'Dog domestication': '驯化狗',
    'Done': '完成',
    'Exclude': '不包括',
    'Exploration': '探索',
    'Export': '出口',
    'Farmers': '农夫',
    'Food': '食物',
    'Food, Health & Happiness': '食物，健康和幸福度',
    'Freepik': 'Freepik',
    'from': '从',
    'From': '从',
    'Gold': '黄金',
    'Granary': '粮仓',
    'Hardcore': '核心内容',
    'Help': '帮助',
    'Herding': '放牧',
    'Here you will find answers to all of your questions about this Game.': '你可以在这里找到一些对你有帮助的提示',
    'Holy Wars': '圣战',
    'Horseriding': '骑术',
    'However, if you wish to support it, you can still offer a gift !': '当然，如果你赞助本游戏，就可以获得一份礼物！',
    'Icons made by': '图片来源',
    'Idle': '放置',
    'Imperialism': '帝国主义',
    'in every city': '在所有城市',
    'in the Capital': '仅在首都',
    'In the footer of this page, you will see links to different pages related to your current page.': '在这个页面的底部，你可以看到前往不同页面的链接',
    'in this section': '在这个部分',
    'Justice': '正义',
    'Landed Elite': '地主阶级',
    'Language': '语言',
    'Literature': '文学',
    'Load an exported save': '导入游戏',
    'Load game': '加载存档',
    'Locked': '未解锁',
    'Longhouse': '长屋',
    'Mark all as read': '全部设为已读',
    'Masonry': '砖石结构',
    'Medieval Era': '中世纪',
    'Merchant Confederacy': '商人联盟',
    'Merchants': '商人',
    'Meritocracy': '精英统治',
    'Militarism': '军国主义',
    'Military buildings cost': '军事建筑消耗',
    'Military Tradition': '军事制度',
    'Mining': '采矿',
    'Miscelanous': '杂项',
    'Monarchy': '君主制',
    'Monument': '纪念碑',
    'Navigation': '导航',
    'New game': '新游戏',
    'No malus for Barbarians': 'No malus for Barbarians',
    'Normal': '普通',
    'Notifications': '通知',
    'Oligarchy': '寡头政治',
    'Options': '功能',
    'Organized Religion': '宗教组织',
    'Origin': '起源',
    'Pacifism': '和平主义',
    'Patriotism': '爱国主义',
    'Patronage': '赞助',
    'Peaceful': '和平',
    'Philantropy': '慈善活动',
    'Philosophy': '哲学',
    'Piety': '虔诚',
    'Population': '人口',
    'Pottery': '制陶',
    'Prehistoric Era': '史前时代',
    'Prevent growth': '抑制增长',
    'Priority': '优先',
    'Production': '生产',
    'Production & Buildings': '生产和建筑',
    'Professional Army': '专业军队',
    'Purchased': '购买',
    'Rationalism': '理性主义',
    'Recruiting nothing': '没有在招募',
    'Reduce troop maintenance in the Capital by half': '首都的部队维护费用减半',
    'Reformation': '改革',
    'Related': '相关的',
    'Monument': '纪念碑',
    'Navigation': '导航',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    'A new discovery': '新的发现',
    'A new citizen is available in': '一个新的市民出现在了',
    'A new feature has been unlocked': '一个新的功能被解锁了',
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    'Village': '村',
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);