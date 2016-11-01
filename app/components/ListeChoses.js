System.register(["@angular/core", "@NoyauFonctionnel/service"], function(exports_1, context_1) {
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
    var core_1, service_1;
    var htmlTemplate, ListeChoses;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>{{titre}}</h1>
			<form>
				<input class="new-todo" placeholder="Que faire?" #newTodo autofocus>
			</form>
		</header>
		<section class="main">
			<input  class="toggle-all" 
			        type="checkbox"
			        />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
            <li         *ngFor              =   "let c of getChoses()"  
			            [class.completed]   =   "c.fait"
			            [class.editing]     =   "item.editing"        
                >
			        <item-chose [nf]="c" #item></item-chose>
                </li>
            </ul>
		</section>
        <footer class="footer">
            <span class="todo-count"><strong></strong> restantes</span>
            <ul class="filters">
                <li>
                    <a>Tous</a>{{getChoses().length}}
                </li>
                <li>
                    <a>Actifs</a>
                </li>
                <li>
                    <a>Complétés</a>
                </li>
            </ul>
            <button class="clear-completed">Supprimer cochées</button>
        </footer>
	</section>
	<hr/>
	<section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
	</section>
`;
            ListeChoses = class ListeChoses {
                constructor(serviceListe) {
                    this.serviceListe = serviceListe;
                    this.choses = [];
                    this.filterAll = (c) => true;
                    this.filterCompleted = (c) => c.fait;
                    this.filterActive = (c) => !c.fait;
                    this.filter = this.filterAll;
                }
                ;
                ngOnInit() {
                    service_1.ListeChosesService.getData().then((nf) => {
                        this.nf = nf;
                        this.choses = nf.choses;
                    });
                }
                getChoses() {
                    return this.choses.filter(this.filter);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], ListeChoses.prototype, "titre", void 0);
            ListeChoses = __decorate([
                core_1.Component({
                    selector: "liste-choses",
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [service_1.ListeChosesService])
            ], ListeChoses);
            exports_1("ListeChoses", ListeChoses);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUlNLFlBQVk7Ozs7Ozs7Ozs7WUFBWixZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNENwQixDQUFDO1lBT0Y7Z0JBU0MsWUFBc0IsWUFBZ0M7b0JBQWhDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtvQkFOM0MsV0FBTSxHQUFjLEVBQUUsQ0FBQztvQkFDL0IsY0FBUyxHQUFpQixDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7b0JBQ3RDLG9CQUFlLEdBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzlDLGlCQUFZLEdBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDNUMsV0FBTSxHQUFpQixJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUd6QyxDQUFDOztnQkFDRSxRQUFRO29CQUNKLDRCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxFQUFFLEdBQU8sRUFBRSxDQUFDO3dCQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsU0FBUztvQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQztZQW5CRztnQkFBQyxZQUFLLEVBQUU7O3NEQUFBO1lBTFo7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUksY0FBYztvQkFDMUIsUUFBUSxFQUFJLFlBQVk7aUJBQ3pCLENBQUM7OzJCQUFBO1lBQ0YscUNBb0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9MaXN0ZUNob3Nlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSAgICAgICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Nob3NlLCBMaXN0ZUNob3NlcyBhcyBMaXN0ZUNob3Nlc05GfSBcdGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9uZlwiO1xuaW1wb3J0IHtMaXN0ZUNob3Nlc1NlcnZpY2V9ICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL3NlcnZpY2VcIjtcblxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuXHQ8c2VjdGlvbiBjbGFzcz1cInRvZG9hcHBcIj5cblx0XHQ8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG5cdFx0XHQ8aDE+e3t0aXRyZX19PC9oMT5cblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiIHBsYWNlaG9sZGVyPVwiUXVlIGZhaXJlP1wiICNuZXdUb2RvIGF1dG9mb2N1cz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cblx0XHRcdDxpbnB1dCAgY2xhc3M9XCJ0b2dnbGUtYWxsXCIgXG5cdFx0XHQgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHQgICAgICAgIC8+XG5cdFx0XHQ8bGFiZWwgZm9yPVwidG9nZ2xlLWFsbFwiPk1hcmsgYWxsIGFzIGNvbXBsZXRlPC9sYWJlbD5cblx0XHRcdDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuICAgICAgICAgICAgPGxpICAgICAgICAgKm5nRm9yICAgICAgICAgICAgICA9ICAgXCJsZXQgYyBvZiBnZXRDaG9zZXMoKVwiICBcblx0XHRcdCAgICAgICAgICAgIFtjbGFzcy5jb21wbGV0ZWRdICAgPSAgIFwiYy5mYWl0XCJcblx0XHRcdCAgICAgICAgICAgIFtjbGFzcy5lZGl0aW5nXSAgICAgPSAgIFwiaXRlbS5lZGl0aW5nXCIgICAgICAgIFxuICAgICAgICAgICAgICAgID5cblx0XHRcdCAgICAgICAgPGl0ZW0tY2hvc2UgW25mXT1cImNcIiAjaXRlbT48L2l0ZW0tY2hvc2U+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cdFx0PC9zZWN0aW9uPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj48c3Ryb25nPjwvc3Ryb25nPiByZXN0YW50ZXM8L3NwYW4+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YT5Ub3VzPC9hPnt7Z2V0Q2hvc2VzKCkubGVuZ3RofX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGE+QWN0aWZzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YT5Db21wbMOpdMOpczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGVhci1jb21wbGV0ZWRcIj5TdXBwcmltZXIgY29jaMOpZXM8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG5cdDwvc2VjdGlvbj5cblx0PGhyLz5cblx0PHNlY3Rpb24+XG5cdCAgICA8c2VjdGlvbiAqbmdGb3I9XCJsZXQgY2hvc2Ugb2YgZ2V0Q2hvc2VzKClcIj5cblx0ICAgICAgICB7e2Nob3NlLmZhaXR9fSA6IHt7Y2hvc2UudGV4dGV9fVxuICAgICAgICA8L3NlY3Rpb24+XG5cdDwvc2VjdGlvbj5cbmA7XG5cbnR5cGUgZmlsdGVyQ2hvc2UgPSAoYyA6IENob3NlKSA9PiBib29sZWFuO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yXHRcdDogXCJsaXN0ZS1jaG9zZXNcIixcbiAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXMgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRpdHJlXHQ6IHN0cmluZztcbiAgICBwdWJsaWMgbmYgICAgICAgOiBMaXN0ZUNob3Nlc05GO1xuICAgIHByaXZhdGUgY2hvc2VzICA6IENob3NlW10gPSBbXTtcbiAgICBmaWx0ZXJBbGwgOiBmaWx0ZXJDaG9zZSA9IChjKSA9PiB0cnVlO1xuICAgIGZpbHRlckNvbXBsZXRlZCA6IGZpbHRlckNob3NlID0gKGMpID0+IGMuZmFpdDtcbiAgICBmaWx0ZXJBY3RpdmUgOiBmaWx0ZXJDaG9zZSA9IChjKSA9PiAhYy5mYWl0O1xuICAgIGZpbHRlciA6IGZpbHRlckNob3NlID0gdGhpcy5maWx0ZXJBbGw7XG5cblx0Y29uc3RydWN0b3JcdFx0KHByaXZhdGUgc2VydmljZUxpc3RlOiBMaXN0ZUNob3Nlc1NlcnZpY2UpIHtcblx0fTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgTGlzdGVDaG9zZXNTZXJ2aWNlLmdldERhdGEoKS50aGVuKCAobmYpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmYgICAgID0gbmY7XG4gICAgICAgICAgICB0aGlzLmNob3NlcyA9IG5mLmNob3NlcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENob3NlcygpIDogQ2hvc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNob3Nlcy5maWx0ZXIodGhpcy5maWx0ZXIpO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
