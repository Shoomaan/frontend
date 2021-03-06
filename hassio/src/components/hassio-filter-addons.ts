import * as Fuse from "fuse.js";
import { HassioAddonInfo } from "../../../src/data/hassio/addon";

export function filterAndSort(addons: HassioAddonInfo[], filter: string) {
  const options: Fuse.FuseOptions<HassioAddonInfo> = {
    keys: ["name", "description", "slug"],
    caseSensitive: false,
    minMatchCharLength: 2,
    threshold: 0.2,
  };
  const fuse = new Fuse(addons, options);
  return fuse.search(filter);
}
