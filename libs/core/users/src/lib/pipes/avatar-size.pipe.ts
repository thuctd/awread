import { Pipe, PipeTransform } from '@angular/core';
import { SettingFacade } from '@awread/core/setting';
import { CurrentUserFacade } from '../facades';

@Pipe({
    name: 'avatarSize'
})
export class AvatarSizePipe implements PipeTransform {

    constructor(
        private currentUserFacade: CurrentUserFacade,
        private settingFacade: SettingFacade,
    ) {

    }
    //LEARN: Pipe tool
    transform(user, ...args: any[]): any {
        const size = args[0];
        console.log('size', size, user, `${this.settingFacade.getStorage()}/users/${size ?? 'origin'}/${user.userId}.webp?updatedAt=${user?.updatedAt}`);
        if (user && user.userId) {
            return `${this.settingFacade.getStorage()}/users/${size ?? 'origin'}/${user.userId}.webp?updatedAt=${user?.updatedAt}`;
        }
        return '/global-assets/images/bigImg.webp';
    }

}
