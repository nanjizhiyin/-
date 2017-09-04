// pages/website/index.js
Page({
  data: {
    mylongitude: 113.324520,
    mylatitude: 23.099994,
    markers: [{
      iconPath: "../res/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../res/location.png',
      position: {
        left: 0,
        top: 300 - 30,
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    var that = this
         wx.getLocation({
            type: 'wgs84',
            success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
    console.log(latitude)
    console.log(longitude)
            that.setData({
                mylongitude: latitude,
                mylongitude: longitude,
                 markers: [{
                    iconPath: "../res/others.png",
                    id: 0,
                    latitude: latitude,
                    longitude: longitude,
                    width: 30,
                    height: 30
                }]
          })
            }
          }) 
  },
  
})