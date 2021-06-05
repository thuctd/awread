import { Pipe, PipeTransform } from '@angular/core';
import { SettingFacade } from '@awread/core/setting';
import { CurrentUserFacade } from '../facades';

@Pipe({
    name: 'avatarSize'
})
export class AvatarPipe implements PipeTransform {

    constructor(
        private currentUserFacade: CurrentUserFacade,
        private settingFacade: SettingFacade,
    ) {

    }
    //LEARN: Pipe tool
    transform(value: string | string[] | undefined, ...args: any[]): any {
        const [size] = args;
        // console.log('size', size);
        if (value) {
            return `${this.settingFacade.getStorage()}/users/${size ?? 'origin'}/${this.currentUserFacade.currentUserQuery.getUserId()}.webp`;
        }
        return '/global-assets/images/bigImg.webp';
    }

}
