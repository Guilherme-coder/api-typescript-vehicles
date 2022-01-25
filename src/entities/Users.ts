import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity("Users")
export class Users {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    email: String;

    @Column()
    username: String;

    @Column()
    tel: String;

    @Column()
    password: String;

    @CreateDateColumn()
    created_at: Date;
}