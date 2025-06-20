import { Controller, Get } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller()
export class AppController {
    constructor(private readonly appService: PatientsService) {
    }

    @Get()
    getPatientsList() {
        return this.appService.getData();
    }
}
