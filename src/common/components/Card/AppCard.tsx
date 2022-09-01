import React, { ReactNode } from 'react'
import { Card, CardHeader, CardContent } from '@mui/material'
export const AppCard = (props: AppCardPropsType) => {
  if (props.children) return (
    <Card className={props.className}>
      <CardHeader className='border-b-2' title={props.title} />
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  ) 
  return (
    <Card className={props.className}>
      <CardHeader title={props.title} />
    </Card>
  )
}

export interface AppCardPropsType {
  title: string,
  children?: ReactNode,
  className?: string
}