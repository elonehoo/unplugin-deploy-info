import type { Item, Style } from './types'
import * as kolorist from 'kolorist'

function colorize(str: string, style?: Partial<Style>) {
  if (style?.color)
    str = kolorist[style.color](str)

  if (style?.bold !== undefined)
    str = kolorist.bold(str)

  if (style?.italic !== undefined)
    str = kolorist.italic(str)

  if (style?.underline !== undefined)
    str = kolorist.underline(str)

  return str
}

export function getInfoItem(infoItem: Item) {
  const urlRegexp = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+.*$/

  let colorizedMessage = infoItem.message
  if (
    infoItem.isUrlMessage === true
    || (infoItem.isUrlMessage === undefined && urlRegexp.test(infoItem.message))
  ) {
    colorizedMessage = kolorist.cyan(
      infoItem.message.replaceAll(/(\d+)/g, (_, port) => `${kolorist.bold(port)}`),
    )
  }
  else {
    colorizedMessage = colorize(infoItem.message, infoItem.messageStyle)
  }

  return colorizedMessage
}

export function getInfoViteItem(infoItem: Item) {
  const colorizedMessage = getInfoItem(infoItem)
  return `  ${kolorist.green('➜')}  ${kolorist.bold(infoItem.name)}: ${colorizedMessage}`
}

export function getInfoNuxtItem(infoItem: Item) {
  const colorizedMessage = getInfoItem(infoItem)
  return `  > ${infoItem.name}: ${colorizedMessage}`
}
