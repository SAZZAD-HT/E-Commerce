import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class tblMechanic{
    @PrimaryGeneratedColumn()
    MechanicId: number;
    @Column()
    MechanicName: string;
    @Column()
    MechanicTypeName: string;
    @Column()
    City: string;
    @Column()
    ActiveHours: string;    
    @Column()
    IsActive: string;
}
