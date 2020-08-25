$("#main").height($(window).height());
$('#title').height($(window).height());
$('#title').fadeOut(3000, function() {
    $("#main").animate({
        top: '-=1080px',
        opacity: '+=1'
    }, 3000);
});


var classData = [{
        p: '黑龙江',
        cd: [127.42, 46.04],
        name: '龙英池',
        phone: 18909026790,
        university: '哈尔滨工业大学',
        image: 'image://img/hgd.jpg',
        qq: 847072154,
    }

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
        text: '20班蹭饭地图-----电子备忘录',
        show: false
    },
    tooltip: {},

    visualMap: {
        left: 'right',
        min: 0,
        max: 20,
        inRange: {
            color: ['#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695', ]
        },
        text: ['High', 'Low'],
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
                value: 9
            },
            {
                name: '山西',
                value: 9
            },
            {
                name: '辽宁',
                value: 3
            },
            {
                name: '吉林',
                value: 7
            },
            {
                name: '黑龙江',
                value: 8
            },
            {
                name: '江苏',
                value: 17
            },
            {
                name: '浙江',
                value: 7
            },
            {
                name: '安徽',
                value: 14
            },
            {
                name: '福建',
                value: 8
            },
            {
                name: '江西',
                value: 19
            },
            {
                name: '山东',
                value: 12
            },
            {
                name: '河南',
                value: 13
            },
            {
                name: '湖北',
                value: 3
            },
            {
                name: '湖南',
                value: 9
            },
            {
                name: '广东',
                value: 1
            },
            {
                name: '海南',
                value: 18
            },
            {
                name: '四川',
                value: 9
            },
            {
                name: '贵州',
                value: 3
            },
            {
                name: '云南',
                value: 13
            },
            {
                name: '陕西',
                value: 2
            },
            {
                name: '甘肃',
                value: 16
            },
            {
                name: '青海',
                value: 5
            },
            {
                name: '台湾',
                value: 18
            },
            {
                name: '内蒙古',
                value: 16
            },
            {
                name: '广西',
                value: 1
            },
            {
                name: '西藏',
                value: 19
            },
            {
                name: '宁夏',
                value: 16
            },
            {
                name: '新疆',
                value: 19
            },
            {
                name: '北京',
                value: 8
            },
            {
                name: '上海',
                value: 11
            },
            {
                name: '天津',
                value: 3
            },
            {
                name: '重庆',
                value: 15
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
                value: 10
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
                    return '蹭饭同学:' + classMate.name + '<br />  大学:' + classMate.university + '<br /> 电话:' + classMate.phone + '<br />QQ:' + classMate.qq;
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
