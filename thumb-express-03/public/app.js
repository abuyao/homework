"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton() {
        _classCallCheck(this, PraiseButton);
    }
    // this.getCount = this.getNumber();

    // getNumber(){
    //     let count = 0;

    //     return function(){
    //         count ++;
    //         return count;
    //     };
    // }


    _createClass(PraiseButton, [{
        key: "getCount",
        value: function getCount() {
            return new Promise(function (resolve, reject) {
                axios.post("/api/thumb").then(function (response) {
                    resolve(response.data);
                }, reject);
            });
        }
    }, {
        key: "praise",
        value: function praise() {
            return this.getCount();
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb() {
        _classCallCheck(this, Thumb);

        var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

        _this.init();
        _this.count = 0;
        _this.loading = false;
        return _this;
    }

    _createClass(Thumb, [{
        key: "init",
        value: function init() {
            this.createElement();
        }
    }, {
        key: "createElement",
        value: function createElement() {
            this.plus = this.createPlus();
            this.canvas = this.createCanvas();
            this.canvas.append(this.createPraise());
            this.canvas.append(this.plus);
        }
    }, {
        key: "createPlus",
        value: function createPlus() {
            var plus = $("<span class='praise-count animated hide'> + 1 </span>").css({
                fontSize: '24px',
                color: 'red',
                position: 'absolute',
                right: '50px',
                top: '30px'
            });
            return plus;
        }
    }, {
        key: "createFinger",
        value: function createFinger() {
            var finger = $("<div></div>").height(41).width(90).css({
                backgroundColor: '#ecc6b0',
                border: '#af795b 1px solid',
                borderRadius: '20px',
                padding: "3px",
                position: 'absolute',
                boxSizing: 'border-box'
            });

            var fingeriInner = $("<div></div>").height(33).width(82).css({
                borderRadius: 16,
                background: 'linear-gradient(to left, #f6e4d9 0%, #edcab6 30%)'
            });

            finger.append(fingeriInner);

            return finger;
        }
    }, {
        key: "createBigFinger",
        value: function createBigFinger() {

            var bigfinger = this.createFinger();
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
    }, {
        key: "createSecfinger",
        value: function createSecfinger() {
            var secfinger = this.createFinger();
            secfinger.css({
                top: '-28px',
                right: '-140px'
            });
            return secfinger;
        }
    }, {
        key: "createthfinger",
        value: function createthfinger() {
            var thfinger = this.createFinger();
            thfinger.css({
                top: '12px',
                right: '-140px'
            });
            return thfinger;
        }
    }, {
        key: "createforfinger",
        value: function createforfinger() {
            var forfinger = this.createFinger();
            forfinger.css({
                top: '52px',
                right: '-140px'
            });
            return forfinger;
        }
    }, {
        key: "createfivfinger",
        value: function createfivfinger() {
            var fivfinger = this.createFinger();
            fivfinger.css({
                top: '92px',
                right: '-140px'
            });
            return fivfinger;
        }
    }, {
        key: "createPraise",
        value: function createPraise() {
            var praise = $("<div></div>").height(112).width(120).css({
                position: 'absolute',
                top: '50%',
                left: "50%",
                transform: 'translate(-50%, -50%)'
            });
            praise.addClass("praise");

            praise.append(this.createArm());
            praise.append(this.createFist());
            praise.append(this.createBigFinger());
            praise.append(this.createSecfinger());
            praise.append(this.createthfinger());
            praise.append(this.createforfinger());
            praise.append(this.createfivfinger());

            praise.on('click', function (e) {
                e.preventDefault();
                this.click();
            }.bind(this));
            return praise;
        }
    }, {
        key: "createFist",
        value: function createFist() {
            var fist = $("<div></div>").height(160).width(100).css({
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
    }, {
        key: "createArm",
        value: function createArm() {
            var arm = $("<div></div>").height(112).width(120).css({
                backgroundColor: '#ecc6b0',
                position: 'absolute',
                borderTop: '#af795b 1px solid',
                zIndex: 2
            });
            return arm;
        }
    }, {
        key: "createCanvas",
        value: function createCanvas() {
            var canvas = $("<div></div>").height(400).width(520).css({
                background: 'linear-gradient(135deg, #a4d094 0%, #d1d8cc 50%)',
                position: 'relative'
            });
            return canvas;
        }
    }, {
        key: "click",
        value: function click() {
            var _this2 = this;

            if (!this.loading) {
                this.loading = true;
                this.praise().then(function (data) {
                    clearTimeout(_this2.timer);
                    _this2.plus.removeClass("fadeOutUp").addClass("hide");
                    _this2.count = data.count;
                    _this2.plus.text(" + " + _this2.count).removeClass("hide").addClass("fadeOutUp");
                    _this2.timer = setTimeout(function (argument) {
                        this.plus.removeClass("fadeOutUp").addClass("hide");
                        this.loading = false;
                    }.bind(_this2), 500);
                });
            }
        }
    }]);

    return Thumb;
}(PraiseButton);

exports.default = Thumb;
