import{Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { UserRole } from '../../auth/enum/user.role.enum';
import { Category } from 'src/categories/entities/category.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    userName:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column({
        type:'enum',
        enum:UserRole,
        default:UserRole.USER
    })
    role:UserRole;

    @Column({
        default:false
    })
    isBlocked:boolean;

    @OneToMany(()=>Category,(category)=>category.addedBy)
    categories:Category[];
}
