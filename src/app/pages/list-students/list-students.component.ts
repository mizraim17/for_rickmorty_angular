import { Component, OnInit } from '@angular/core';
import { Studend } from '../../models/students.model';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  array_students: Studend[] = [
    new Studend(
      'Scarecrow',
      'Rick',
      33,
      'masculino',
      5.22,
      'https://rickandmortyapi.com/api/character/avatar/687.jpeg'
    ),
    new Studend(
      'Mizraim ',
      'Martínez',
      3,
      'masculino',
      8.22,
      'https://avatars.githubusercontent.com/u/40994803?v=4'
    ),
    new Studend(
      'Johnny ',
      'Depp',
      46,
      'masculino',
      9.52,
      'https://rickandmortyapi.com/api/character/avatar/183.jpeg'
    ),
    new Studend(
      'Woman  ',
      'Rick',
      46,
      'masculino',
      9.52,
      'https://rickandmortyapi.com/api/character/avatar/381.jpeg'
    ),
    new Studend(
      'Snake  ',
      'Hitler',
      13,
      'masculino',
      3.22,
      'https://rickandmortyapi.com/api/character/avatar/573.jpeg'
    ),
    new Studend(
      'Abradolf  ',
      'Lincler',
      88,
      'masculino',
      5.22,
      'https://rickandmortyapi.com/api/character/avatar/597.jpeg'
    ),
    new Studend(
      'Corn ',
      'detective',
      12,
      'femenino',
      8.8,
      'https://rickandmortyapi.com/api/character/avatar/403.jpeg'
    ),
    new Studend(
      'Alien Mexican  ',
      'Armada',
      12,
      'femenino',
      10,
      'https://rickandmortyapi.com/api/character/avatar/411.jpeg'
    ),
    new Studend(
      'Tammy ',
      'Guetermann',
      33,
      'femenino',
      5.9,
      'https://rickandmortyapi.com/api/character/avatar/626.jpeg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
