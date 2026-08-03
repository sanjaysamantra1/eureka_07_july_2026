import { Service } from '@angular/core';

@Service()
export class UserInformation {
  private current_user = 'Sanjay';

  getCurrentUser() {
    return this.current_user;
  }
}
