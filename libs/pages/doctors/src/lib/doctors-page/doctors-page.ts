import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lib-doctors-page',
    imports: [CommonModule],
    templateUrl: './doctors-page.html',
    styleUrl: './doctors-page.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorsPage {
}
