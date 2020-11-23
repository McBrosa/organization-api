import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDto {
  @ApiProperty({
    description: 'The name of the organization',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The number of employees at the organization',
    type: Number,
  })
  employeeCount: number;

  @ApiProperty({
    description: 'The management type of an organization',
    enum: ['private', 'public'],
    type: Number,
  })
  management: number;

  @ApiProperty({
    description: 'The date the organization was founded',
    type: String,
  })
  startDate: string;
}
