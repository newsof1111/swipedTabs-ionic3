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
import { NavController, Slides } from 'ionic-angular';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = ["page1", "page2", "page3", "page4"];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    HomePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    HomePage.prototype.updateIndicatorPosition = function () {
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    HomePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        ViewChild('SwipedTabsSlider'),
        __metadata("design:type", Slides)
    ], HomePage.prototype, "SwipedTabsSlider", void 0);
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map