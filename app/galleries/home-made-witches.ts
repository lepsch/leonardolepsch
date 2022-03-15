import outdent from 'outdent'
import Gallery from './Gallery'

import IMG01_2830 from '../images/home-made-witches/IMG01_2830.jpg'
import IMG02_2813b from '../images/home-made-witches/IMG02_2813b.jpg'
import IMG03_2883b from '../images/home-made-witches/IMG03_2883b.jpg'
import IMG03_3064 from '../images/home-made-witches/IMG03_3064.jpg'
import IMG04_2883b from '../images/home-made-witches/IMG04_2883b.jpg'
import IMG04_8445 from '../images/home-made-witches/IMG04_8445.jpg'
import IMG05_3064 from '../images/home-made-witches/IMG05_3064.jpg'
import IMG05_8445 from '../images/home-made-witches/IMG05_8445.jpg'
import IMG06_7644 from '../images/home-made-witches/IMG06_7644.jpg'
import IMG07_8181 from '../images/home-made-witches/IMG07_8181.jpg'
import IMG08_4183 from '../images/home-made-witches/IMG08_4183.jpg'
import IMG09_6940 from '../images/home-made-witches/IMG09_6940.jpg'
import IMG10_6491b from '../images/home-made-witches/IMG10_6491b.jpg'
import IMG11_1833 from '../images/home-made-witches/IMG11_1833.jpg'
import IMG12__1963 from '../images/home-made-witches/IMG12__1963.jpg'
import IMG13_1358 from '../images/home-made-witches/IMG13_1358.jpg'
import IMG14_7941 from '../images/home-made-witches/IMG14_7941.jpg'
import IMG15_2997 from '../images/home-made-witches/IMG15_2997.jpg'
import IMG16_2289c from '../images/home-made-witches/IMG16_2289c.jpg'
import IMG17_2462 from '../images/home-made-witches/IMG17_2462.jpg'
import IMG18_2445 from '../images/home-made-witches/IMG18_2445.jpg'
import IMG19_3985b from '../images/home-made-witches/IMG19_3985b.jpg'
import IMG20b_7664 from '../images/home-made-witches/IMG20b_7664.jpg'
import IMG21_5738b from '../images/home-made-witches/IMG21_5738b.jpg'
import IMG22_5773 from '../images/home-made-witches/IMG22_5773.jpg'
import IMG23_3541 from '../images/home-made-witches/IMG23_3541.jpg'
import IMG24_6452 from '../images/home-made-witches/IMG24_6452.jpg'
import IMG25_6056 from '../images/home-made-witches/IMG25_6056.jpg'
import IMG26_6360 from '../images/home-made-witches/IMG26_6360.jpg'
import IMG27_7440 from '../images/home-made-witches/IMG27_7440.jpg'
import IMG28_7350 from '../images/home-made-witches/IMG28_7350.jpg'
import IMG29_0034 from '../images/home-made-witches/IMG29_0034.jpg'
import IMG29_9443 from '../images/home-made-witches/IMG29_9443.jpg'
import IMG30_0352 from '../images/home-made-witches/IMG30_0352.jpg'
import IMG30_9943 from '../images/home-made-witches/IMG30_9943.jpg'
import IMG31_0034 from '../images/home-made-witches/IMG31_0034.jpg'
import IMG31_9443 from '../images/home-made-witches/IMG31_9443.jpg'
import IMG32_0352 from '../images/home-made-witches/IMG32_0352.jpg'
import IMG32_9943 from '../images/home-made-witches/IMG32_9943.jpg'

