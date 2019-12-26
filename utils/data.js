function getIndexNavData(){
  var arr = [
    {
      id: 1,
      title: "欢乐零食"
    },
    {
      id: 2,
      title: "咖啡有你"
    },
    {
      id: 3,
      title: "精致小饮"
    },
    {
      id: 4,
      title: "杯酒人生"
    },
    {
      id: 5,
      title: "精巧时光"
    },
    {
      id: 6,
      title: "好茶相伴"
    }
  ]
  return arr
}

function getGiftList(){
  var arr = [
    {
      type: '28',
      count: 4,
      goods: [
        {
          id: 0,
          money: 19,
          image: "../../images/banli.png"
        },
        {
          id: 1,
          money: 21.5,
          image: "../../images/banli.png"
        },
        {
          id: 2,
          money: 25.5,
          image: "../../images/banli.png"
        },
        {
          id: 3,
          money: 27.5,
          image: "../../images/banli.png"
        }
      ],
    },
    {
      type: '68',
      count: 4,
      goods: [
        {
          id: 0,
          money: 58,
          image: "../../images/banli.png"
        },
        {
          id: 1,
          money: 59,
          image: "../../images/banli.png"
        },
        {
          id: 2,
          money: 68,
          image: "../../images/banli.png"
        },
        {
          id: 3,
          money: 62.7,
          image: "../../images/banli.png"
        }
      ],
    },
    {
      type: '128',
      count: 4,
      goods: [
        {
          id: 0,
          money: 128,
          image: "../../images/banli.png"
        },
        {
          id: 1,
          money: 106,
          image: "../../images/banli.png"
        },
        {
          id: 2,
          money: 108,
          image: "../../images/banli.png"
        },
        {
          id: 3,
          money: 122.7,
          image: "../../images/banli.png"
        }
      ],
    }
  ]
  return arr
}

function getGiftDetail(){
  var t = {
    id: 1,
    image: '../../images/xiangqing.jpg'
  }
  return t
}

/*
 * 对外暴露接口
 */
module.exports = {
  getIndexNavData: getIndexNavData,
  getGiftList: getGiftList,
  getGiftDetail: getGiftDetail
}
