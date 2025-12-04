import type { TweenTarget } from "gsap";

declare module "gsap/SplitText" {
  export interface SplitTextInstance {
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
    revert(): void;
  }

  export class SplitText implements SplitTextInstance {
    constructor(target: TweenTarget, vars?: Record<string, unknown>);
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
    revert(): void;
  }

  export default SplitText;
}
