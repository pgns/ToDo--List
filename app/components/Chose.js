System.register(["@angular/core", "@NoyauFonctionnel/nf"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, nf_1;
    var htmlTemplate, ItemChose;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }],
        execute: function() {
            htmlTemplate = `
	<div class="view">
		<input 	class			= "toggle" 
				type			= "checkbox" 
				[ngModel]       = "nf.fait"
				(ngModelChange) = "nf.Fait($event)"
				/>
		<label class = "texte" (dblclick) = "modeEdition()">
                    {{nf.texte}}
                </label>
		<button class="destroy"></button>
	</div>
	<form (ngSubmit)="setText(newText.value)">
		<input class="edit" #newText/>
	</form>
`;
            ItemChose = class ItemChose {
                constructor() {
                    this.editing = false;
                }
                modeEdition() {
                    this.editing = true;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', nf_1.Chose)
            ], ItemChose.prototype, "nf", void 0);
            ItemChose = __decorate([
                core_1.Component({
                    selector: "item-chose",
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [])
            ], ItemChose);
            exports_1("ItemChose", ItemChose);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUlNLFlBQVk7Ozs7Ozs7Ozs7WUFBWixZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztDQWVwQixDQUFDO1lBTUY7Z0JBQUE7b0JBQ0ksWUFBTyxHQUFhLEtBQUssQ0FBQztnQkFXOUIsQ0FBQztnQkFQRyxXQUFXO29CQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixDQUFDO1lBS0wsQ0FBQztZQVRBO2dCQUFDLFlBQUssRUFBRTs7aURBQUE7WUFQVDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBSSxZQUFZO29CQUN4QixRQUFRLEVBQUksWUFBWTtpQkFDekIsQ0FBQzs7eUJBQUE7WUFDRixpQ0FZQyxDQUFBO1lBQUEsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL0Nob3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDaG9zZX0gZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XG5pbXBvcnQge1ZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2RpXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PGRpdiBjbGFzcz1cInZpZXdcIj5cblx0XHQ8aW5wdXQgXHRjbGFzc1x0XHRcdD0gXCJ0b2dnbGVcIiBcblx0XHRcdFx0dHlwZVx0XHRcdD0gXCJjaGVja2JveFwiIFxuXHRcdFx0XHRbbmdNb2RlbF0gICAgICAgPSBcIm5mLmZhaXRcIlxuXHRcdFx0XHQobmdNb2RlbENoYW5nZSkgPSBcIm5mLkZhaXQoJGV2ZW50KVwiXG5cdFx0XHRcdC8+XG5cdFx0PGxhYmVsIGNsYXNzID0gXCJ0ZXh0ZVwiIChkYmxjbGljaykgPSBcIm1vZGVFZGl0aW9uKClcIj5cbiAgICAgICAgICAgICAgICAgICAge3tuZi50ZXh0ZX19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblx0XHQ8YnV0dG9uIGNsYXNzPVwiZGVzdHJveVwiPjwvYnV0dG9uPlxuXHQ8L2Rpdj5cblx0PGZvcm0gKG5nU3VibWl0KT1cInNldFRleHQobmV3VGV4dC52YWx1ZSlcIj5cblx0XHQ8aW5wdXQgY2xhc3M9XCJlZGl0XCIgI25ld1RleHQvPlxuXHQ8L2Zvcm0+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3JcdFx0OiBcIml0ZW0tY2hvc2VcIixcbiAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNob3NlIHtcbiAgICBlZGl0aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vQFZpZXdDaGlsZChcIm5ld1RleHRcIikgbmV3VGV4dCA6IEVsZW1lbnRSZWY7XG5cdEBJbnB1dCgpIFx0bmZcdFx0OiBDaG9zZTtcblxuICAgIG1vZGVFZGl0aW9uKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKnNldFRleHQodGV4dCA6IFN0cmluZykgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2VcbiAgICB9Ki9cbn07XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
