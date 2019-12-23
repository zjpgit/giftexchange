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
      type: '28元档',
      count: 4,
      goods: [
        {
          money: 19,
          image: "../../images/banli.png"
        },
        {
          money: 21.5,
          image: "../../images/banli.png"
        },
        {
          money: 25.5,
          image: "../../images/banli.png"
        },
        {
          money: 27.5,
          image: "../../images/banli.png"
        }
      ],
    },
    {
      type: '68元档',
      count: 4,
      goods: [
        {
          money: 58,
          image: "../../images/banli.png"
        },
        {
          money: 59,
          image: "../../images/banli.png"
        },
        {
          money: 68,
          image: "../../images/banli.png"
        },
        {
          money: 62.7,
          image: "../../images/banli.png"
        }
      ],
    },
    {
      type: '128元档',
      count: 4,
      goods: [
        {
          money: 128,
          image: "../../images/banli.png"
        },
        {
          money: 106,
          image: "../../images/banli.png"
        },
        {
          money: 108,
          image: "../../images/banli.png"
        },
        {
          money: 122.7,
          image: "../../images/banli.png"
        }
      ],
    }
  ]
  return arr
}

/*
 * 对外暴露接口
 */
module.exports = {
  getIndexNavData: getIndexNavData,
  getGiftList: getGiftList
}
