import { Pipe, PipeTransform } from '@angular/core';
import { CurrentUserQuery } from '../states/current-user';
import { SettingFacade } from '@awread/core/setting';
@Pipe({
    name: 'avatarSize'
})
export class AvatarPipe implements PipeTransform {

    constructor(
        private currentUserQuery: CurrentUserQuery,
        private settingFacade: SettingFacade,
    ) {

    }
    //LEARN: Pipe tool
    transform(value: string | string[] | undefined, ...args: any[]): any {
        const [size] = args;
        // console.log('size', size);
        if (value) {
            return `${this.settingFacade.getStorage()}/users/${size ?? 'origin'}/${this.currentUserQuery.getUserId()}.webp`;
        }
        return '/global-assets/images/bigImg.webp';
    }

}
