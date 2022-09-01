import { useEffect, useRef } from 'react'
import { AppCard } from '../../../../common/components/Card/AppCard'
import { Button, Checkbox, FormControl, FormGroup, FormLabel, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
export const LoginForm = (props: LoginFormPropsType) => {
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    })
    const userNameRef = useRef<HTMLElement>(null)
    useEffect(() => {
        userNameRef.current?.focus()
    }, [])
    return (
        <AppCard className='w-[400px] min-w-[400px]' title={'Welcome'}>
            <div className="flex justify-center">
                <div className='w-full px-4'>
                    <form>
                        <FormGroup className='text-left'>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Controller
                                    name="username"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField required value={value} inputRef={userNameRef} id="username" variant="outlined" />

                                    )}
                                />
                            </FormControl>
                        </FormGroup>
                        <FormGroup className='text-left mt-3'>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <TextField required className='' type="password" autoComplete='off' id="password" variant="outlined" />
                            </FormControl>
                        </FormGroup>
                        <div className='flex items-center'>
                            <FormLabel>Remember me</FormLabel>
                            <Checkbox required sx={{ marginLeft: 0 }} />
                        </div>
                        <div className="text-right mt-3">
                            <Button variant='contained' className='bg-blue-600'>Login</Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppCard>
    )
}

export interface LoginFormPropsType {

}