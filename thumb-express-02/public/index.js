class PraiseButton{
    constructor(){
        // this.getCount = this.getNumber();
    }
    // getNumber(){
    //     let count = 0;
        
    //     return function(){
    //         count ++;
    //         return count;
    //     };
    // }
    getCount(){
        return new Promise((resolve, reject)=>{
            axios.post("/api/thumb").then(response=>{
                resolve(response.data);
            }, reject);
        });
    }
    praise(){
        return this.getCount();
    }
}

class Thumb extends PraiseButton{
    constructor(){
        super();
        this.init();
        this.count = 0;
        this.loading = false;
    }
    init(){
        this.createElement();
    }
    createElement(){
        this.plus = this.createPlus();
        this.canvas = this.createCanvas();
        this.canvas.append(this.createPraise());
        this.canvas.append(this.plus);
    }
    createPlus(){
        let plus = $("<span class='praise-count animated hide'> + 1 </span>").css({
            fontSize: '24px',
            color: 'red',
            position: 'absolute',
            right: '50px',
            top: '30px'
        });
        return plus;
    }
    createFinger() {
        let finger = $("<div></div>").height(41).width(90).css({
            backgroundColor: '#ecc6b0',
            border: '#af795b 1px solid',
            borderRadius: '20px',
            padding: "3px",
            position: 'absolute',
            boxSizing: 'border-box'
        });

        let fingeriInner = $("<div></div>").height(33).width(82).css({
            borderRadius: 16,
            background: 'linear-gradient(to left, #f6e4d9 0%, #edcab6 30%)'
        });

        finger.append(fingeriInner);

        return finger;
    }
    createBigFinger() {

        let bigfinger = this.createFinger();
        bigfinger.css({
            top: '-64px',
            right: '-73px',
            transform: 'rotate(-66deg)',
            borderBottom: 0,
            zIndex: 2
        });
        bigfinger.addClass("bigfinger");
        return bigfinger;
    }
    createSecfinger() {
        let secfinger = this.createFinger();
        secfinger.css({
            top: '-28px',
            right: '-140px'
        });
        return secfinger;
    }
    createthfinger(){
        let thfinger = this.createFinger();
        thfinger.css({
            top: '12px',
            right: '-140px'
        });
        return thfinger;
    }
    createforfinger(){
        let forfinger = this.createFinger();
        forfinger.css({
            top: '52px',
            right: '-140px'
        });
        return forfinger;
    }
    createfivfinger(){
        let fivfinger = this.createFinger();
        fivfinger.css({
            top: '92px',
            right: '-140px'
        });
        return fivfinger;
    }
    createPraise() {
        let praise = $("<div></div>").height(112).width(120).css({
            position: 'absolute',
            top: '50%',
            left: "50%",
            transform: 'translate(-50%, -50%)',
        });
        praise.addClass("praise");

        praise.append(this.createArm());
        praise.append(this.createFist());
        praise.append(this.createBigFinger());
        praise.append(this.createSecfinger());
        praise.append(this.createthfinger());
        praise.append(this.createforfinger());
        praise.append(this.createfivfinger());

        praise.on('click', function(e){
            e.preventDefault();
            this.click();
        }.bind(this));
        return praise;
    }
    createFist(){
        let fist = $("<div></div>").height(160).width(100).css({
            backgroundColor: '#ecc6b0',
            position: 'absolute',
            right: '-93px',
            top: '-28px',
            borderRadius: '15px',
            border: '#af795b 1px solid',
            borderRight: 0,
            zIndex: 1
        });
        fist.addClass("fist");
        return fist;
    }
    createArm(){
        let arm = $("<div></div>").height(112).width(120).css({
            backgroundColor: '#ecc6b0',
            position: 'absolute',
            borderTop: '#af795b 1px solid',
            zIndex: 2,
        });
        return arm;
    }
    createCanvas(){
        let canvas = $("<div></div>").height(400).width(520).css({
            background: 'linear-gradient(135deg, #a4d094 0%, #d1d8cc 50%)',
            position: 'relative'
        });
        return canvas;
    }
    click(){
        if(!this.loading){
            this.loading = true;
            this.praise().then((data)=>{
                clearTimeout(this.timer);
                this.plus.removeClass("fadeOutUp").addClass("hide");
                this.count = data.count;
                this.plus.text(" + " + this.count).removeClass("hide").addClass("fadeOutUp");
                this.timer = setTimeout(function(argument) {
                    this.plus.removeClass("fadeOutUp").addClass("hide");
                    this.loading = false;
                }.bind(this), 500);
            });
        }
    }
}

export default Thumb;