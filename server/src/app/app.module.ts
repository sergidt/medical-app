import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PatientsService } from './patients.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [PatientsService],
})
export class AppModule {
}
