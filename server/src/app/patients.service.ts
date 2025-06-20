import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientsService {
    getData(): { message: string } {
        return { message: 'Hello API' };
    }
}
