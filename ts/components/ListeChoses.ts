import {Component, Input, OnInit}               from "@angular/core";
import {Chose, ListeChoses as ListeChosesNF} 	from "@NoyauFonctionnel/nf";
import {ListeChosesService}                     from "@NoyauFonctionnel/service";

const htmlTemplate = `
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

type filterChose = (c : Chose) => boolean;
@Component({
  selector		: "liste-choses",
  template		: htmlTemplate
})
export class ListeChoses implements OnInit {
    @Input() titre	: string;
    public nf       : ListeChosesNF;
    private choses  : Chose[] = [];
    filterAll : filterChose = (c) => true;
    filterCompleted : filterChose = (c) => c.fait;
    filterActive : filterChose = (c) => !c.fait;
    filter : filterChose = this.filterAll;

	constructor		(private serviceListe: ListeChosesService) {
	};
    ngOnInit(): void {
        ListeChosesService.getData().then( (nf) => {
            this.nf     = nf;
            this.choses = nf.choses;
        });
    }
    getChoses() : Chose[] {
        return this.choses.filter(this.filter);
    }
}

