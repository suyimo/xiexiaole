/**
 * Created by zhangshupeng on 2017/5/7.
 */

//function submi() {
//    var table = document.getElementById('table')
//    var num = table.getAttribute('num')
//
//    var li = document.createElement('li')
//    li.innerHTML = 'name'+num
//    table.appendChild(li)
//
//    table.setAttribute('num',Number(num)+1)
//
//}

var cal = ['+','-','*','/','ac','=']
var resultNum = 0
var action = -1
function result (e) {
    if (containObject(cal,e)) {
        action = cal.indexOf(e)
        if (action === 5) {
            display()
        } else if(action === 4) {
            resultNum = 0;
            display()
        }
    } else {

        if (action === 0) {
            resultNum +=Number(e)
        } else if(action===1){
            resultNum -=Number(e)
        } else if(action===2){
            resultNum *=Number(e)
        } else if(action===3){
            resultNum /=Number(e)
        } else {
            resultNum  = resultNum *10 + Number(e)
            display()
        }

    }
}

function containObject (arr,obj) {
    for (var i=0;i<arr.length;i++) {
        if (obj === arr[i]) {
            return true
        }
    }

    return false
}

function display () {
    var dis = document.getElementById ('displayText')
    dis.innerHTML = resultNum
}


function draw () {

    var table = document.getElementById ('table')
    for (var i = 0; i < 4; i++) {
        var li = document.createElement ('li')
        for (var j = 0; j < 4; j++) {
            var button = document.createElement ('button')
            button.onclick = function (btn) {
                return function () {
                    result(btn.innerHTML)
                }
            }(button)

            if (i<3) {
                var num = i*4 + j
                if (num < 10) {
                    button.innerHTML = num
                } else {
                    button.innerHTML = cal[j+2]
                }
            } else {
                button.innerHTML = cal[j]
            }
            li.appendChild(button)
        }
        table.appendChild (li)
    }
}

function submi () {
    var table = document.getElementById ('table')
    var num = table.childElementCount
    alert (num)

    var li = document.createElement ('li')
    li.innerHTML = 'name' + num
    table.appendChild (li)


}