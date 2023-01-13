import {Pipe, PipeTransform} from "@angular/core";
import {ValidationErrors} from "@angular/forms";

@Pipe({
  name: 'onlyOneError'
})
export class OnlyOneErrorPipe implements PipeTransform {
  transform(allErrors: any, errorsPriority: string[]): any {
    if (!allErrors) {
      return null;
    }

    const onlyOneError: any = {};

    for (const error of errorsPriority) {
      if (allErrors[error]) {
        onlyOneError[error] = allErrors[error];
        break;
      }
    }

    return onlyOneError;
  }

}
