import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule], //cpu module now have all the exported services from the PowerModule
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
