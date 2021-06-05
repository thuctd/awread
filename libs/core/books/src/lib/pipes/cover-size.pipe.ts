import { Pipe, PipeTransform } from '@angular/core';
import { SettingFacade } from '@awread/core/setting';

@Pipe({
    name: 'coverSize'
})
export class CoverSizePipe implements PipeTransform {

    constructor(
        private settingFacade: SettingFacade,
    ) {

    }
    //LEARN: Pipe tool
    transform(book, ...args: any[]): any {
        const size = args[0];
        console.log('size', size, book, args);
        if (book && book.bookId) {
            return `${this.settingFacade.getStorage()}/books/${size ?? 'origin'}/${book?.bookId}.webp?updatedAt=${book?.updatedAt}`;
        }
        return '/global-assets/images/default-cover.jpg';
    }

}
