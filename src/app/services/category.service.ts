import { Injectable } from '@angular/core';
import{Category} from 'src/app/models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  catname = [
    new Category( 'CDAC',false),
    new Category('CDAC',false),
    new Category('CDAC',false)
  ];
  constructor() { }
}
