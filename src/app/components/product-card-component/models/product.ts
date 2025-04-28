export class Product {
    name: string;
    description: string;
    imagePath: string;
    price: number;
    likes: number;

  
    constructor(id: number, name: string, description: string, path: string, price: number, likes: number) {
      this.name = name;
      this.description = description;
      this.imagePath = path;
      this.price = price;
      this.likes = likes;
    }

    getName(): string {
        return this.name;
    }
  }