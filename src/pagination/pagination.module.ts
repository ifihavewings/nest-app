import { Module, Global } from '@nestjs/common';
import { PaginationService } from './pagination.service';

// Use @Global decorator to register a global module
@Global()
@Module({
  providers: [PaginationService],
  exports: [PaginationService], // Make PaginationService available for other modules
})
export class PaginationModule {}
