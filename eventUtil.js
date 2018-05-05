var eventUtil = {
    addHandler: function(event, type, handler) {
        if(event.addEventListener) {
            event.addEventListener(type, handler, false);
        } else if(event.attachEvent) {
            event.attachEvent('on'+type, handler);
        } else {
            event['on'+type] = handler;
        }
    },
    getEvent: function(event) {
        return event || window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    getRelatedTarget: function (event) {
        if(event.relatedTarget) {
            return event.relatedTarget;
        }　else if(event.toElement) {
            return event.toElement;
        } else if(event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },
    getWheelDelta: function(event) {
        if(event.mousewheel){
            return (client.engine.opera && client.engine.opera < 9.5)? -wheelDelta:wheelDelta;
        } else {
            // for ff
            return -event.detail*40;
        }
    },
    getCharCode: function(event) {
        if(typeof event.charCode == 'number') {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    preventDefault: function(event) {
        if(event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    removeHandler: function(event, type, handler) {
        if(event.removeEventListener) {
            event.removeEventListener(type, handler, false);
        } else if(event.detachEvent) {
            event.detachEvent('on'+type, handler);
        } else {
            event['on'+type] = null;
        }
    },
    stopPropagation: function(event) {
        if(event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
