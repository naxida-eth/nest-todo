import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  index(@Res() res) {
    console.log({
      key: 'redirect',
    });
    res.status(302).redirect('/some');
  }
}
