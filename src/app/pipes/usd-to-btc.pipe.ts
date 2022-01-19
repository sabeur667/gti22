import { Pipe, PipeTransform } from '@angular/core';

const BTCUSD = 41314;
@Pipe({
  name: 'usdToBtc'
})
export class UsdToBtcPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd = false): number {
    if (!isBtcToUsd)
      return amount / BTCUSD;
    return amount * BTCUSD;
  }

}
