import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationsRepository: Repository<Organization>,
  ) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    const organization = new Organization();
    organization.name = createOrganizationDto.name;
    organization.management = createOrganizationDto.management;
    organization.employeeCount = createOrganizationDto.employeeCount;
    organization.startDate = createOrganizationDto.startDate;

    return this.organizationsRepository.save(organization);
  }

  findAll() {
    return this.organizationsRepository.find();
  }

  findSome(name: string) {
    return this.organizationsRepository
      .createQueryBuilder('organization')
      .where('organization.name = :name', { name: name })
      .getMany();
  }

  findOne(id: string) {
    return this.organizationsRepository.findOne({ id: id });
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationsRepository.update(
      { id: id },
      updateOrganizationDto,
    );
  }

  remove(id: string) {
    return this.organizationsRepository.delete({ id: id });
  }
}
