import { Request, Response } from 'express';

import ExampleService from '../services/ExampleService';

class ExampleController {
  show(request: Request, response: Response): Response {
    const exampleService = new ExampleService();

    exampleService.doService();

    return response.status(200).json({ message: 'ok' });
  }
}

export default ExampleController;
