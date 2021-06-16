1) không import đường dẫn tương đối khi khác library:
- sai: `import { CurrentUserFacade } from './../../../../../../../../core/users/src/lib/facades/current-user.facade';`
- đúng `import { CurrentUserFacade } from '@awread/core/users';`
