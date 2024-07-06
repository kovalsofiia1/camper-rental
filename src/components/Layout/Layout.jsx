import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from '../Header/Header';
import css from './Layout.module.css';
import Message from "../Message/Message";
import { ColorRing } from "react-loader-spinner";

export default function Layout() {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.page}>
        <Suspense fallback={<Message><ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        /></Message>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
