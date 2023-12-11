import data from "./data.json" assert { type: "json" }

type Block = {
    color: string
    outerLine: string
    skeleton: string
    statements: { accept: string }[]
    params: { type: string }[]
    events: {}
    def: {
      params: any[]
      type: string
      category: string
      id: string
    }
    class: string
    isNotFor: []
    event: string
    syntax: {
      js: []
      py: {
        syntax: string
        blockType: string
        key: string
        template: string
        isDefault: true
      }[]
    }
    isFor: string[]
    blockName: string
    template: string
}

export default data as {
    category: string
    blocks: Block[]
}[]