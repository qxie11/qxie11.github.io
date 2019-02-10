(function() {
    "use strict";
    
    var $ = function(element) {
        if(element.charAt(0) === '#') { // if ID
            return document.querySelector(element); // return single Element
        }
        
        return document.querySelectorAll(element); // return many Elements
    }
    
    var viewer = $('#viewer'),
        equal = $('#equal'),
        ops = $('.ops'),
        nums = $('.num'),
        clear = $('#clear'), // Clear display
        theNum = "",
        oldNum = "",
        resultNum,
        operator;
        
    var setOps = function() {
        if(!operator) {
            oldNum = theNum;
            theNum = "";
            operator = this.getAttribute('data-ops');
        }
    };
    
    var setNums = function() {
        theNum += this.getAttribute('data-num');
        
        viewer.innerHTML = theNum;
    };
    
    var clearAll = function() {
        oldNum = "";
        theNum = "";
        viewer.innerHTML = "0";
    }
    
    var displayNum = function() {
        
        oldNum = parseFloat(oldNum);
        theNum = parseFloat(theNum);
        
        switch(operator) {
            case "plus":
                resultNum = oldNum + theNum;
            break;
            
            case "minus":
                resultNum = oldNum - theNum;
            break;
            
            case "times":
                resultNum = oldNum * theNum;
            break;
            
            case "devided by":
                resultNum = oldNum / theNum;
            break;
            
            default:
                resultNum = theNum;
        }
        
        if(!isFinite(resultNum)) {
            resultNum = "Ошибка";
        }
        
        viewer.innerHTML = resultNum;
        
        oldNum = 0;
        theNum = resultNum;
        operator = null;
    };
    
    /* The click events */
        
    for(var i = 0; i < ops.length; i++) {
        ops[i].onclick = setOps;
    }
        
    for(var i = 0; i < nums.length; i++) {
        nums[i].onclick = setNums;
    }
    
    clear.onclick = clearAll;
    
    equal.onclick = displayNum;
})();