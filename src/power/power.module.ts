import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], //by default PowerService is private to this module
  exports: [PowerService], //PowerService is in exports which means other modules can use PowerService
})
export class PowerModule {}
