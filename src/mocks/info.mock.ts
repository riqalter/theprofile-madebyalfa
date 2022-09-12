/* eslint-disable quotes */
export interface IInfo {
  intro: string
  Behance: string
  dribbble: string
  instagram: string
  mail: string
  arena: string
  phone: string
  surname: string
  name: string
  infoText1: string
  infoText2: string
  worksIntro: string
  companyName: string
  companyLink: string
  process: { tag: string; description: string }[]
}

export const info: IInfo = {
  intro:
    'Hi, I’m Alfa. I’m a UI/UX designer and front-end developer based in Moscow, Russia. I’m currently working at ',
  Behance: 'https://www.behance.net/AlfaGraphic',
  dribbble: 'https://dribbble.com/madebyalfa',
  instagram: 'https://www.instagram.com/madeby.alfa/',
  arena: '',
  mail: 'madebyalfa@gmail.com',
  phone: 'Whatsapp',
  surname: 'alfaqih',
  name: 'yahya',
  worksIntro:
    'something that describe what you are working on',
  infoText1:
    'what are you doing',
  infoText2:
    "Combining aesthetics and usefulness, I create solid brand image in an artistic way. (for example) ",
  companyName: 'The madebyalfa graphics designer',
  companyLink: '',
  process: [
    {
      tag: 'IDENTIFY',
      description:
        "I start with identifying and specifying all components of the project. This process entails examining the client's purpose and requirements, developing user personas, researching competitors and the market, etc.",
    },
    {
      tag: 'DESIGN',
      description:
        "I begin to envision the project's visual story. I begin by planning, researching and designing concepts that will aid in the creation of a pleasurable and easy-to-use interface and experience that functions as a problem solver.",
    },
    {
      tag: 'DELIVER',
      description:
        'When the design is accepted and approved by the client at the conclusion of the project, I collaborate with developers to ensure that reality fits the concept/idea.',
    },
  ],
}
