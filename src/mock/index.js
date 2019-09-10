import Mock from 'mockjs';

Mock.mock('/api/dataView','get',{   //圆形进度条
    code: 200,
    msg: 'success',
    'data|3': [
        {
            endNum: '@integer( 1000, 100000 )',
            allNum: '@integer( 0%, 100% )',
        }
    ]
});

Mock.mock('/api/citys','get',{   //城市
    code: 200,
    msg: 'success',
    'data|20': [
        {
            word:'@city()',
            count: '@integer( 0, 100 )',
        }
    ]
});
