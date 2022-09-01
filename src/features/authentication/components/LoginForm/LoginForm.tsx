import React from 'react'
import { AppCard } from '../../../../common/components/Card/AppCard'
import { Button, Checkbox, FormControl, FormGroup, FormLabel, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
export const LoginForm = (props: LoginFormPropsType) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    return (
        <AppCard className='w-[400px] min-w-[400px]' title={'Welcome'}>
            <div className="flex justify-center">
                <div className='w-full px-4'>
                    <FormGroup className='text-left'>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <TextField required className='' id="outlined-basic" variant="outlined" />
                        </FormControl>
                    </FormGroup>
                    <FormGroup className='text-left mt-3'>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <TextField required className='' type="password" id="outlined-basic" variant="outlined" />
                        </FormControl>
                    </FormGroup>
                    <div className='flex items-center'>
                        <FormLabel>Remember me</FormLabel>
                        <Checkbox required sx={{marginLeft:0}}/>
                    </div>
                    <div className="text-right mt-3">
                        <Button variant='contained' className='bg-blue-600'>Login</Button>
                    </div>
                </div>
            </div>
        </AppCard>
    )
}

export interface LoginFormPropsType {

}