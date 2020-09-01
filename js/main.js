$("#main").height($(window).height());
$('#title').height($(window).height());
$('#title').fadeOut(3000, function() {
    $("#main").animate({
        top: '-=1080px',
        opacity: '+=1'
    }, 3000);
});

/*
    TODO: rkd,lfy,lxr,zyf,
*/
var classData = [{
        p: '黑龙江',
        cd: [127.42, 46.04],
        name: '龙英池',
        phone: 18909026790,
        university: '哈尔滨工业大学',
        image: 'image://img/lyc.jpg',
        qq: 847072154
    },
    {
        p: '上海',
        cd: [121.411138,31.2351],
        name: '唐萍',
        phone: 17313404716,
        university: '华东师范大学',
        image: 'image://img/tp.jpg',
        qq:2509916389
    },
    {
        p: '广东',
        cd: [113.412217,23.065581],
        name: '周坤霖',
        phone: 15984916158,
        university: '广州中医药大学',
        image: 'image://img/zkl.jpg',
        qq:1071416051
    },
    {
        p: '四川',
        cd: [104.105145,30.662814],
        name: '曾飞扬',
        phone: 18161316315,
        university: '四川大学',
        image: 'image://img/zfy.jpg',
        qq:2120385286
    },
    {
        p: '四川',
        cd: [104.005145,30.562814],
        name: '刘羽樊',
        phone: 18161316315,
        university: '四川大学',
        image: 'image://img/lyf.jpg',
        qq:2120385286
    },
    { // UNDO
        p: '辽宁',
        cd: [123.424477,41.770971],
        name: '严俊涵',
        phone: 18280572247,
        university: '东北大学',
        image: 'image://img/yjh.jpg',
        qq:359360997
    },
    {
        p: '福建',
        cd: [118.651759,24.940229],
        name: '王苒蓓',
        phone: 13388122206,
        university: '华侨大学',
        image: 'image://img/wrb.jpg',
        qq:877946392
    },

    { // 杭州
        p: '浙江',
        cd: [120.369036,30.327401],
        name: '楚紫涵',
        phone: 15283878659,
        university: '中国计量大学',
        image: 'image://img/czh.jpg',
        qq:937914994
    },
    { // 西安
        p: '陕西',
        cd: [108.881104,34.150915],
        name: '张艺佳',
        phone: 18016131655,
        university: '西北大学',
        image: 'image://img/zyj_.jpg',
        qq:3459847640
    },
    {
        p: '北京',
        cd: [116.276079,40.16096],
        name: '张逸君',
        phone: 18227154325,
        university: '北京航空航天大学',
        image: 'image://img/zyj.jpg',
        qq:3152632593
    },
    {
        p: '北京',
        cd: [116.176079,40.16096],
        name: '谢昳旸',
        phone: 15181016860,
        university: '北京航空航天大学',
        image: 'image://img/xyy.jpg',
        qq:1277376499
    },
    {
        p: '江苏',
        cd: [118.826737,32.041196],
        name: '龙翔',
        phone: 18283812718,
        university: '南京航空航天大学',
        image: 'image://img/lx.png',
        qq:745046893
    },
    {
        p: '江苏',
        cd: [118.964891,32.125421],
        name: '余灏沣',
        phone: 18090778797,
        university: '南京大学',
        image: 'image://img/yhf.jpg',
        qq:2087953253
    },
    {
        p: '福建',
        cd: [118.322492,24.617041],
        name: '李熠曌',
        phone: 15181026625,
        university: '厦门大学',
        image: 'image://img/lyz.jpg',
        qq:1095476766
    },
    {
        p: '四川',
        cd: [104.329006,30.947931],
        name: '黄禹铮',
        phone: 13350586161,
        university: '中国民航飞行学院',
        image: 'image://img/hyz.jpg',
        qq:1599725195
    },
    {
        p: '广东',
        cd: [113.942448,22.75448],
        name: '郭亭妍',
        phone: 15281453293,
        university: '中山大学',
        image: 'image://img/gty.jpg',
        qq:1123354683
    },
    {
        p: '河北',
        cd: [119.530532,39.91727],
        name: '匡天立',
        phone: 13541718243,
        university: '燕山大学',
        image: 'image://img/ktl.jpg',
        qq:1160265842
    },
    {
        p: '四川',
        cd: [103.81401,30.692594],
        name: '陈慧乔',
        phone: 18980102179,
        university: '成都中医药大学',
        image: 'image://img/chq.jpg',
        qq:2556367939
    },
    {
        p: '重庆',
        cd: [106.427846,29.820011],
        name: '李栋',
        phone: 18113610299,
        university: '西南大学',
        image: 'image://img/ld.jpg',
        qq:857356002
    },
    {
        p: '北京',
        cd: [116.295299,40.163661],
        name: '杨轲',
        phone: 18011056987,
        university: '北京邮电大学',
        image: 'image://img/yk.jpg',
        qq:2153813796
    },
    {
        p: '四川',
        cd: [103.905145,30.962814],
        name: '张雨',
        phone: 18284232200,
        university: '四川大学',
        image: 'image://img/zy.jpg',
        qq:2324172846
    },
    {
        p: '陕西',
        cd: [108.771709,34.039191],
        name: '赵云飞',
        phone: 18781091391,
        university: '西北工业大学',
        image: 'image://img/zyf.jpg',
        qq:2651537511
    },
    {
        p: '四川',
        cd: [103.21401,30.692594],
        name: '陈梦琪',
        phone: 15183817701,
        university: '成都中医药大学',
        image: 'image://img/cmq.jpg',
        qq:2603268178
    },
    {
        p: '重庆',
        cd: [106.305533,29.598859],
        name: '冉宝宝',
        phone: 18227112128,
        university: '重庆大学',
        image: 'image://img/rbb.jpg',
        qq:1849871698
    },
    {
        p: '北京',
        cd: [116.333374,40.009645],
        name: '房福婉扬',
        phone: 17341802007,
        university: '清华大学',
        image: 'image://img/ffwy.jpg',
        qq:515612997
    },
    {
        p: '四川',
        cd: [103.468251,30.910901],
        name: '许可',
        phone: 18090796106,
        university: '四川农业大学',
        image: 'image://img/xk.jpg',
        qq:949020896
    },
    {
        p: '湖北',
        cd: [114.419826,30.518754],
        name: '刘欣荣',
        phone: 13309026577,
        university: '华中科技大学',
        image: 'image://img/lxr_.jpg',
        qq:1459036167
    },
    {
        p: '湖北',
        cd: [114.308533,30.525762],
        name: '蒋浩洋',
        phone: 18090779375,
        university: '中国地质大学（武汉）',
        image: 'image://img/jhy.jpg',
        qq:1274890881
    },
    {
        p: '四川',
        cd: [103.527675,30.687832],
        name: '吕思勉',
        phone: 15984948919,
        university: '西南财经大学',
        image: 'image://img/lsm.jpg',
        qq:1577396843
    },
    {
        p: '河北',
        cd: [115.521395,38.89183],
        name: '李文轩',
        phone: 15884283050,
        university: '华北电力大学',
        image: 'image://img/lwx.jpg',
        qq:1060968929
    },
    {
        p: '四川',
        cd: [114.509474,36.861127],
        name: '曾云峰',
        phone: '15386673989',
        university: '电子科技大学',
        image: 'image://img/zyf_.jpg',
        qq:2332098852
        },
        {
        p: '四川',
        cd: [104.153661,30.681403],
        name: '彭昊',
        phone: '15283836192',
        university: '成都理工大学',
        image: 'image://img/ph.jpg',
        qq:1971524854
        },
        {
        p: '四川',
        cd: [104.053661,30.581403],
        name: '李飞杨',
        phone: '15282892398',
        university: '成都理工大学',
        image: 'image://img/lfy.jpg',
        qq:2099418442
        },
        {
        p: '四川',
        cd: [116.413384,39.910925],
        name: '任凯迪',
        phone: '15883694317',
        university: '四川大学',
        image: 'image://img/rkd.jpg',
        qq:2693607227
        },
        {
        p: '武汉',
        cd: [114.248801,30.582115],
        name: '李欣锐',
        phone: '15282846131',
        university: '海军工程大学',
        image: 'image://img/lxr.jpg',
        qq:2196428421
        },
        {
        p: '河北',
        cd: [115.421395,38.99183],
        name: '王璐',
        phone: '18981059236',
        university: '华北电力大学',
        image: 'image://img/wl.jpg',
        qq:1398836681
        },
        {
        p: '四川',
        cd: [104.949003,29.188775],
        name: '涂吉尔',
        phone: '18383871942',
        university: '自贡衡水',
        image: 'image://img/tje.jpg',
        qq:1649497289
        },
        {
            p: '浙江',
            cd: [120.145067,30.29149],
            name: '王建杰',
            phone: '15228498017',
            university: '浙江工商大学',
            image: 'image://img/wjj.jpg',
            qq:2514559477
            },
];

