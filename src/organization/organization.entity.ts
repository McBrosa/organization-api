import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Management {
  private,
  public,
}

@Entity('organization')
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 500 })
  name: string;

  @Column('date')
  startDate: Date;

  @Column('int')
  employeeCount: number;

  @Column('int') // enum not supported for postgres
  management: Management;
}
