import React from 'react'

export interface Props {
  text: string
}

export const Text: React.FC<Props> = ({text}) => <h2>{text}</h2>
