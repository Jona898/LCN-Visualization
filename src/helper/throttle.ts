/**
 * Call the passt function only after wait time is completed.
 * Passes arguments to this function on to the inner function.
 *
 * @param fn Function to throttle
 * @param wait time in ms to wait between fn calls, if called in the mean time
 */
export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  wait: number = 300
): ((...argsParams: Parameters<T>) => void) => {
  let inThrottle: boolean,
    lastFn: ReturnType<typeof setTimeout>,
    waitingArgs: Parameters<T> | undefined;

  const timeoutFunc = () => {
    if (waitingArgs == undefined) {
      inThrottle = false;
    } else {
      fn(...waitingArgs);
      waitingArgs = undefined;
      lastFn = setTimeout(timeoutFunc, wait);
    }
  };

  return (...argsParams: Parameters<T>): void => {
    if (inThrottle) {
      waitingArgs = argsParams;
      return;
    }

    fn(...argsParams);
    inThrottle = true;

    clearTimeout(lastFn);
    lastFn = setTimeout(timeoutFunc, wait);
  };
};