function convertData(data, name) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        stu = data[i];
        if (stu.p == name) {
            res.push({
                name: stu.name,
                value: stu.cd.concat(stu.stuNum),
                symbol: stu.image,
            });
        }

    }
    return res;
};
var myChart = echarts.init(document.getElementById('main'));


var option = {
    title: {
        text: '20班蹭饭地图-----电子同学录',
        show: false
    },
    tooltip: {},

    visualMap: {
        left: 'right',
        min: 0,
        max: 8,
        inRange: {
            color: ['#f0f0f0', '#e0f3f8', '#abd9e9', '#74add1', '#4373b1', '#313695', ]
        },
        text: ['饭点多!!!', '饭点少-_-'],
        calculable: true
    },

    geo: {
        map: 'china',
        roam: false,
        emphasis: {
            itemStyle: {
                areaColor: '#CCFFFF',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            label: {
                show: false
            }
        }
    },
    series: [{
        name: '可蹭饭人数',
        type: 'map',
        geoIndex: 0,
        data: [{
                name: '河北',
                value: 3
            },
            {
                name: '山西',
                value: 0
            },
            {
                name: '辽宁',
                value: 1
            },
            {
                name: '吉林',
                value: 0
            },
            {
                name: '黑龙江',
                value: 1
            },
            {
                name: '江苏',
                value: 2
            },
            {
                name: '浙江',
                value: 1
            },
            {
                name: '安徽',
                value: 0
            },
            {
                name: '福建',
                value: 2
            },
            {
                name: '江西',
                value: 0
            },
            {
                name: '山东',
                value: 0
            },
            {
                name: '河南',
                value: 0
            },
            {
                name: '湖北',
                value: 5
            },
            {
                name: '湖南',
                value: 0
            },
            {
                name: '广东',
                value: 2
            },
            {
                name: '海南',
                value: 0
            },
            {
                name: '四川',
                value: 9
            },
            {
                name: '贵州',
                value: 0
            },
            {
                name: '云南',
                value: 0
            },
            {
                name: '陕西',
                value: 2
            },
            {
                name: '甘肃',
                value: 0
            },
            {
                name: '青海',
                value: 0
            },
            {
                name: '台湾',
                value: 0
            },
            {
                name: '内蒙古',
                value: 0
            },
            {
                name: '广西',
                value: 0
            },
            {
                name: '西藏',
                value: 0
            },
            {
                name: '宁夏',
                value: 0
            },
            {
                name: '新疆',
                value: 0
            },
            {
                name: '北京',
                value: 4
            },
            {
                name: '上海',
                value: 1
            },
            {
                name: '天津',
                value: 0
            },
            {
                name: '重庆',
                value: 2
            },
            {
                name: '香港',
                value: 0
            },
            {
                name: '澳门',
                value: 19
            },
            {
                name: '哈尔滨市',
                value: 1
            },
            {
                name: '普陀区',
                value: 1
            },
            {
                name:'广州市',
                value: 1
            },
            {
                name:'泉州市',
                value: 1
            },
            {
                name:'西安市',
                value: 2
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
var startResChart = JSON.parse(JSON.stringify(option));
myChart.setOption(option);
myChart.on('click', function(params) {
    if (option.geo.map == 'china') {
        option.geo.map = params.name;
        option.visualMap.max = 2;
        option.series[1] = {
            type: 'scatter',
            tooltip: {
                formatter: function(params, ticket, callback) {
                    var classMate;
                    for (var i = 0; i < classData.length; i++) {
                        if (classData[i].name == params.data.name) {
                            classMate = classData[i];
                        }
                    }
                    return '蹭饭同学:  ' + classMate.name + '<br />  大学:  ' + classMate.university + '<br /> 电话:  ' + classMate.phone + '<br />QQ:  ' + classMate.qq;
                }

            },
            coordinateSystem: 'geo',
            data: convertData(classData, params.name),
            encode: {
                value: 2
            },
            symbolSize: 20,
            symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            symbolRotate: 0,
            label: {
                formatter: '{b}',
                position: 'right',
                show: false,
                fontFamily: '仿宋',
                color: '#FF6600',
            },
            itemStyle: {
                color: '#006F00',
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        }
    }
    myChart.setOption(option);

});

function back() {
    option = JSON.parse(JSON.stringify(startResChart));
    myChart.setOption(option, true);

}
$(window).resize(function() {
    myChart.resize();
});
