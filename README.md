# entry-block-data

```js
var result = EntryStatic.getAllBlocks()
    .filter(({ category }) =>
        ![
            "ai_utilize",
            "expansion",
            "arduino"
        ].includes(category)
    )
    .map(({ category, blocks }) =>({
        category,
        blocks: blocks.map(blockName => ({
            ...Entry.block[blockName],
            blockName,
            template: Lang.template[blockName],
        }))
    }))

copy(JSON.stringify(result))
```

https://app.quicktype.io/?l=ts