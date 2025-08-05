import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Lizard } from '../../services/lizard';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  lizardService = inject(Lizard);

  baseClicks = toSignal(this.lizardService.getLizardCount(), {
    initialValue: 0,
  });
  localClicks = signal(0);

  clicks = computed(() => this.baseClicks() + this.localClicks());

  lizard() {
    const audio = new Audio('/lizard.mp3');
    audio.play();

    this.lizardService.createLizard().subscribe({
      next: () => {
        this.localClicks.update((value) => value + 1);
      },
    });
  }
}
