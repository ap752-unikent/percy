import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

type Response = {
  title: string;
  message: string;
  price: number;
  freeGift: boolean;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/comms/your-next-delivery/:userId') 
  getUser(@Param('userId') userId: string): Response {
    const user = this.appService.getUser(userId);
    const title = this.appService.generateTitle(user);
    const message = this.appService.getMessage(user);
    const price = this.appService.calculatePriceGbp(user);
    const freeGift = this.appService.freeGift(price);

    return {
      title: title,
      message: message,
      price: price,
      freeGift: freeGift
    };
  }
}
