import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('categories', { schema:'ventas'})

export class CategoryEntity{
    @PrimaryGeneratedColumn('sv')
    id:number;

    @CreateDateColumn({
        name: 'create_date', //nombre de la columna
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    //nombre del atributo
    createAt:Date;

    @UpdateDateColumn({
        name: 'update_date', //nombre de la columna
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;
    @DeleteDateColumn({
        name: 'delete_date', //nombre de la columna
        type: 'timestamptz',
        nullable:true,
    })
    deleteAt:Date;
    //Relashions
    @OneToMany(() => ProductEntity, (product) = product.categories)
    products:ProductEntity;

    @Column('varchar', {
        name:'name',
        unique: true,
        comment: 'nombre de la categoria',
    })
    name:string;
    @Column('text',{
        name:'description',
        nullable:true,
        comment:'descripcion de la categoria',
    })
    descrition:string;
}