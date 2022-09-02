import { useContext, useEffect, useRef } from 'react'
import { AppCard } from '../../../../common/components/Card/AppCard'
import { Checkbox, FormControl, FormGroup, FormLabel, TextField, Button } from '@mui/material'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { authenticate } from '../../../../service/auth/auth.service'
import { LoginRequestDto } from '../../../../service/auth/dto/loginRequest.dto'
import { AuthContext } from '../../context/AuthProvider'
interface LoginFormInputs {
    username: string,
    password: string,
    rememberMe: boolean
}
export const LoginForm = (props: LoginFormPropsType) => {
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            password: "",
            rememberMe: false
        },
    })
    const userNameRef = useRef<HTMLElement>(null)
    const onSubmit: SubmitHandler<LoginFormInputs> = data => {
        let payload: LoginRequestDto = {
            userNameOrEmailAddress: data.username,
            password: data.password,
            rememberClient: data.rememberMe
        }
        console.log(payload)
        return authenticate(payload).then(response => {
            alert(response.data.result)
        }).catch(errors => {
            console.log(errors)
        })
    }
    useEffect(() => {
        userNameRef.current?.focus()
    }, [])
    return (
        <AppCard className='w-[400px] min-w-[400px]' title={'Welcome'}>
            <div className="flex justify-center">
                <div className='w-full px-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup className='text-left'>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Controller
                                    name="username"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, value, name } }) => (
                                        <TextField value={value} onChange={onChange} inputRef={userNameRef} name={name} id="username" variant="outlined" />
                                    )}
                                />
                            </FormControl>
                        </FormGroup>
                        <FormGroup className='text-left mt-3'>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField {...field} className='' type="password" autoComplete='off' id="password" variant="outlined" />
                                    )}
                                />
                            </FormControl>
                        </FormGroup>
                        <div className='flex items-center'>
                            <FormLabel>Remember me</FormLabel>
                            <Controller
                                name="rememberMe"
                                control={control}
                                rules={{ required: true }}
                                defaultValue={true}
                                render={({ field }) => (
                                    <Checkbox {...field} sx={{ marginLeft: 0 }} />
                                )}
                            />
                        </div>
                        <div className="text-right mt-3">
                            <Button type='submit' variant='contained' className='bg-blue-600'>Login</Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppCard>
    )
}

export interface LoginFormPropsType {

}