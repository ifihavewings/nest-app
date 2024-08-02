import { Injectable } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class PaginationService {
  // Generic function to handle pagination logic
  async paginate<T>(
    repository: Repository<T>, 
    paginationDto: PaginationDto,
    searchOptions: Partial<Record<keyof T, any>> = {} 
  ): Promise<{ data: T[]; total: number }> {
    const { page = 1, pageSize = 10, sortField, sortOrder } = paginationDto;

    // Create a query builder
    const queryBuilder = repository.createQueryBuilder('entity');

    // Apply search options
    for (const [key, value] of Object.entries(searchOptions)) {
      queryBuilder.andWhere(`entity.${key} = :${key}`, { [key]: value });
    }

    // Apply sorting options
    if (sortField) {
      queryBuilder.orderBy(`entity.${sortField}`, sortOrder);
    }

    // Apply pagination
    const [data, total] = await queryBuilder
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return { data, total };
  }
}
