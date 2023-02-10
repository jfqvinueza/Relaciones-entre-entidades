import { title } from "process";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity ('products',{schema:'ventas'})

export class ProductEntity{
    @PrimaryGeneratedColumn('sv')
    id:number;

    @CreateDateColumn({
        name: 'create_date', //nombre de la columna
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    //nombre del atributo
    createAt:Date;

    @UpdateDateColumn({
        name: 'update_date', //nombre de la columna
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;
    @DeleteDateColumn({
        name: 'delete_date', //nombre de la columna
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    deleteAt:Date;

    @Column('varchar'{
        name:'title',
        comment:'titulo'
    })
    title:string
}
//title precio descripcion images