import { Food } from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';
import { User } from './app/shared/models/User';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza carne',
    price: 35,
    tags: ['FastFood', 'Pizza', 'Lunch'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-1.jpg',
    origins: ['Italy', 'Rome'],
    cookTime: '40',
  },
  {
    id: '2',
    name: 'Calzone',
    price: 20,
    tags: ['FastFood', 'Snack'],
    favorite: true,
    stars: 5.0,
    imageUrl: 'assets/food-2.jpg',
    origins: ['Italy', 'Rome'],
    cookTime: '20',
  },
  {
    id: '3',
    name: 'Lasagna',
    price: 25,
    tags: ['FastFood', 'Lunch'],
    favorite: false,
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    origins: ['Italy', 'Rome'],
    cookTime: '30',
  },
  {
    id: '4',
    name: 'Pizza Chicken',
    price: 35,
    tags: ['FastFood', 'Pizza', 'Lunch'],
    favorite: true,
    stars: 4.0,
    imageUrl: 'assets/food-4.jpg',
    origins: ['Italy', 'Rome'],
    cookTime: '40',
  },
  {
    id: '5',
    name: 'Pizza Vegan',
    price: 30,
    tags: ['FastFood', 'Pizza', 'Vegan'],
    favorite: false,
    stars: 2.0,
    imageUrl: 'assets/food-5.jpg',
    origins: ['Italy', 'Rome'],
    cookTime: '40',
  },
  {
    id: '6',
    name: 'Tiramisu',
    price: 20,
    tags: ['Desert'],
    favorite: true,
    stars: 4.5,
    imageUrl: 'assets/food-6.jpg',
    origins: ['Italy', 'Rome'],
    cookTime: '10',
  },
];

export const sample_tags: Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 3 },
  { name: 'Pizza', count: 3 },
  { name: 'Lunch', count: 3 },
  { name: 'Snack', count: 1 },
  { name: 'Vegan', count: 1 },
  { name: 'Desert', count: 1 },
];

export const sample_users: any[] = [
  {
    name: 'Dragos',
    email: 'dragos@gmail.com',
    password: '111',
    address: 'iasi',
    isAdmin: true,
  },
  {
    name: 'Stefania',
    email: 'stefania@gmail.com',
    password: '222',
    address: 'iasi',
    isAdmin: false,
  },
  {
    name: 'Eduard',
    email: 'eduard@gmail.com',
    password: '333',
    address: 'iasi',
    isAdmin: false,
  },
  {
    name: 'Paula',
    email: 'paula@gmail.com',
    password: '444',
    address: 'iasi',
    isAdmin: false,
  },
];
