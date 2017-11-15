var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Content } from 'ionic-angular';
var ManyTabsPage = /** @class */ (function () {
    function ManyTabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabTitleWidthArray = [];
        this.tabElementWidth_px = 50;
        this.isRight = true;
        this.tabs = [];
        this.previousDrag = 0;
        this.tabs = ["p1csdfdsfdsfsdsddf", "p2", "pqsdqsd3", "p4", "pqsdqsdqssq5", "p6", "p7qsdqsdqsd", "p8", "p9", "p10qsdds", "p11qsdds", "p12ds"];
    }
    ManyTabsPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
        for (var i in this.tabs) {
            this.tabTitleWidthArray.push(document.getElementById("tabTitle" + i).offsetWidth);
        }
        // console.log(this.tabTitleWidthArray);
    };
    ManyTabsPage.prototype.selectTab = function (index) {
        //   console.log(document.getElementById("tabTitle1").offsetWidth);
        //console.log($event.target.offsetWidth);
        this.SwipedTabsIndicator.style.width = this.tabTitleWidthArray[index] + "px";
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.calculateDistanceToSpnd(index)) + 'px,0,0)';
        //this.scroll.scrollTo(this.calculateDistanceToSpnd(index),0);
        this.SwipedTabsSlider.slideTo(index);
    };
    ManyTabsPage.prototype.calculateDistanceToSpnd = function (index) {
        var result = 0;
        for (var _i = 0; _i < index; _i++) {
            //  console.log(_i);
            result = result + this.tabTitleWidthArray[_i];
        }
        //console.log(result);
        return result;
    };
    ManyTabsPage.prototype.updateIndicatorPosition = function () {
        var index = this.SwipedTabsSlider.getActiveIndex();
        this.SwipedTabsIndicator.style.width = this.tabTitleWidthArray[index] + "px";
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.calculateDistanceToSpnd(index)) + 'px,0,0)';
        this.scroll.scrollTo(this.calculateDistanceToSpnd(index), 0);
        /*
                      this.SwipedTabsIndicator.style.width = this.tabTitleWidthArray[this.SwipedTabsSlider.getActiveIndex()]+"px";
    
    
          // this condition is to avoid passing to incorrect index
        if( this.SwipedTabsSlider.length()< this.SwipedTabsSlider.getActiveIndex())
        {
    
              this.scroll.scrollTo(this.calculateDistanceToSpnd(this.SwipedTabsSlider.getActiveIndex()),0,500);
    
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.calculateDistanceToSpnd(this.SwipedTabsSlider.getActiveIndex()))+'px,0,0)';
        }
    
        */
    };
    ManyTabsPage.prototype.animateIndicator = function ($event) {
        if ($event.progress > 0 && $event.progress < 1) {
            if ($event.progress > this.previousDrag) {
                this.isRight = true;
            }
            if ($event.progress < this.previousDrag) {
                this.isRight = false;
            }
            // console.log('$event.progres: '+$event.progress);
            // console.log('previousDrag: '+this.previousDrag);
            if (this.isRight) {
                if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
                    this.SwipedTabsIndicator.style.width = this.tabTitleWidthArray[this.SwipedTabsSlider.getActiveIndex() + 1] + "px";
                    console.log('right');
                }
            }
            else {
                this.SwipedTabsIndicator.style.width = this.tabTitleWidthArray[this.SwipedTabsSlider.getActiveIndex() - 1] + "px";
                console.log('left');
            }
            if (this.SwipedTabsIndicator)
                // console.log("progress: "+$event.progress *100);
                //
                this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.calculateDistanceToSpnd(this.SwipedTabsSlider.length() - 1)))) + 'px,0,0)';
            this.previousDrag = $event.progress;
        }
        else {
            if ()
                this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.calculateDistanceToSpnd(this.SwipedTabsSlider.getActiveIndex())) + 'px,0,0)';
        }
    };
    __decorate([
        ViewChild('SwipedTabsSlider'),
        __metadata("design:type", Slides)
    ], ManyTabsPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        ViewChild('scroll'),
        __metadata("design:type", Content)
    ], ManyTabsPage.prototype, "scroll", void 0);
    ManyTabsPage = __decorate([
        Component({
            selector: 'page-many-tabs',
            templateUrl: 'many-tabs.html',
        }),
        __metadata("design:paramtypes", [NavController])
    ], ManyTabsPage);
    return ManyTabsPage;
}());
export { ManyTabsPage };
//# sourceMappingURL=many-tabs.js.map