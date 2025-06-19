import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Patient } from '../../models/patients';

const RESOURCE_URL = 'https://jsonplaceholder.typicode.com/todos/';

@Component({
    selector: 'lib-patients-page',
    imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule, FormsModule],
    templateUrl: './patients-page.html',
    styleUrl: './patients-page.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsPage {
    searchText = signal('1');

    patientsList = resource({
        params: () => ({ id: this.searchText() }),
        loader: ({ params }) => fetch(RESOURCE_URL + params.id).then(r => r.json()),
    });

    displayedColumns: (keyof Patient)[] = ['name', 'age', 'sex'];

    constructor() {
        effect(() => {
            console.log('Search text changed:', this.searchText());

            console.log((this.patientsList.value() as Response));
        });
    }

}
