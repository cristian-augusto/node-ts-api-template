import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_example')
class Example {
  @PrimaryGeneratedColumn('uuid')
  id: number;
}

export default Example;
