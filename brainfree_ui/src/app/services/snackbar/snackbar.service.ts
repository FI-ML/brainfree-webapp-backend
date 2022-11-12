import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private readonly horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private readonly verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private readonly snackBar: MatSnackBar) {
  }

  public openSuccessSnackBar(message: string, duration: number): void {
    this.snackBar.open(message, '', {
      duration: duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar', 'mat-primary']
    });
  }


  public openErrorSnackBar(message: string): void {
    this.snackBar.open(message, 'ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['error-snackbar', 'mat-warn']
    });
  }
}
