/**
 * @module Utils
 *
 */

declare var window: { __STRING_REGISTRY__: any };

const getString = (str: string): string => {
	if (window.__STRING_REGISTRY__ && window.__STRING_REGISTRY__[str]) {
		return window.__STRING_REGISTRY__[str];
	}
	return str;
};

export function fmt(str: string, formats: any[]) {
  // first, replace any ORDERED replacements.
  let idx = 0; // the current index for non-numerical replacements
  return str.replace(/%@([0-9]+)?/g, (_s: string, argIndex: string) => {
    let i = argIndex ? parseInt(argIndex, 10) - 1 : idx++;
    let r = i < formats.length ? formats[i] : undefined;
    return typeof r === 'string' ? r : r === null ? '(null)' : r === undefined ? '' : '' + r;
  });
}

export function loc(str: string, formats: any[]): string {
	str = getString(str);
	return fmt(str, formats);
}
