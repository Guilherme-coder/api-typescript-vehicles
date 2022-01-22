import { Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity("Category")
export class Category {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @CreateDateColumn()
    created_at: Date;
}