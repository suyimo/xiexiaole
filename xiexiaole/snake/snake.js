/**
 * Created by zhangshupeng on 2017/5/16.
 */

var direction = 3
var snake = []
var redPoints = []
var blackPoint = []
var foods = []
var recyclePoints = []
function draw (n) {
    var table = document.getElementById ('table')
    for (var i = 0; i < n; i++) {
        var tr = document.createElement ('tr')
//        tr.setAttribute('id','tr')
        for (var j = 0; j < n; j++) {
            var th = document.createElement ('th')
            th.setAttribute('row',i)
            th.setAttribute('col',j)
            th.setAttribute('id',10*i+j)
            th.style.backgroundColor = '#999'
            tr.appendChild(th)
        }
        table.appendChild (tr)
    }

    //初始化蛇
    for (var i = 0;i<5;i++) {
        var point = recyclePoint()
        point['x'] = 10
        point['y'] = 10+i
        snake.push(point)
        updateMap(point,null)

    }

    //启动定时
    window.setInterval("move(direction)",1000)
}

function directionChange (newdirection) {
    if (!(Math.abs(direction - newdirection) === 2)) {
        direction = newdirection
    }

}

/*
* 0 right  y + 1
* 1 top    x - 1
* 2 left   y - 1
* 3 bottom x + 1
* */
function move (direction) {
//    var aa = snake.shift()
    recyclePoints.unshift(snake.pop())
    updateMap(null,recyclePoints[0])
    var head = snake[0]
    var newHead = recyclePoint()

    if (direction === 3) {
        newHead['x'] = head['x'] + 1
        newHead['y'] = head['y']
    } else if (direction === 0) {
        newHead['x'] = head['x']
        newHead['y'] = head['y'] + 1
    } else if (direction === 1) {
        newHead['x'] = head['x'] - 1
        newHead['y'] = head['y']
    } else if (direction === 2) {
        newHead['x'] = head['x']
        newHead['y'] = head['y'] - 1
    }

    snake.unshift(newHead)
//    console.log(newHead,snake)
    updateMap(newHead,null)
    eat(newHead)
}

function eat (point) {
    
    if (p) {
        snake.unshift(p)
    }
    createFood()
}

function createFood () {

}

function updateMap (red,black) {

    if (red) {
        var redPointTag = String(red['x']*10 + red['y'])
        var th = document.getElementById (redPointTag)
        th.style.backgroundColor = '#f00'
    }

    if (black) {
        var blackPointTag = String(black['x']*10 + black['y'])
        var th = document.getElementById (blackPointTag)
        th.style.backgroundColor = '#999'
    }

    //一开始的思路,比较耗费资源,还麻烦
//    var table = document.getElementById ('table')
////    console.log(';;;;;;')
//    var rows = table.childNodes;
//    for (var i = 0;i < rows.length;i++) {
//        var tr = rows[i]
//        var cols = tr.childNodes;
//        for (var j = 0;j < cols.length;j++) {
//            var th = cols[j]
//            var point = {}
//            point['x'] = th.getAttribute('row')
//            point['y'] = th.getAttribute('col')
//            if (arrContainPoint(snake,point)) {
//                th.style.backgroundColor = '#f00'
//                console.log('111111111')
//            } else  {
//                th.style.backgroundColor = '#999'
//            }
//        }
//    }
}

function arrContainPoint (arr,point) {
    console.log(point)
    for (var p in arr) {
        if (pointEqual(p,point)) {
            return p
        }
    }
    return false
}

function recyclePoint () {
    if (recyclePoints.length > 0) {
        return recyclePoints.pop()
    } else {
        return {}
    }
}

function pointEqual (point1,point2) {
    if (point1['x'] === point2['x'] && point1['y'] === point2['y']) {
        return true
    } else {
        return false
    }
}