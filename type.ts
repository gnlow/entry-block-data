export interface CategoryData {
    category: Category;
    blocks:   Block[];
}

export interface Block {
    color:                     string;
    outerLine?:                OuterLine;
    skeleton:                  Skeleton;
    statements?:               Statement[];
    params:                    Array<FluffyParam | string>;
    events:                    Events;
    def?:                      PurpleDef;
    class?:                    string;
    isNotFor:                  string[];
    event?:                    string;
    syntax?:                   Syntax;
    isFor:                     IsFor[];
    blockName:                 string;
    template?:                 string;
    pyHelpDef?:                PyHelpDef;
    paramsKeyMap?:             { [key: string]: number };
    fontColor?:                FontColorEnum;
    statementsKeyMap?:         StatementsKeyMap;
    defs?:                     DefElement[];
    skeletonOptions?:          SkeletonOptions;
    changeEvent?:              Event;
    paramsBackupEvent?:        Event;
    destroyParamsBackupEvent?: Event;
}

export interface Event {
    _listeners: Listener[];
}

export interface Listener {
    obj: Obj;
}

export interface Obj {
    x:          number;
    y:          number;
    type:       string;
    params:     null[];
    statements: any[];
    movable:    null;
    deletable:  number;
    emphasized: boolean;
    readOnly:   null;
    copyable:   boolean;
    assemble:   boolean;
    extensions: any[];
}

export interface PurpleDef {
    params?:   Array<PurpleParam | number | null | string>;
    type:      string;
    category?: Category;
    id?:       string;
}

export type Category = "start" | "flow" | "moving" | "looks" | "brush" | "text" | "sound" | "judgement" | "calc" | "variable" | "func" | "analysis";

export interface PurpleParam {
    type:    DefaultTypeEnum;
    params?: string[];
    id?:     string;
}

export type DefaultTypeEnum = "number" | "True" | "angle" | "text" | "get_pictures" | "color" | "text_color" | "get_sounds" | "get_table_fields" | "False" | "boolean_shell";

export interface DefElement {
    params:   Array<PurpleParam | string>;
    type:     DefType;
    category: Category;
    id:       string;
}

export type DefType = "boolean_basic_operator" | "boolean_and_or" | "calc_basic";

export interface Events {
    dataAdd?:                null[];
    viewDestroy?:            null[];
    dataDestroy?:            null[];
    viewAdd?:                null[];
    mousedown?:              null[];
    updateFuncVariableList?: null[];
}

export type FontColorEnum = "#FFFFFF" | "#FFF" | "#fff" | "#333";

export type IsFor = "category_start" | "category_flow" | "category_moving" | "category_looks" | "category_brush" | "category_text" | "category_sound" | "category_judgement" | "category_calc" | "category_variable" | "category_func" | "category_analysis";

export type OuterLine = "#009400" | "#1498c0" | "#8b19db" | "#c72042" | "#fc6500" | "#ad2800" | "#508a00" | "#1b3ad8" | "#ff7f00" | "#b819b3" | "#a14100" | "#1592ff";

export interface FluffyParam {
    type:          TextParamType;
    img?:          string;
    size?:         number;
    position?:     Position;
    options?:      Array<Array<number | string>>;
    value?:        number | null | string;
    fontSize?:     number;
    bgColor?:      OuterLine;
    arrowColor?:   FontColorEnum;
    menuName?:     string;
    textColor?:    FontColorEnum;
    noArrow?:      boolean;
    accept?:       Accept;
    color?:        PurpleColor;
    defaultType?:  DefaultTypeEnum;
    text?:         string;
    isListIndex?:  boolean;
    align?:        string;
    dropdownSync?: DropdownSync;
    needDeepCopy?: boolean;
}

export type Accept = "string" | "Boolean" | "boolean";

export type PurpleColor = "#6B6B6B" | "#FFF" | "#4f80ff" | "#fff" | "white" | "#333";

export type DropdownSync = "dataTables";

export interface Position {
    x: number;
    y: number;
}

export type TextParamType = "Indicator" | "Keyboard" | "DropdownDynamic" | "Dropdown" | "Block" | "TextInput" | "LineBreak" | "Text" | "Color";

export interface PyHelpDef {
    params: Array<TentacledParam | IndigoParam | null>;
    type:   string;
}

export interface TentacledParam {
    type:    DefaultTypeEnum;
    params?: StickyParam[];
}

export type StickyParam = "A&value" | "A" | "C&value" | "B&value" | "B" | "D&value";

export type IndigoParam = "A&value" | "EQUAL" | "AND" | "PLUS" | "B&value";

export type Skeleton = "basic_event" | "basic" | "basic_without_next" | "basic_loop" | "basic_string_field" | "basic_boolean_field" | "basic_double_loop" | "basic_button" | "basic_text";

export interface SkeletonOptions {
    contentPos: ContentPos;
}

export interface ContentPos {
    x: number;
}

export interface Statement {
    accept: Skeleton;
}

export interface StatementsKeyMap {
    DO?:         number;
    STACK?:      number;
    STACK_IF?:   number;
    STACK_ELSE?: number;
}

export interface Syntax {
    js: any[];
    py: Array<PyClass | string>;
}

export interface PyClass {
    syntax:      string;
    blockType?:  BlockType;
    key:         string;
    template:    string;
    isDefault?:  boolean;
    passTest?:   boolean;
    textParams?: Array<TextParam | null>;
    idChar?:     string[];
    params?:     Array<null | string>;
    keyOption?:  string;
}

export type BlockType = "event" | "last" | "param" | "variable";

export interface TextParam {
    type:         TextParamType;
    value?:       null | string;
    options?:     Array<string[]>;
    arrowColor?:  string;
    menuName?:    string;
    fontSize?:    number;
    paramType?:   string;
    codeMap?:     string;
    accept?:      Accept;
    noArrow?:     boolean;
    text?:        string;
    color?:       FontColorEnum;
    isListIndex?: boolean;
    textColor?:   FontColorEnum;
}
