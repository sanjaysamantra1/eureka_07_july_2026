import { Service } from '@angular/core';

@Service()
export class UserInformation {
  private current_user = 'Sanjay';
  private role = 'trainer';

  getCurrentUser() {
    return this.current_user;
  }
  getUserRole() {
    return this.role;
  }
}
