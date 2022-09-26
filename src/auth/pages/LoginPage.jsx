import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startLoginWithEmailPassword, startGoogleSignIn } from '../../store/auth';

export const LoginPage = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { email, password, onInputChange, formState } = useForm({
        email: 'braulio@google.com',
        password: '123456'
    });
    const isAuthenticated = useMemo(() => status === 'checking', [status]);
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }));
    }
    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }
    // const onEmailPasswordSignIn = () => {
    //     dispatch(startLoginWithEmailPassword(formState));
    // }
    return (
        <AuthLayout title="Login" >
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticated}
                                type="submit"
                                variant='contained'
                                fullWidth
                            // onClick={onEmailPasswordSignIn}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticated}
                                variant='contained'
                                fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color='inherit' to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
                {/* <code>{status}</code> */}
            </form>
        </AuthLayout>
    )
}
