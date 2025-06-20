import { Test } from '@nestjs/testing';
import { PatientsService } from './patients.service';

describe('PatientsService', () => {
    let service: PatientsService;

    beforeAll(async () => {
        const app = await Test.createTestingModule({
            providers: [PatientsService],
        }).compile();

        service = app.get<PatientsService>(PatientsService);
    });

    describe('getData', () => {
        it('should return "Hello API"', () => {
            expect(service.getData()).toEqual({ message: 'Hello API' });
        });
    });
});
