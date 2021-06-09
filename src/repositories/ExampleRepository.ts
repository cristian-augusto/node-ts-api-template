import { getRepository, Repository } from 'typeorm';
import Example from '../models/Example';

class ExampleRepository {
  private repository: Repository<Example>;

  constructor() {
    this.repository = getRepository(Example);
  }

  create(): Example {
    return this.repository.create();
  }
}

export default ExampleRepository;
