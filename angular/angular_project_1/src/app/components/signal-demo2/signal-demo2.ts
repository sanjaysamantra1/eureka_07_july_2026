import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.html',
  styleUrl: './signal-demo2.css',
})
export class SignalDemo2 {
  httpClient = inject(HttpClient);

  userId: WritableSignal<number> = signal(1);
  userData: WritableSignal<any> = signal({});

  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });

  fetchUserDetails(id: any) {
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((response) => {
        this.userData.set(response);
      });
  }

  incrementUserId() {
    this.userId.update((userId) => userId + 1);
  }
}
