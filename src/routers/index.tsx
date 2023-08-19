import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutClient from "../layout/client/LayoutClient"
import PlaylistPage from "../pages/client/home/PlaylistPage"
import SpotifyPage from "../pages/client/spotify/SpotifyPage"
import SigninPage from "../pages/client/signin/SigninPage"
import SignupPage from "../pages/client/signup/SignupPage"
import NotFoundPage from "../pages/client/404"
const Router = () => {
    return (
        <Routes>
            <Route path='' element={<LayoutClient />}>
                <Route index element={<PlaylistPage />} />
                <Route path='spotify'>
                    <Route index element={<SpotifyPage />} />
                    <Route path=':id' />
                </Route>
            </Route>
            {/* <Route path='admin' element={<LayoutAdmin />}>
                    <Route index element={<Management />} />
                    <Route path='products'>
                        <Route index element={<ManagementProduct />} />
                        <Route path=':id/update' element={<ManagementProductUpdate />} />
                    </Route>
                    <Route path='categories'>
                        <Route index element={<ManageCategory />} />
                        <Route path=':id/update' element={<ManageCategoryUpdate />} />
                    </Route>
                    <Route path='hashtags'>
                        <Route index element={<ManageHashtag />} />
                        <Route path=':id/update' element={<ManageHashtagUpdate />} />
                    </Route>
                    <Route path='abouts'>
                        <Route index element={<ManageAbout />} />
                        <Route path=':id/update' element={<ManageAboutUpdate/>} />
                    </Route>
                    <Route path='order/bill'>
                        <Route index element={<ManageBill />} />
                        <Route path=':id/update' element={<ManageBillUpdate />} />
                    </Route>
                    <Route path='comments'>
                        <Route index element={<ManageComment />} />
                    </Route>
                    <Route path='contacts'>
                        <Route index element={<ManageContact />} />
                    </Route>
                    <Route path='accounts'>
                        <Route index element={<ManageUser />} />
                    </Route>
                </Route> */}
            <Route path='signin' element={<SigninPage />}></Route>
            <Route path='signup' element={<SignupPage />}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
    )
}
export default Router