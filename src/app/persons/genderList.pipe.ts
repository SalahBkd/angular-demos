import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'genderList'
})
export class GenderListPipe implements PipeTransform {
  transform(persons) {
    const genders = [];
    persons.forEach(person => {
      if (genders.indexOf(person.gender) <= -1) {
        genders.push(person.gender);
      }
    });
    return genders.join(', ');
  }
}