import IMG01_2830_t from '../images/home-made-witches/thumbnails/IMG01_2830.jpg'
import IMG02_2813b_t from '../images/home-made-witches/thumbnails/IMG02_2813b.jpg'
import IMG03_2883b_t from '../images/home-made-witches/thumbnails/IMG03_2883b.jpg'
import IMG03_3064_t from '../images/home-made-witches/thumbnails/IMG03_3064.jpg'
import IMG04_2883b_t from '../images/home-made-witches/thumbnails/IMG04_2883b.jpg'
import IMG04_8445_t from '../images/home-made-witches/thumbnails/IMG04_8445.jpg'
import IMG05_3064_t from '../images/home-made-witches/thumbnails/IMG05_3064.jpg'
import IMG05_8445_t from '../images/home-made-witches/thumbnails/IMG05_8445.jpg'
import IMG06_7644_t from '../images/home-made-witches/thumbnails/IMG06_7644.jpg'
import IMG07_8181_t from '../images/home-made-witches/thumbnails/IMG07_8181.jpg'
import IMG08_4183_t from '../images/home-made-witches/thumbnails/IMG08_4183.jpg'
import IMG09_6940_t from '../images/home-made-witches/thumbnails/IMG09_6940.jpg'
import IMG10_6491b_t from '../images/home-made-witches/thumbnails/IMG10_6491b.jpg'
import IMG11_1833_t from '../images/home-made-witches/thumbnails/IMG11_1833.jpg'
import IMG12__1963_t from '../images/home-made-witches/thumbnails/IMG12__1963.jpg'
import IMG13_1358_t from '../images/home-made-witches/thumbnails/IMG13_1358.jpg'
import IMG14_7941_t from '../images/home-made-witches/thumbnails/IMG14_7941.jpg'
import IMG15_2997_t from '../images/home-made-witches/thumbnails/IMG15_2997.jpg'
import IMG16_2289c_t from '../images/home-made-witches/thumbnails/IMG16_2289c.jpg'
import IMG17_2462_t from '../images/home-made-witches/thumbnails/IMG17_2462.jpg'
import IMG18_2445_t from '../images/home-made-witches/thumbnails/IMG18_2445.jpg'
import IMG19_3985b_t from '../images/home-made-witches/thumbnails/IMG19_3985b.jpg'
import IMG20b_7664_t from '../images/home-made-witches/thumbnails/IMG20b_7664.jpg'
import IMG21_5738b_t from '../images/home-made-witches/thumbnails/IMG21_5738b.jpg'
import IMG22_5773_t from '../images/home-made-witches/thumbnails/IMG22_5773.jpg'
import IMG23_3541_t from '../images/home-made-witches/thumbnails/IMG23_3541.jpg'
import IMG24_6452_t from '../images/home-made-witches/thumbnails/IMG24_6452.jpg'
import IMG25_6056_t from '../images/home-made-witches/thumbnails/IMG25_6056.jpg'
import IMG26_6360_t from '../images/home-made-witches/thumbnails/IMG26_6360.jpg'
import IMG27_7440_t from '../images/home-made-witches/thumbnails/IMG27_7440.jpg'
import IMG28_7350_t from '../images/home-made-witches/thumbnails/IMG28_7350.jpg'
import IMG29_0034_t from '../images/home-made-witches/thumbnails/IMG29_0034.jpg'
import IMG29_9443_t from '../images/home-made-witches/thumbnails/IMG29_9443.jpg'
import IMG30_0352_t from '../images/home-made-witches/thumbnails/IMG30_0352.jpg'
import IMG30_9943_t from '../images/home-made-witches/thumbnails/IMG30_9943.jpg'
import IMG31_0034_t from '../images/home-made-witches/thumbnails/IMG31_0034.jpg'
import IMG31_9443_t from '../images/home-made-witches/thumbnails/IMG31_9443.jpg'
import IMG32_0352_t from '../images/home-made-witches/thumbnails/IMG32_0352.jpg'
import IMG32_9943_t from '../images/home-made-witches/thumbnails/IMG32_9943.jpg'

