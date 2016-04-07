/**
 * Created by sifily on 2016/4/7.
 */
;(function(window){
    function Scroll(cfg){
        this.cfg = cfg||null;
        this.scrollFn();
    }
    Scroll.prototype.scrollFn = function(){
        var cfg = this.cfg;
        var temp = cfg.obj.getElementsByTagName(cfg.ele);
        temp = temp.item(0).cloneNode(true);
        cfg.obj.appendChild(temp);

        function marquee(){
            if(cfg.direction=="left"){
                if(cfg.obj.scrollLeft>=temp.offsetWidth){
                    cfg.obj.scrollLeft-=temp.offsetWidth;
                }else{
                    cfg.obj.scrollLeft++;
                }
            }else if(cfg.direction=="top"){
                if(cfg.obj.scrollTop>=temp.offsetHeight){
                    cfg.obj.scrollTop-=temp.offsetHeight;
                }else{
                    cfg.obj.scrollTop++;
                }
            }
        }
        var timer = setInterval(marquee,cfg.time);
        cfg.obj.onmouseover = function () {
            clearInterval(timer);
        };
        cfg.obj.onmouseout = function(){
            timer = setInterval(marquee,cfg.time);
        }

    }
    window.scroll = function(cfg){
        return new Scroll(cfg);
    }
})(window)