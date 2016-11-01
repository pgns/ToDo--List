System.register(["@angular/core", "@angular/platform-browser", "./components/ListeChosesModule", "@angular/platform-browser-dynamic", "./sansFramework/listeChoses_IHM", "@NoyauFonctionnel/service"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, ListeChosesModule_1, platform_browser_dynamic_1, listeChoses_IHM_1, service_1;
    var PromesseDocumentPret, CompDemoM2M, AppModule, platform;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ListeChosesModule_1_1) {
                ListeChosesModule_1 = ListeChosesModule_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (listeChoses_IHM_1_1) {
                listeChoses_IHM_1 = listeChoses_IHM_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            PromesseDocumentPret = new Promise((resolve) => {
                if (document.readyState === "complete") {
                    resolve();
                }
                else {
                    document.body.onload = () => resolve();
                }
            });
            CompDemoM2M = class CompDemoM2M {
            };
            CompDemoM2M = __decorate([
                core_1.Component({
                    selector: "demo-m2m",
                    template: `<liste-choses titre="M2 WIC"></liste-choses>`
                }), 
                __metadata('design:paramtypes', [])
            ], CompDemoM2M);
            AppModule = class AppModule {
                constructor() {
                    // Juste pour bien lier la version sans framework
                    let Pall = Promise.all([service_1.ListeChosesService.getData(), PromesseDocumentPret]);
                    Pall.then(([nf]) => {
                        new listeChoses_IHM_1.ListeChosesIHM(nf, "#sansFramework");
                    });
                }
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, ListeChosesModule_1.ListeChosesModule],
                    declarations: [CompDemoM2M],
                    bootstrap: [CompDemoM2M]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(AppModule);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQVFJLG9CQUFvQiwwQkE4QmxCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE5QlYsb0JBQW9CLEdBQUcsSUFBSSxPQUFPLENBQUUsQ0FBQyxPQUFPO2dCQUM1QyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztnQkFDM0MsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBT0g7WUFBbUIsQ0FBQztZQUpwQjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxVQUFVO29CQUN0QixRQUFRLEVBQUksOENBQThDO2lCQUM3RCxDQUFDOzsyQkFBQTtZQVFGO2dCQUNJO29CQUNJLGlEQUFpRDtvQkFDakQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLDRCQUFrQixDQUFDLE9BQU8sRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztvQkFDN0UsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNaLElBQUksZ0NBQWMsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUNMLENBQUM7WUFiRDtnQkFBQyxlQUFRLENBQUM7b0JBQ04sT0FBTyxFQUFPLENBQUUsZ0NBQWEsRUFBRSxxQ0FBaUIsQ0FBRTtvQkFDbEQsWUFBWSxFQUFFLENBQUUsV0FBVyxDQUFFO29CQUM3QixTQUFTLEVBQUssQ0FBRSxXQUFXLENBQUU7aUJBQ2hDLENBQUM7O3lCQUFBO1lBQ0YsaUNBUUMsQ0FBQTtZQUVLLFFBQVEsR0FBRyxpREFBc0IsRUFBRSxDQUFDO1lBQzFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUgfSAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgTGlzdGVDaG9zZXNNb2R1bGUgfSAgICAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9MaXN0ZUNob3Nlc01vZHVsZVwiO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9ICAgZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiO1xuaW1wb3J0IHsgTGlzdGVDaG9zZXNJSE0gICAgIH0gZnJvbSBcIi4vc2Fuc0ZyYW1ld29yay9saXN0ZUNob3Nlc19JSE1cIjtcbmltcG9ydCB7IExpc3RlQ2hvc2VzU2VydmljZSB9IGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9zZXJ2aWNlXCI7XG5cblxubGV0IFByb21lc3NlRG9jdW1lbnRQcmV0ID0gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XG4gICAgaWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUoKTtcbiAgICB9XG59KTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvclx0XHQ6IFwiZGVtby1tMm1cIixcbiAgICB0ZW1wbGF0ZVx0XHQ6IGA8bGlzdGUtY2hvc2VzIHRpdHJlPVwiTTIgV0lDXCI+PC9saXN0ZS1jaG9zZXM+YFxufSlcbmNsYXNzIENvbXBEZW1vTTJNIHt9XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogICAgICBbIEJyb3dzZXJNb2R1bGUsIExpc3RlQ2hvc2VzTW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbIENvbXBEZW1vTTJNIF0sXG4gICAgYm9vdHN0cmFwOiAgICBbIENvbXBEZW1vTTJNIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gSnVzdGUgcG91ciBiaWVuIGxpZXIgbGEgdmVyc2lvbiBzYW5zIGZyYW1ld29ya1xuICAgICAgICBsZXQgUGFsbCA9IFByb21pc2UuYWxsKFtMaXN0ZUNob3Nlc1NlcnZpY2UuZ2V0RGF0YSgpLCBQcm9tZXNzZURvY3VtZW50UHJldF0pO1xuICAgICAgICBQYWxsLnRoZW4oIChbbmZdKSA9PiB7XG4gICAgICAgICAgICBuZXcgTGlzdGVDaG9zZXNJSE0obmYsIFwiI3NhbnNGcmFtZXdvcmtcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCk7XG5wbGF0Zm9ybS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
