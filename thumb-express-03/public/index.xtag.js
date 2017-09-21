import xtag from 'x-tag';
import axios from 'axios';
import $ from 'jquery';
xtag.register("x-praise",{
    content: `<div style="height: 400px; width: 520px; background: linear-gradient(135deg, rgb(164, 208, 148) 0%, rgb(209, 216, 204) 50%); position: relative;">
    <div class="praise" style="height: 112px; width: 120px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <div style="height: 112px; width: 120px; background-color: rgb(236, 198, 176); position: absolute; border-top: 1px solid rgb(175, 121, 91); z-index: 2;">
    </div>
    <div class="fist" style="height: 160px; width: 100px; background-color: rgb(236, 198, 176); position: absolute; right: -93px; top: -28px; border-radius: 15px; border-width: 1px 0px 1px 1px; border-top-style: solid; border-right-style: initial; border-bottom-style: solid; border-left-style: solid; border-top-color: rgb(175, 121, 91); border-right-color: initial; border-bottom-color: rgb(175, 121, 91); border-left-color: rgb(175, 121, 91); border-image: initial; z-index: 1;"></div>
    <div class="bigfinger" style="height: 41px; width: 90px; background-color: rgb(236, 198, 176); border-width: 1px 1px 0px; border-top-style: solid; border-right-style: solid; border-bottom-style: initial; border-left-style: solid; border-top-color: rgb(175, 121, 91); border-right-color: rgb(175, 121, 91); border-bottom-color: initial; border-left-color: rgb(175, 121, 91); border-image: initial; border-radius: 20px; padding: 3px; position: absolute; box-sizing: border-box; top: -64px; right: -73px; transform: rotate(-66deg); z-index: 2;">
        <div style="height: 33px; width: 82px; border-radius: 16px; background: linear-gradient(to left, rgb(246, 228, 217) 0%, rgb(237, 202, 182) 30%);"></div>
    </div>
    <div style="height: 41px; width: 90px; background-color: rgb(236, 198, 176); border: 1px solid rgb(175, 121, 91); border-radius: 20px; padding: 3px; position: absolute; box-sizing: border-box; top: -28px; right: -140px;">
        <div style="height: 33px; width: 82px; border-radius: 16px; background: linear-gradient(to left, rgb(246, 228, 217) 0%, rgb(237, 202, 182) 30%);"></div>
    </div>
    <div style="height: 41px; width: 90px; background-color: rgb(236, 198, 176); border: 1px solid rgb(175, 121, 91); border-radius: 20px; padding: 3px; position: absolute; box-sizing: border-box; top: 12px; right: -140px;">
        <div style="height: 33px; width: 82px; border-radius: 16px; background: linear-gradient(to left, rgb(246, 228, 217) 0%, rgb(237, 202, 182) 30%);"></div>
    </div>
    <div style="height: 41px; width: 90px; background-color: rgb(236, 198, 176); border: 1px solid rgb(175, 121, 91); border-radius: 20px; padding: 3px; position: absolute; box-sizing: border-box; top: 52px; right: -140px;"><div style="height: 33px; width: 82px; border-radius: 16px; background: linear-gradient(to left, rgb(246, 228, 217) 0%, rgb(237, 202, 182) 30%);"></div></div><div style="height: 41px; width: 90px; background-color: rgb(236, 198, 176); border: 1px solid rgb(175, 121, 91); border-radius: 20px; padding: 3px; position: absolute; box-sizing: border-box; top: 92px; right: -140px;">
        <div style="height: 33px; width: 82px; border-radius: 16px; background: linear-gradient(to left, rgb(246, 228, 217) 0%, rgb(237, 202, 182) 30%);"></div>
    </div>
    </div>
    <span class="praise-count animated hide" style="font-size: 24px; color: red; position: absolute; right: 50px; top: 30px;"> + 1</span>
    </div>`,
    methods: {
        getCount(){
            return new Promise((resolve, reject)=>{
                axios.post("/api/thumb").then(response=>{
                    resolve(response.data);
                }, reject);
            });
        },
        praise(){
            return this.getCount();
        },
        clickHandler(){
            if(!this.loading){
                this.loading = true;
                let plus = $(xtag.query(document.body, '.praise-count'));
                this.praise().then((data)=>{
                    clearTimeout(this.timer);
                    plus.removeClass("fadeOutUp").addClass("hide");
                    plus.text(" + " + data.count).removeClass("hide").addClass("fadeOutUp");
                    this.timer = setTimeout(function(argument) {
                        plus.removeClass("fadeOutUp").addClass("hide");
                        this.loading = false;
                    }.bind(this), 500);
                });
            }
        }
    },
    events: {
        click: function(){
            this.clickHandler();
        }
    }
});