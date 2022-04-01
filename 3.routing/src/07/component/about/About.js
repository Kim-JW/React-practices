import React from 'react';
import { Outlet } from 'react-router';
import SiteLayout from "../../layout/SiteLayout";
import styles1 from '../../assets/scss/component/About.scss';
import Navigation from './Navigation';

export default function About() {
    return (
        <SiteLayout>
            <Navigation />
            <Outlet />
        </SiteLayout>
    );
}