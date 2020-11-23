import { PartialType } from '@nestjs/mapped-types';
import { PartialType as SwaggerPartialType } from '@nestjs/swagger';

import { CreateOrganizationDto } from './create-organization.dto';

export class UpdateOrganizationDto extends PartialType(
  SwaggerPartialType(CreateOrganizationDto),
) {}
