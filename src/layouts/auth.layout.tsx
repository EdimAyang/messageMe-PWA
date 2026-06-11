import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { useAuthStore } from "../store/auth.store.ts"
import { Navigate } from "react-router-dom"
import { PATHS } from "../routes/paths.ts"


const AuthLayout = ()=>{
    const { isOnboarded } = useAuthStore()

    if (!isOnboarded) return <Navigate to={PATHS.SPLASH} replace={true} />
    // if (!isAuthenticated) return <Navigate to='@/pages/auth/Login' replace={true} />

    return(
        <>
        <StyledAuthLayout>
            <Outlet />
        </StyledAuthLayout>
        </>
    )
}
export default AuthLayout



const StyledAuthLayout = styled.div`
width:100%;


`