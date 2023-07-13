export interface Style {
  color: 'reset' | 'dim' | 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray' | 'lightGray' | 'lightRed' | 'lightGreen' | 'lightYellow' | 'lightBlue' | 'lightMagenta' | 'lightCyan' | 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgGray' | 'bgLightRed' | 'bgLightGreen' | 'bgLightYellow' | 'bgLightBlue' | 'bgLightMagenta' | 'bgLightCyan' | 'bgLightGray'
  bold: boolean
  italic: boolean
  underline: boolean
}

export interface Item {
  name: string
  message: string
  messageStyle?: Partial<Style>
  isUrlMessage?: boolean
}

export interface Options {
  info: Item[]
}
