/**
 * Created by zhangshupeng on 2017/5/16.
 */

var direction = 0
var snake = []
function draw (n) {
    var table = document.getElementById ('table')
    for (var i = 0; i < n; i++) {
        var tr = document.createElement ('tr')
//        tr.setAttribute('id','tr')
        for (var j = 0; j < n; j++) {
            var th = document.createElement ('th')
            th.setAttribute('row',i)
            th.setAttribute('col',j)
            th.style.backgroundColor = '#999'
            tr.appendChild(th)
        }
        table.appendChild (tr)
    }

    //初始化蛇
    for (var i = 0;i<5;i++) {
        var point = {}
        point['x'] = 10
        point['y'] = 10+i
        snake.push(point)
    }

    //启动定时
    window.setInterval("updateMap()",5000)
}

/*
* 0 right  x + 1
* 1 top    y + 1
* 2 left   x - 1
* 3 bottom y - 1
* */
function move (direction) {

}

function updateMap () {
    var table = document.getElementById ('table')
//    console.log(';;;;;;')
    var rows = table.childNodes;
    for (var i = 0;i < rows.length;i++) {
        var tr = rows[i]
        var cols = tr.childNodes;
        for (var j = 0;j < cols.length;j++) {
            var th = cols[j]
            var point = {}
            point['x'] = th.getAttribute('row')
            point['y'] = th.getAttribute('col')
            if (arrContainPoint(snake,point)) {
                th.style.backgroundColor = '#f00'
                console.log('111111111')
            } else  {
                th.style.backgroundColor = '#999'
            }
        }
    }
}

function arrContainPoint (arr,point) {
    console.log(point)
    for (var p in arr) {
        if (pointEqual(p,point)) {
            return true
        }
    }
    return false
}

function pointEqual (point1,point2) {
    if (point1['x'] === point2['x'] && point1['y'] === point2['y']) {
        return true
    } else {
        return false
    }
}