import { Pipe, PipeTransform } from '@angular/core';
import { CurrentUserQuery } from '../states/current-user';
@Pipe({
    name: 'avatarSize'
})
export class AvatarPipe implements PipeTransform {
    constructor(
        private currentUserQuery: CurrentUserQuery
    ) {

    }
    //LEARN: Pipe tool
    transform(value: string | string[] | undefined, ...args: any[]): any {
        const [size] = args;
        console.log('size', size);
        if (value) {
            return `https://awread-bucket.ss-hn-1.bizflycloud.vn/users/${size ?? 'origin'}/${this.currentUserQuery.getUserId()}.webp`;
        }
        return '/global-assets/images/bigImg.webp';
    }

}
