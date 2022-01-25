import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Category } from './Category'
import { Users } from './Users';

@Entity("Cars")
export class Cars {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    brand: String;

    @Column()
    model: String;

    @Column()
    price: Number;

    @Column()
    user_id: Number;

    @Column()
    category_id: Number;

    @ManyToOne(() => Users)
    @JoinColumn({name: "user_id"})
    user: Users;

    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category;

    @CreateDateColumn()
    created_at: Date;
}