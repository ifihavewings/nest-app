import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive, Min } from 'class-validator';

// Define a generic Pagination DTO (Data Transfer Object)
export class PaginationDto {
  @ApiProperty({ description: 'Page number', default: 1 })
  @IsPositive()
  @IsOptional()
  page: number = 1;

  @ApiProperty({ description: 'Number of items per page', default: 10 })
  @Min(1)
  @IsOptional()
  pageSize: number = 10;

  @ApiProperty({ description: 'Field to sort by', required: false })
  @IsOptional()
  sortField: string;

  @ApiProperty({ description: 'Sort order', enum: ['ASC', 'DESC'], default: 'ASC' })
  @IsOptional()
  sortOrder: 'ASC' | 'DESC' = 'ASC';
}
