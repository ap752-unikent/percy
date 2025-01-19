import { BadRequestException, Injectable } from '@nestjs/common';
import data from '../data.json';
import pouchPricesGbp from '../pouch-prices-gbp.json';
import { Cat, User } from 'types';

const pouchPriceData = pouchPricesGbp as Record<string, number>;

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(userId: string): User {
    const user = data.find((user) => user.id === userId);

    if (user === undefined) {
      throw new BadRequestException('Input query parameter is required');
    }

    return user;
  }

  checkCats(user: User): void {
    const cats = user?.cats ?? [];
    const numberOfCats = cats.length;

    if (numberOfCats === 0) {
      throw new BadRequestException('User has no cats');
    }
  }

  generateTitle(user: User): string {
    const cats = user?.cats ?? [];

    return `Your next delivery for ${catMessage(cats)}`;
  }

  calculatePriceGbp(user: User): number {
    const cats = user?.cats ?? [];
    const activeCats = cats.filter(cat => cat.subscriptionActive === true);
    
    const price = activeCats.reduce((acc, cat) => pouchPriceData[cat.pouchSize] + acc, 0);

    return price;
  }

  freeGift(priceGbp: number): boolean {
    return priceGbp > 120;
  }

  getMessage = (user: User): string => {
    const cats = user?.cats ?? [];
    const firstName = user?.firstName ?? '';

    return `Hello ${firstName}! In two days' time, we'll be charging you for your next order for ${catMessage(cats)}'s fresh food.`;
  }
}

/*
* there was nothing mentioned about the cats subscription needing to be active
* so I will just check if the user has cats
*/
const catMessage = (cats: Cat[]) => {

  const numberOfCats = cats.length;

  switch (numberOfCats) {
    case 1:
      return cats[0].name;
    case 2:
      return `${cats[0].name} and ${cats[1].name}`;
    default:
      return `${cats.map(c => c.name).slice(0, cats.length - 1).join(", ")} and ${cats[cats.length - 1].name}`;
  }
};