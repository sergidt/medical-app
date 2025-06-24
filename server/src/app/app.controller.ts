import { Controller, Get } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller()
export class AppController {
    constructor(private readonly patientService: PatientsService) {
    }

    @Get()
    getPatientsList() {
        return this.patientService.getPatientsList();
    }
}
