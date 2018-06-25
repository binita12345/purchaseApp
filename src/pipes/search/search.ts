import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
 //  	transform(items: any[], terms: string): any[] {
	//   if(!items) return [];
	//   if(!terms) return items;
	//   terms = terms.toLowerCase();
	//   return items.filter( it => {
	//     return it.name.toLowerCase().includes(terms); // only filter country name
	//   });
	// }
	// transform(items: any[], params: string[]) {
	//     let query = params[0];
	//     return items.filter(client => 
	//         client.name.toLowerCase().indexOf(query) > -1
	//     );
	//   }
	transform(contacts: Array<any>, searchTerm: string) : Array<any> {
	    if (contacts == null) {
	      return [];
	    }
	    if (searchTerm == null) {
	      return contacts;
	    }
	    return contacts.filter( contact => {
	      return `${contact.firstName} ${contact.lastName}`.toLowerCase().indexOf(searchTerm) > -1;
	    });
  	}
}