const images: Gallery['images'] = [
  {
    original: IMG01_2830,
    thumbnail: IMG01_2830_t,
    description: outdent`
      Name: Rebecca Ime Sunday, 14 years old
      Accusation: Of being a witch and causing her mother's illness
      Punishment: Forced to fast, tied with ropes and tortured with bricks and made to drink her own blood
      Redemption: Found roaming the streets and taken to the orphanage
    `
  },
  {
    original: IMG02_2813b,
    thumbnail: IMG02_2813b_t,
    description: outdent`
      Name: Idongesit John, 13 years old (on the right). Akpautong village
      Accusation: Father believed she was a witch. Blamed for the loss of his job and divorce
      Punishment: Thrown out into the streets
      Redemption: Found and taken to the orphanage
    `
  },
  {
    original: IMG03_3064,
    thumbnail: IMG03_3064_t,
    description: outdent`
      "Acting in a mischievous way is a key symptom to a child being a witch. If a child around two years of age wakes up in the middle of the night crying or having a fever it implies that the child is a witch" according to a book written by a popular Nigerian preacher named Helen Ukpabio
    `
  },
  // {
  //   original: IMG03_2883b,
  //   thumbnail: IMG03_2883b_t,
  // },
  {
    original: IMG04_2883b,
    thumbnail: IMG04_2883b_t,
    description: outdent`
      Name: Idongesti Friday Akpan, age unknown. Eket in Akwa Ibom State
      Accusation: Father blamed her for her mother's death and accused her of being a witch
      Punishment: Thrown out into the streets
      Redemption: Found and taken to the orphanage
    `
  },
  // {
  //   original: IMG04_8445,
  //   thumbnail: IMG04_8445_t,
  // },
  // {
  //   original: IMG05_3064,
  //   thumbnail: IMG05_3064_t,
  // },
  {
    original: IMG05_8445,
    thumbnail: IMG05_8445_t,
    description: outdent`
      Name: Mary Efflong Uno, 8 years old
      Accusation: Stigmatised by mother
      Punishment: Locked up in a room and left to starve. Escaped onto the streets
      Redemption: Found and taken to the orphanage.
    `
  },
  {
    original: IMG06_7644,
    thumbnail: IMG06_7644_t,
    description: outdent`
      Name: Hezekiah Okon Ekipma, 7 years old
      Accusation: Of being a witch by a family friend
      Punishment: Left to starve by his father to extract a confession and led by his older brother into the forest to be killed
      Redemption: Escaped and directed to the orphanage
    `
  },
  {
    original: IMG07_8181,
    thumbnail: IMG07_8181_t,
    description: outdent`
      Hezekiah's broken arm being painfully put back in place by a local doctor.
    `
  },
  {
    original: IMG08_4183,
    thumbnail: IMG08_4183_t,
    description: outdent`
      Witch children often have to count on the mercy of strangers as they cannot rely on their families who see them as the enemy.
    `
  },
  {
    original: IMG09_6940,
    thumbnail: IMG09_6940_t,
    description: outdent`
      From the children's point of view the darkness imposed on them comes from above and they associate the spirit of evil with the name of Jesus.
    `
  },
  {
    original: IMG10_6491b,
    thumbnail: IMG10_6491b_t,
    description: outdent`
      Name: Emmilia (on the back), age unknown
      Accusation: She developed a large lump on her back and her brother was accused of causing it by witchcraft. It transpired the lump was caused by TB
      Punishment: Her brother was exiled from the community
      Redemption: Her brother is in the orphanage, Emmilia carries the guilt
    `
  },
  {
    original: IMG11_1833,
    thumbnail: IMG11_1833_t,
    description: outdent`
      An orphanage called Crarn was founded by a Nigerian man called Sam Itauma from a city called Eket in Akwa Ibom State. The orphanage began when he found four children wandering in the streets and decided to rescue them leading to all children under the accusation of being a witch coming to knock on his door in the hope of a safe haven.
    `
  },
  {
    original: IMG12__1963,
    thumbnail: IMG12__1963_t,
    description: outdent`
      Name: Moses Etin Dan, age unknown
      Accusation: Blamed by his father for his mother's death
      Punishment: Driven out of his home
      Redemption: Found on the street and taken to the orphanage
    `
  },
  {
    original: IMG13_1358,
    thumbnail: IMG13_1358_t,
    description: outdent`
      Name: Grace Ime Ukpong, 12 years of age
      Accusation: Accused by a pastor of being a witch
      Punishment: Sent to roam the streets
      Redemption: Found and taken to the orphanage
    `
  },
  {
    original: IMG14_7941,
    thumbnail: IMG14_7941_t,
    description: outdent`
      Name: Akpan, 2 years old
      Accusation: Of being a witch
      Punishment: Left by a roadside, found to have a serious spinal condition as a result of TB
      Redemption: Lives in the orphanage
    `
  },
  {
    original: IMG15_2997,
    thumbnail: IMG15_2997_t,
    description: outdent`
      Jojo de Olivença, on the right, a Brazilian surfing champion helping Nigerian street children to use surf boards as a vehicle for education and teaching a process of trust in people and respect for the environment.
    `,
  },
  {
    original: IMG16_2289c,
    thumbnail: IMG16_2289c_t,
    description: outdent`
      Name: Uwana Monday Dan, 12 years old
      Accusation: His mother believed he was a witch, as he was called this by his friend and confirmed by a church prophet
      Punishment: Tied up, blindfolded, chopped with a machete and left to die tied to an orange tree
      Redemption: Rescued and taken to the orphanage.
    `
  },
  {
    original: IMG17_2462,
    thumbnail: IMG17_2462_t,
    description: outdent`
      Name: Edidlong Afla Edoho, age unknown
      Accusation: Of being a witch
      Punishment: Exiled from his home
      Redemption: Saved to the orphanage
    `
  },
  {
    original: IMG18_2445,
    thumbnail: IMG18_2445_t,
    description: outdent`
      Children being taken to the beach by the Brazilian NGO Waves Project.
    `
  },
  {
    original: IMG19_3985b,
    thumbnail: IMG19_3985b_t,
    description: outdent`
      Name: Mmandeu, 17 years old
      Accusation: Her spirit had left her body in the night, gone to the forest to make a covenant with witches
      Punishment: Abandoned on the streets, raped and fell pregnant
      Redemption: Back at home with the baby
    `
  },
  {
    original: IMG20b_7664,
    thumbnail: IMG20b_7664_t,
    description: outdent`
      Name: Etido Gabriel Akpan, 8 years old
      Accusation: Was stigmatised because of his epilepsy
      Punishment: Hurt and abandoned in the streets
      Redemption: Incapable of speaking, body full of scars but rescued by the orphanage
    `
  },
  {
    original: IMG21_5738b,
    thumbnail: IMG21_5738b_t,
    description: outdent`
      Name: Samuel (on the right), 8 years old
      Accusation: Of witchcraft
      Punishment: Exiled by his family and thrown onto the streets
      Redemption: Stepping Stone Nigeria talked his family into taking him back, that he wasn't a witch and he is back leading a normal life
    `
  },
  {
    original: IMG22_5773,
    thumbnail: IMG22_5773_t,
    description: outdent`
      Name: Udo, 16 years of age
      Accusation: Deemed to be a witch and betrayed
      Punishment: Abandoned by his family and became a product of human traffic. He doesn't trust anyone and fights to survive.
    `
  },
  {
    original: IMG23_3541,
    thumbnail: IMG23_3541_t,
    description: outdent`
      When discussing the Gospel of Jesus in relation to witchcraft, people appear confused by the dilemma of the spoken versus the written Word, or interpretation versus truth.
    `
  },
  {
    original: IMG24_6452,
    thumbnail: IMG24_6452_t,
    description: outdent`
      Local pastors fail to address the subject of witchcraft for fear of losing their church and the support of their community.
    `
  },
  {
    original: IMG25_6056,
    thumbnail: IMG25_6056_t,
    description: outdent`
      Self-appointed pastors keep witch children, mainly women, for months on end for alleged deliverance ministry which includes pagan rituals as well as receiving financial incentives from the family. Often, these children go back home pregnant.
    `
  },
  {
    original: IMG26_6360,
    thumbnail: IMG26_6360_t,
    description: outdent`
      Deep in the communities most affected by the witchcraft beliefs the team of the NGO Way to the Nations not only clarifies what the Gospel of Jesus actually say about children but also pray with the community asking God to cast out the fear of their hearts and fill it with love for one another. This kind of action seems to have more effect on the people than would a governmental law or doctors words.
    `
  },
  {
    original: IMG27_7440,
    thumbnail: IMG27_7440_t,
    description: outdent`
      Children in seeking vindication and acceptance from their families put themselves forward to be prayed for by men of faith, strangers who tell them that they are children of a living and loving God.
    `
  },
  {
    original: IMG28_7350,
    thumbnail: IMG28_7350_t,
    description: outdent`
      Village chiefs in view of the lack of communal education often determine what their people believe or not. It is often up to them to decide whether a child is possessed or not. It is up to them to alter children's destiny for the better or for the worse.
    `
  },
  {
    original: IMG29_0034,
    thumbnail: IMG29_0034_t,
    description: outdent`
      Archbishop Idem Ikon, who ministers in the city of Uyo, leads the fight against witchcraft accusations in the state of Akwa Ibom. Whilst well respected by the community he serves he has as yet been unable to influence other church leaders to assist him and fight this evil belief.
    `
  },
  // {
  //   original: IMG29_9443,
  //   thumbnail: IMG29_9443_t,
  // },
  {
    original: IMG30_0352,
    thumbnail: IMG30_0352_t,
    description: outdent`
      Mrs Ann Medekomg an English lady who, together with her husband, has been fighting to defend the witch children of Nigeria. She uses dramatic art forms to portray the reality and the severity of this national problem caused by false beliefs.
    `
  },
  // {
  //   original: IMG30_9943,
  //   thumbnail: IMG30_9943_t,
  // },
  // {
  //   original: IMG31_0034,
  //   thumbnail: IMG31_0034_t,
  // },
  {
    original: IMG31_9443,
    thumbnail: IMG31_9443_t,
    description: outdent`
      When his single mum passed away, his grandmother raised him and taught him about the Gospel of Jesus and that he should be salt and light to his community and the society at large. His knowledge of truth served him well and he is now a student of psychology working for Stepping Stone Nigeria fighting for children’s rights.
    `
  },
  // {
  //   original: IMG32_0352,
  //   thumbnail: IMG32_0352_t,
  // },
  {
    original: IMG32_9943,
    thumbnail: IMG32_9943_t,
    description: outdent`
      His mother, called Mercy, decided that in order to cure him of his demon possession that he should be tied and chained to the pillar in the back of the church until it was deemed that he was spiritually cleansed. He stayed there for weeks and lived like an animal on a daily portion of water and bread, exposed to the elements and unloved.
    `
  },
]

const gallery: Gallery = {
  id: 'home-made-witches',
  images,
  title: 'Home Made Witches',
  subtitle: 'Living back in the burning times',
}

export default gallery
