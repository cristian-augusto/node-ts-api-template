import { Entity } from 'typeorm';

@Entity('tb_example')
class Example {
  id: number;
}

export default Example;
