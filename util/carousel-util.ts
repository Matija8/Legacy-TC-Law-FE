import { clamp } from 'util/helpers';

const MAX_ITEMS_TO_SHOW = 3;

export class CarouselHelper<T> {
  public itemCount: number;
  public take: number;

  constructor(items: T[], private fstItemShownIdx: number, widthInPx: number) {
    this.itemCount = items.length;
    this.take = (() => {
      const maxTakePossible = Math.min(MAX_ITEMS_TO_SHOW, this.itemCount);
      const prefferedTake = Math.floor((widthInPx - 20) / 250);
      return clamp(1, prefferedTake, maxTakePossible);
    })();
  }

  public isShowNextPossible() {
    return this.fstItemShownIdx < this.maxFstIndexPossible();
  }

  public prevFstItemIndex() {
    return Math.max(0, this.fstItemShownIdx - 1);
  }

  public nextFstItemIndex() {
    return Math.min(this.maxFstIndexPossible(), this.fstItemShownIdx + 1);
  }

  public shouldHideItem(itemIdx: number) {
    return (
      itemIdx < this.fstItemShownIdx || itemIdx > this.lastItemShownIndex()
    );
  }

  public shouldRenderLRButtons() {
    return this.take < this.itemCount;
  }

  private lastItemShownIndex() {
    return this.fstItemShownIdx + this.take - 1;
  }

  private maxFstIndexPossible() {
    return this.itemCount - this.take;
  }
}
