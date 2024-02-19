import { SoundBox } from './classes/SoundBox'

console.log('\n==== Classes test ====\n')

// Sound Boxes

const SCoreQ35: SoundBox = new SoundBox(
  'Anker',
  'Sound Core Q35',
  10,
  'Sound Box',
  ['On/Off', 'Volume Control', 'Play Music']
)

console.log(SCoreQ35)
console.log(SCoreQ35.getMakeAndModel())
console.log('Capabilities: ', SCoreQ35.getCapabilities())
console.log(SCoreQ35.getProductInfo())
