import data from "./data.json" assert { type: "json" }

import type { CategoryData } from "./type.ts"
export * from "./type.ts"

export default data as CategoryData[]