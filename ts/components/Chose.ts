import {Component, Input, ElementRef} from "@angular/core";
import {Chose} from "@NoyauFonctionnel/nf";
import {ViewChild} from "@angular/core/src/metadata/di";

const htmlTemplate = `
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

@Component({
  selector		: "item-chose",
  template		: htmlTemplate
})
export class ItemChose {
    editing : boolean = false;
    //@ViewChild("newText") newText : ElementRef;
	@Input() 	nf		: Chose;

    modeEdition() : void {
        this.editing = true;
    }

    /*setText(text : String) : void {
        this.editing = false
    }*/
};


